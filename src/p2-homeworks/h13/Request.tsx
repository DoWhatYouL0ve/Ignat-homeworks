import React, {useState} from "react";
import {RequestApi} from "./RequestApi";


export const Request = () => {
    const[state, setState] = useState('')
    const[success, setSuccess]=useState(false)

    const setStatus = () => {
        setSuccess(!success)
    }

    const sendRequest = async () => {
        try {
            const res = await RequestApi.request(success)
            setState(res.data)
        }
        catch (error: any) {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
            setState(error.response.data.errorText)
        }
    }

    return <div>
        <div>
            <input type={'checkbox'} checked={success} onChange={setStatus}/>
        </div>
        <div>
            <button onClick={sendRequest}>Request</button>
        </div>
        <div>
            {JSON.stringify(state)}
        </div>
    </div>
}