import axios from "axios"

function postApi(param, body) {

    async function addData() {
        try {
            body = JSON.stringify(body);
            let {data} = await axios(`${import.meta.env.VITE_BASE_URL}${param}`, {
                method: "POST",
                data: body
            });
            // console.log(data);
        } catch (e) {
            throw e;
        }
    }

    addData()

    return "";
}

export default postApi