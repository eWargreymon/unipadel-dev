import axios from "axios";

// const api = "http://192.168.0.102:8000/api/"
// const api = "http://192.168.0.30:8000/api/"
// const api = "http://192.168.0.102/unipadel-api/api/"
const api = "http://192.168.1.117/unipadel-api/api/";
// const api = "http://192.168.0.30/unipadel-api/api/"

export const getTorneos = async (id) => {
  const res = await fetch(id ? `${api}getTorneo/` + id : `${api}getTorneo`);
  return await res.json();
};

export const getTorneosOrg = async (email) => {
  return await axios.get(`${api}getTorneosOrganizador/` + email);
};

export const attemptLogin = async (email) => {
  return await axios.get(`${api}getUser/` + email);
};

export const storeUserInfo = async (datosRegistro) => {
  return await axios.post(`${api}createUser`, datosRegistro);
};

export const storeTorneoData = async (datosTorneo) => {
  return await axios.post(`${api}createTorneo`, datosTorneo);
};

export const inscripcion = async (datosInscripcion) => {
  return await axios.post(`${api}createInscripcion`, datosInscripcion);
};

export const createPareja = async (datosPareja) => {
  // console.log(datosPareja);
  return await axios.post(`${api}createPareja`, datosPareja);
};

export const getJugadores = async (query) => {
  if (query) {
    return await axios.get(`${api}getJugadores/` + query);
  } else {
    return await axios.get(`${api}getJugadores/`);
  }
};
