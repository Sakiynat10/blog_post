import { BASE } from "../constants"

const getImageURL = (photo) => {
    return `${BASE}upload/${photo?._id}.${photo?.name.split('.')[1]}`
}

export default getImageURL;