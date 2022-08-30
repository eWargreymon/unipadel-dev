import axios from "axios"

// const api = "http://192.168.0.102:8000/api/"
const api = "http://192.168.0.30:8000/api/"

export const getTorneos = async () => {
    const res = await fetch(`${api}getTorneo`);
    return await res.json();
}

export const getTorneosOrg = async (email) => {
    return await axios.get(`${api}getTorneosOrganizador/` + email);
}

export const attemptLogin = async (email) => {
    return await axios.get(`${api}getUser/` + email);
}

export const storeUserInfo = async (datosRegistro) => {
    return await axios.post(`${api}createUser`, datosRegistro);
}

export const storeTorneoData = async (datosTorneo) => {
    console.log(datosTorneo);
    return await axios.post(`${api}createTorneo`, datosTorneo);
}