import { Link } from "react-router-dom";
import { ItemButton, ItemDescription, ItemImage, ItemWrapper, ListWrapper } from "./styles/style";
import { IListItem } from "../types/IListItem";
import { trimText } from "../../../shared/utils/textUtils";

function ListContainer({ currentItems }: { currentItems: IListItem[]}) {
    return (
            <ListWrapper>
                {currentItems.map(el => {
                    return (
                        <li key={el.id}>
                            <ItemWrapper>
                                <ItemImage>
                                    <img src='/src/shared/ui/images/no-foto.jpeg' alt='' />
                                </ItemImage>
                                <ItemDescription>
                                    <h3>
                                        <Link to={`/items/${el.id}`}>{trimText(el.name, 50)}</Link>
                                    </h3>
                                    <p><span>Категория: </span>{el.type.value}</p>
                                    <p><span>Местоположение: </span>{trimText(el.location, 200)}</p>
                                </ItemDescription>
                                <ItemButton>
                                    <button>
                                        <Link to={`/items/${el.id}`}>Открыть</Link>
                                    </button>
                                </ItemButton>
                            </ItemWrapper>
                        </li>
                    )
                })}
            </ListWrapper>
    )
}

export default ListContainer