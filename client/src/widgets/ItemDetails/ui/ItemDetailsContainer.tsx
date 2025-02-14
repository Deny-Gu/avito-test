import { useEffect, useState } from "react";
import { getAdvertisement } from "../../../shared/api/advertisementApi";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../shared/ui/Loader/Loader";
import ItemDetails from "./ItemDetails";
import { IAdvertisement } from "../../../shared/types/IAdvertisement";
import { useAuth } from "../../../app/context/AuthContex";

function ItemDetailsContainer() {
    const [item, setItem] = useState<IAdvertisement | null>(null)
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)
    const { id } = useParams()
    const { user } = useAuth()
    const navigator = useNavigate()

    useEffect(() => {
        if (id && user) {
            setLoading(true);
            setError(null);
            getAdvertisement(id, user.id).then(res => {
                setItem(res)
            }).catch(err => {
                setError(err)
                setItem(null)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [id, user])

    const handlerEditing = () => {
        navigator('/form', { state: item})
    }

    if (error) {
        return <p>{'Ошибка'}</p>
    }

    if (isLoading) {
        return <Loader />
    }

    if (item) {
        return <ItemDetails handlerEditing={handlerEditing} item={item} />
    }
}

export default ItemDetailsContainer