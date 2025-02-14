import { IAdvertisement } from "../../../shared/types/IAdvertisement"
import { ItemHeader, ItemHeaderLeft, ItemHeaderRight, ItemWrapper } from "./styles/style"

function ItemDetails({ item, handlerEditing }: { item: IAdvertisement, handlerEditing: () => void }) {
    return (
        <ItemWrapper>
            <ItemHeader>
                <ItemHeaderLeft>
                    <h1>{item.name}</h1>
                    <img src='/src/shared/ui/images/no-foto.jpeg' alt='' />
                    <div>
                        <h3>Категория</h3> 
                        {item.type.value}
                    </div>
                </ItemHeaderLeft>
                <ItemHeaderRight>
                    <button onClick={handlerEditing}>Редактировать</button>
                </ItemHeaderRight>
            </ItemHeader>
            <div>
                <h3>Описание</h3> 
                {item.description}
            </div>
            <div>
                <h3>Местоположение</h3> 
                {item.location}
            </div>
            {item?.type.value === 'Недвижимость' &&
                <>
                    <div>
                        <h3>Тип недвижимости</h3>
                        {item.propertyType?.value}
                        </div>
                    <div>
                        <h3>Количество комнат</h3>
                        {item.rooms}
                    </div>
                    <div>
                        <h3>Площадь</h3>
                        {item.area}
                    </div>
                    <div>
                        <h3>Стоимость</h3>
                        {item.price}
                    </div>
                </>}
            {item?.type.value === 'Авто' &&
                <>
                    <div>
                        <h3>Марка</h3>
                        {item.brand?.value}
                    </div>
                    <div>
                        <h3>Модель</h3>
                        {item.model}
                    </div>
                    <div>
                        <h3>Год выпуска</h3>
                        {item.year}
                    </div>
                    <div>
                        <h3>Пробег</h3>
                        {item.mileage}
                    </div>
                </>}
            {item?.type.value === 'Услуги' &&
                <>
                    <div>
                        <h3>Тип услуги</h3>
                        {item.serviceType?.value}
                    </div>
                    <div>
                        <h3>Опыт работы</h3>
                        {item.experience} лет
                    </div>
                    <div>
                        <h3>График работы</h3>
                        {item.workSchedule}
                    </div>
                    <div>
                        <h3>Стоимость услуги</h3>
                        {item.cost} руб.
                    </div>
                </>}
        </ItemWrapper>
    )
}

export default ItemDetails