import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { ButtonSubmit, Field, FieldError, Forma, FormAuth, LinkRegister, Error } from "../../Form/ui/styles/style";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUser } from "../../../shared/api/usersApi";
import { IUser } from "../../../shared/types/IUser";
import { useAuth } from "../../../app/context/AuthContex";

const Login = () => {
    const [error, setError] = useState(null)
    const { isAuth, authUser } = useAuth()

    const navigate = useNavigate();

    useEffect(() => {
      if(isAuth) {
        navigate('/list')
      }
    }, [isAuth, navigate])
    
    const formSchema = Yup.object().shape({
        email: Yup.string().email('Некорректный email')
          .required("Введите email"),
        password: Yup.string()
          .required("Введите пароль")
          .min(4, "Минимально 4 символа")
          .max(12, "Максимально 12 символов"),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(formSchema),
      })
     
    const handlerSubmit = async (data: IUser) => {
        const res = await loginUser(data)
        if (!res.error) {
          authUser(res.user)
          localStorage.setItem('token', res.token)
          reset()
          navigate('/list')
        } else {
          setError(res.error)
        }
    };
  
    return (
      <FormAuth>
        <h1>Авторизация</h1>
        <Forma onSubmit={handleSubmit(handlerSubmit)} noValidate>
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
              <LinkRegister>
                <span>У вас нет аккаунта?</span>
                <Link to={'/register'}>Зарегистрироваться</Link>
              </LinkRegister>
              <Error>
                {error}
              </Error>
              <ButtonSubmit type='submit'>Войти</ButtonSubmit>
        </Forma>
      </FormAuth>
    );
  };
  
  export default Login;