const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const SECRET_KEY = 'avito-test';

const ItemTypes = {
  REAL_ESTATE: 'Недвижимость',
  AUTO: 'Авто',
  SERVICES: 'Услуги',
};

const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// In-memory хранилище для объявлений
let items = [];
// In-memory хранилище для пользователей
let users = [];

const makeCounter = () => {
  let count = 0;
  return () => count++;
};

const itemsIdCounter = makeCounter();

const usersIdCounter = makeCounter();

// Функция для генерации JWT
function generateToken(userId) {
  // Payload (полезная нагрузка) токена: информация, которую мы хотим хранить в токене
  const payload = {
    userId: userId, // ID пользователя
    // role: 'user'  // Можно добавить роль пользователя, если необходимо
  };

  // Опции токена (срок действия)
  const options = {
    expiresIn: '1d' // Токен истекает через 1 день (можно настроить)
  };

  // Генерация токена
  return jwt.sign(payload, SECRET_KEY, options);
}

// Создание нового пользователя
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Проверка обязательных полей
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Missing required common fields' });
  }

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'Такой email уже зарегистрирован' });
  }

  const userId = usersIdCounter()

  const user = {
    id: userId,
    username,
    email,
    password,
  };

  users.push(user);

  // Генерируем JWT для нового пользователя
  const token = generateToken(userId);

  res.status(201).json({ user: user, token: token });
});

// Функция авторизации (логин)
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
  }

  const user = users.find(u => u.email === email);

  if (!user) {
      return res.status(401).json({ error: 'Неверный email или пароль' });
  }

  // Сравниваем введенный пароль с хешированным паролем из базы данных
  if (password !== user.password) {
      return res.status(401).json({ error: 'Неверный email или пароль' });
  }

  // Если пароль верен, генерируем JWT
  const token = generateToken(user.id);

  // Отправляем JWT в ответе
  res.json({ message: 'Успешная авторизация', token: token, user: user });
});

// Проверяем пользователя по токену
app.get('/protected', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
      return res.status(401).json({ error: 'Отсутствует токен' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
          return res.status(401).json({ error: 'Недействительный токен' });
      }

      const userId = decoded.userId;
      const user = users.find(u => u.id === userId);

      if (!user) {
          return res.status(404).json({ error: 'Пользователь не найден' });
      }

      res.json({ message: `Доступ разрешен. User ID: ${userId}, Username: ${user.username}`, user: user });
  });
});

// Создание нового объявления
app.post('/items', (req, res) => {
  const { idUser, name, description, location, type, ...rest } = req.body;

  // Validate common required fields
  if (!name || !description || !location || !type) {
    return res.status(400).json({ error: 'Missing required common fields' });
  }

  switch (type.value) {
    case ItemTypes.REAL_ESTATE:
      if (!rest.propertyType || !rest.area || !rest.rooms || !rest.price) {
        return res
          .status(400)
          .json({ error: 'Missing required fields for Real estate' });
      }
      break;
    case ItemTypes.AUTO:
      if (!rest.brand || !rest.model || !rest.year || !rest.mileage) {
        return res
          .status(400)
          .json({ error: 'Missing required fields for Auto' });
      }
      break;
    case ItemTypes.SERVICES:
      if (!rest.serviceType || !rest.experience || !rest.cost) {
        return res
          .status(400)
          .json({ error: 'Missing required fields for Services' });
      }
      break;
    default:
      return res.status(400).json({ error: 'Invalid type' });
  }

  const item = {
    id: itemsIdCounter(),
    name,
    description,
    location,
    type,
    ...rest,
  };

  if (items[idUser]) {
    items[idUser].push(item)
  } else {
    items[idUser] = [item]
  }

  res.status(201).json(item);
});

// Получение всех объявлений
app.post('/items-all', (req, res) => {
  const { idUser } = req.body;
  if(items[idUser]) {
    res.json(items[idUser]);
  } else {
    res.json([]);
  }
});

// Получение объявления по его id
app.post('/items/:id', (req, res) => {
  const { idUser } = req.body;
  const item = items[idUser].find(i => i.id === parseInt(req.params.id, 10));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// Обновление объявления по его id
app.put('/items/:id', (req, res) => {
  const { idUser } = req.body;
  const item = items[idUser].find(i => i.id === parseInt(req.params.id, 10));
  if (item) {
    Object.assign(item, req.body);
    res.json(item);
  } 
  else {
    res.status(404).send('Item not found');
  }
});

// Удаление объявления по его id
app.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id, 10));
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Item not found');
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
