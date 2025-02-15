import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { getAdvertisementsAll } from "../../../shared/api/advertisementApi";
import Pagination from "./ListPagination";
import Loader from "../../../shared/ui/Loader/Loader";
import { MainWrapper, Title } from "./styles/style";
import List from "./List";
import { IListItem } from "../types/IListItem";
import ListSearch from "./ListSearch";
import ListFilter from "./ListFilter";
import { useAuth } from "../../../app/context/AuthContex";
import Error from "../../../shared/ui/Error/Error";

function ListContainer() {
    const [data, setData] = useState<IListItem[]>([])
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)
    const [searchValue, setSearchValue] = useState<string>('')
    const [filterValue, setFilterValue] = useState<string>('Все')
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(5);
    const { user } = useAuth()

    useEffect(() => {
        if (user) {
            setLoading(true);
            setError(null);
            getAdvertisementsAll(user.id).then(res => {
                setData(res)
            }).catch(err => {
                setError(err)
                setData([])
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [user])

    const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const handlerFilterValue = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLDivElement
        setCurrentPage(1)
        setFilterValue(target.innerHTML)
    }

    const filteredData = data.filter(el => 
        (el.name.toLowerCase().includes(searchValue.toLowerCase())) && 
        (el.type.value === filterValue || filterValue === 'Все')
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    if (error) {
        return <Error err={error} />
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <MainWrapper>
            <ListSearch searchValue={searchValue} handlerSearch={handlerSearch} />
            <ListFilter filterValue={filterValue} handlerFilterValue={handlerFilterValue} />
            <Title>Мои обьявления</Title>
            <List currentItems={currentItems} />
            <Pagination
                itemsPerPage={itemsPerPage}
                totalPosts={filteredData.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </MainWrapper>
    )
}

export default ListContainer