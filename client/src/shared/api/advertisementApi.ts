import { IAdvertisement } from "../types/IAdvertisement"
import { getBody } from "../utils/bodyUtils"

const URL = 'http://localhost:3000'

export const getAdvertisementsAll = async(idUser: string) => {
    try {
        const res = await fetch(URL + '/items-all', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({idUser}),
        })
        const data = await res.json()
        return data
    } catch(error) {
        return error
    }
}

export const getAdvertisement = async(id: string, idUser: string) => {
    try {
        const res = await fetch(URL + `/items/${id}`, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({idUser}),
        })
        const data = await res.json()
        return data
    } catch(error) {
        return error
    }
}

export const createAdvertisement = async(idUser: string, item: IAdvertisement) => {
    try {
        const res = await fetch(URL + '/items', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({idUser, ...getBody(item)}),
        })
        const data = await res.json()
        return data
    } catch(error) {
        return error
    }
}

export const editAdvertisement = async(idUser: string, item: IAdvertisement) => {
    try {
        const res = await fetch(URL + `/items/${item.id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({idUser, ...getBody(item)}),
        })
        const data = await res.json()
        return data
    } catch(error) {
        return error
    }
}