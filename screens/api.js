import axios from "axios"

const api = "http://192.168.0.30:8000/api/"

export const getTorneos = async () => {
    const res = await fetch(`${api}getTorneo`);
    return await res.json();
}