import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IAdvertisement } from "../../../shared/types/IAdvertisement";
import { createAdvertisement, editAdvertisement } from "../../../shared/api/advertisementApi";
import { Realty } from "./steps/Reality";
import { Auto } from "./steps/Auto";
import { Services } from "./steps/Services";
import { General } from "./steps/General";
import { ButtonPrev, ButtonSubmit, Forma, FormWrapper, Title } from "./styles/style";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../app/context/AuthContex";

function Form() {
    const [step, setStep] = useState<number>(1)
    const [category, setCategory] = useState<string>('')
    const [item, setItem] = useState<IAdvertisement | null>(null)
    const { register, handleSubmit, getValues, formState: { errors }, control, reset } = useForm<IAdvertisement>()
    const navigate = useNavigate();
    const { state } = useLocation();
    const { user } = useAuth()

    useEffect(() => {
        if (state) {
            setItem(state)
            reset(state)
        }
    }, [getValues, reset, state])

    const handlerSubmit = (data: IAdvertisement) => {
        if (step === 1) { 
            if (data.name && data.description && data.location && data.type) {
                setCategory(data.type.label)
                setStep(2)
            }
        }
        if (step === 2) {
            if (user) {
                if (item) {
                    editAdvertisement(user.id, data)
                } else {
                    createAdvertisement(user.id, data)
                }
            }
            reset()
            navigate('/list')
        }
    };

    const handlerPrev = () => {
        setStep(1)
    }

    return (
        <FormWrapper>
            <Title>{item ? 'Редактирование объявления' : 'Новое объявление'}</Title>
            <Forma onSubmit={handleSubmit(handlerSubmit)} >
                {step === 1 && <General control={control} register={register} errors={errors} />}
                {step === 2 && <>
                    {category.includes('Недвижимость') && <Realty control={control} register={register} errors={errors} />}
                    {category.includes('Авто') && <Auto control={control} register={register} errors={errors} />}
                    {category.includes('Услуги') && <Services control={control} register={register} errors={errors} />}
                    <ButtonPrev onClick={handlerPrev}>
                        <FaArrowLeft />
                    </ButtonPrev>
                </>}
                <ButtonSubmit type='submit'>
                        {step === 1 && 'Продолжить'}
                        {step === 2 && item && 'Сохранить'}
                        {step === 2 && !item && 'Создать объявление'}
                </ButtonSubmit>
            </Forma>
        </FormWrapper>
    )
}

export default Form