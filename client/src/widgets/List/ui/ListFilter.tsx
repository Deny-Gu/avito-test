import { MouseEvent } from "react";
import { FilterWrapper } from "./styles/style";

function ListFilter({
  filterValue,
  handlerFilterValue,
}: {
  filterValue: string;
  handlerFilterValue: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <FilterWrapper>
      <span>Фильтр по категории:</span>
      <button
        className={filterValue === "Все" ? "current" : ""}
        onClick={handlerFilterValue}
      >
        Все
      </button>
      <button
        className={filterValue === "Недвижимость" ? "current" : ""}
        onClick={handlerFilterValue}
      >
        Недвижимость
      </button>
      <button
        className={filterValue === "Авто" ? "current" : ""}
        onClick={handlerFilterValue}
      >
        Авто
      </button>
      <button
        className={filterValue === "Услуги" ? "current" : ""}
        onClick={handlerFilterValue}
      >
        Услуги
      </button>
    </FilterWrapper>
  );
}

export default ListFilter;
