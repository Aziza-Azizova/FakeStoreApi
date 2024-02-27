import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../context/Context";

function getApi(param) {
    const { datas, setDatas } = useContext(Context)
    const [loading, setLoading] = useState(true)

    async function getData(param) {
        try {
            let info = await axios.get(`${import.meta.env.VITE_BASE_URL}${param}`);
            setDatas(info.data);
            setLoading(false)
        } catch (e) {
            throw e;    
        }
    }

    useEffect(() => {
        getData(param)
    }, [])


    return {datas, loading}
}

export default getApi