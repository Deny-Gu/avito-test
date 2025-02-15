import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { ButtonSubmit, Field, FieldError, Forma, FormAuth, LinkRegister, Error } from "../../Form/ui/styles/style";
import { registerUser } from "../../../shared/api/usersApi";
import { useEffect, useState } from "react";
import { useAuth } from "../../../app/context/AuthContex";
import { IRegisterUser } from "../../../shared/types/IRegisterUser";

const Register = () => {
    const [error, setError] = useState(null)
    const { isAuth } = useAuth()

    const navigate = useNavigate();  // Используем useNavigate для перенаправления
  

    useEffect(() => {
      if(isAuth) {
        navigate('/list')
      }
    }, [isAuth, navigate])
    
    const formSchema = Yup.object().shape({
        username: Yup.string()
          .required("Введите имя пользователя")
          .min(4, "Минимально 4 символа")
          .max(12, "Максимально 12 символов"),
        email: Yup.string().email('Некорректный email')
          .required("Введите email"),
        password: Yup.string()
          .required("Введите пароль")
          .min(4, "Минимально 4 символа")
          .max(12, "Максимально 12 символов"),
        cpassword: Yup.string()
          .required("Подтвердите пароль")
          .min(4, "Минимально 4 символа")
          .max(12, "Максимально 12 символов")
          .oneOf([Yup.ref("password")], "Пароли не совпадают")
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IRegisterUser>({
        resolver: yupResolver(formSchema),
      })
  
    const handlerSubmit = async (data: IRegisterUser) => {
        const res = await registerUser(data)
        if (res.error) {
          setError(res.error)
        } else {
          reset()
          navigate('/login');  // Перенаправление на страницу логина после успешной регистрации
        }
    };
  
    return (
      <FormAuth>
        <h1>Регистрация</h1>
        <Forma onSubmit={handleSubmit(handlerSubmit)} noValidate>
            <Field>
                  <label htmlFor='username'>Имя пользователя</label>
                  <input {...register("username")} type="text" id='username' />
                  {errors.username && <FieldError>{errors.username.message?.toString()}</FieldError>}
              </Field>
              <Field>
                  <label htmlFor='email'>Email</label>
                  <input {...register("email")} type="email" id='email' />
                  {errors.email && <FieldError>{errors.email.message?.toString()}</FieldError>}
              </Field>
              <Field>
                  <label htmlFor='password'>Пароль</label>
                  <input {...register("password")} type="password" id='password' />
                  {errors.password && <FieldError>{errors.password.message?.toString()}</FieldError>}
              </Field>
              <Field>
                  <label htmlFor='cpassword'>Пароль</label>
                  <input {...register("cpassword")} type="password" id='cpassword' />
                  {errors.cpassword && <FieldError>{errors.cpassword.message?.toString()}</FieldError>}
              </Field>
              <LinkRegister>
                <span>У вас уже есть аккаунта?</span>
                <Link to={'/login'}>Войти</Link>
              </LinkRegister>
              <Error>
                {error}
              </Error>
              <ButtonSubmit type='submit'>Зарегистрироваться</ButtonSubmit>
        </Forma>
      </FormAuth>
    );
  };
  
  export default Register;