import { Controller } from "react-hook-form";
import { Field, FieldError } from "../styles/style";
import Select from "react-select";
import { IStepProps } from "../../types/IStepProps";

export const Realty = ({ control, register, errors }: IStepProps) => {
  const selectOptionsRealty = [
    { value: "Квартира", label: "Квартира" },
    { value: "Дом", label: "Дом" },
    { value: "Коттедж", label: "Коттедж" },
  ];

  return (
    <>
      <Field>
        <label htmlFor="propertyType">Тип недвижимости</label>
        <Controller
          name="propertyType"
          control={control}
          rules={{ required: "Выберите тип недвижимости" }}
          render={({ field }) => (
            <Select
              className="select"
              placeholder={""}
              options={selectOptionsRealty}
              {...field}
            />
          )}
        />
        {errors.propertyType && (
          <FieldError>{errors.propertyType.message?.toString()}</FieldError>
        )}
      </Field>
      <Field>
        <label htmlFor="area">Площадь</label>
        <input
          {...register("area", { required: "Введите площадь" })}
          type="number"
          id="area"
        />
        {errors.area && (
          <FieldError>{errors.area.message?.toString()}</FieldError>
        )}
      </Field>
      <Field>
        <label htmlFor="rooms">Количество комнат</label>
        <input
          {...register("rooms", {
            required: "Введите название количество комнат",
          })}
          type="number"
          id="rooms"
        />
        {errors.rooms && (
          <FieldError>{errors.rooms.message?.toString()}</FieldError>
        )}
      </Field>
      <Field>
        <label htmlFor="price">Цена</label>
        <input
          {...register("price", { required: "Введите цену" })}
          type="number"
          id="price"
        />
        {errors.price && (
          <FieldError>{errors.price.message?.toString()}</FieldError>
        )}
      </Field>
    </>
  );
};
