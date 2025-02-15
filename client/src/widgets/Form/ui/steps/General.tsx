import { Controller } from "react-hook-form";
import { Field, FieldError } from "../styles/style";
import Select from "react-select";
import { IStepProps } from "../../types/IStepProps";

export const General = ({ control, register, errors }: IStepProps) => {
  const selectOptionsCategory = [
    { value: "Недвижимость", label: "Недвижимость" },
    { value: "Авто", label: "Авто" },
    { value: "Услуги", label: "Услуги" },
  ];

  return (
    <>
      <Field>
        <label htmlFor="name">Название</label>
        <input
          {...register("name", {
            required: "Введите название объявления",
            minLength: 4,
            maxLength: 50,
          })}
          type="text"
          id="name"
        />
        {errors.name && (
          <FieldError>{errors.name.message?.toString()}</FieldError>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <FieldError>Минимально символов 4</FieldError>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <FieldError>Максимально символов 50</FieldError>
        )}
      </Field>
      <Field>
        <label htmlFor="description">Описание</label>
        <input
          {...register("description", {
            required: "Введите описание объявления",
          })}
          type="text"
          id="description"
        />
        {errors.description && (
          <FieldError>{errors.description.message?.toString()}</FieldError>
        )}
      </Field>
      <Field>
        <label htmlFor="location">Локация</label>
        <input
          {...register("location", { required: "Введите локацию" })}
          type="text"
          id="location"
        />
        {errors.location && (
          <FieldError>{errors.location.message?.toString()}</FieldError>
        )}
      </Field>
      <Field>
        <label htmlFor="photo">Фото</label>
        <input {...register("photo")} type="file" id="photo" />
      </Field>
      <Field>
        <label htmlFor="type">Категория объявления</label>
        <Controller
          name="type"
          control={control}
          rules={{ required: "Выберите категорию" }}
          render={({ field }) => (
            <Select
              className="select"
              placeholder={""}
              options={selectOptionsCategory}
              {...field}
            />
          )}
        />
        {errors.type && (
          <FieldError>{errors.type.message?.toString()}</FieldError>
        )}
      </Field>
    </>
  );
};
