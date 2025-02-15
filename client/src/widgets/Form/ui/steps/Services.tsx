import { Controller } from "react-hook-form";
import { Field, FieldError } from "../styles/style";
import Select from "react-select";
import { IStepProps } from "../../types/IStepProps";

export const Services = ({ control, register, errors }: IStepProps) => {
  const selectOptionsServices = [
    { value: "Ремонт", label: "Ремонт" },
    { value: "Уборка", label: "Уборка" },
    { value: "Доставка", label: "Доставка" },
  ];

  return (
    <>
      <Field>
        <label htmlFor="serviceType">Тип услуги</label>
        <Controller
          name="serviceType"
          control={control}
          rules={{ required: "Выберите тип услуги" }}
          render={({ field }) => (
            <Select
              className="select"
              placeholder={""}
              options={selectOptionsServices}
              {...field}
            />
          )}
        />
        {errors.serviceType && (
          <FieldError>{errors.serviceType.message?.toString()}</FieldError>
        )}
      </Field>
      <Field>
        <label htmlFor="experience">Опыт работы</label>
        <input
          {...register("experience", { required: "Введите опыт работы" })}
          type="number"
          id="experience"
        />
        {errors.experience && (
          <FieldError>{errors.experience.message?.toString()}</FieldError>
        )}
      </Field>
      <Field>
        <label htmlFor="cost">Стоимость</label>
        <input
          {...register("cost", { required: "Введите стоимость" })}
          type="number"
          id="cost"
        />
        {errors.cost && (
          <FieldError>{errors.cost.message?.toString()}</FieldError>
        )}
      </Field>
      <Field>
        <label htmlFor="workSchedule">График работы</label>
        <input {...register("workSchedule")} type="text" id="workSchedule" />
      </Field>
    </>
  );
};
