import { Controller } from "react-hook-form"
import { Field, FieldError } from "../styles/style"
import Select from "react-select"
import { IStepProps } from "../../types/IStepProps";

export const Auto = ({ control, register, errors }: IStepProps ) => {

    const selectOptionsAuto = [
        { value: "BMW", label: "BMW" },
        { value: "Audi", label: "Audi" },
        { value: "Porshe", label: "Porshe" }
    ];

    return (
        <>
            <Field>
                <label htmlFor='brand'>Марка</label>
                <Controller name="brand" control={control} rules={{ required: 'Выберите марку' }} render={({ field }) => (
                        <Select className="select" placeholder={''} options={selectOptionsAuto} {...field} />
                    )} />
                {errors.brand && <FieldError>{errors.brand.message?.toString()}</FieldError>}
            </Field>
            <Field>
                <label htmlFor='model'>Модель</label>
                <input {...register("model", { required: 'Введите модель' })} type="text" id='model' />
                {errors.model && <FieldError>{errors.model.message?.toString()}</FieldError>}
            </Field>
            <Field>
                <label htmlFor='year'>Год выпуска</label>
                <input {...register("year", { required: 'Введите год выпуска' })} type="number" id='year' />
                {errors.year && <FieldError>{errors.year.message?.toString()}</FieldError>}
            </Field>
            <Field>
                <label htmlFor='mileage'>Пробег</label>
                <input {...register("mileage", { required: 'Введите пробег' })} type="number" id='mileage' />
                {errors.mileage && <FieldError>{errors.mileage.message?.toString()}</FieldError>}
            </Field>
        </>
    )
}