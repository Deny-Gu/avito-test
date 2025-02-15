import { ChangeEvent } from "react";
import { SearchInput, SearchWrapper } from "./styles/style";

function ListSearch({
  searchValue,
  handlerSearch,
}: {
  searchValue: string;
  handlerSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <SearchWrapper>
      <SearchInput
        type="search"
        onChange={handlerSearch}
        value={searchValue}
        placeholder="Поиск..."
      />
    </SearchWrapper>
  );
}

export default ListSearch;
