import { BASE } from "../constants"

const getImageUrl = (photo) => {
    return `${BASE}upload/${photo._id}.${photo.name.split('.')[1]}`
}

export default getImageUrl;