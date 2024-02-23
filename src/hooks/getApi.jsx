import axios from "axios"
import { useEffect, useState } from "react"

function getApi(param) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    async function getData(param) {
        try {
            let info = await axios.get(`${import.meta.env.VITE_BASE_URL}${param}`);
            setData(info.data);
            setLoading(false)
        } catch (e) {
            throw e;
        }
    }

    useEffect(() => {
        getData(param)
    }, [])


    return {data, loading}
}

export default getApi