import axios from "axios";

// const api = "http://192.168.0.102:8000/api/"
// const api = "http://192.168.0.30:8000/api/"
// const api = "http://192.168.0.102/unipadel-api/api/"
// const api = "http://192.168.1.118/unipadel-api/api/";
const api = "http://192.168.0.25/unipadel-api/api/";

export const getTorneos = async (id) => {
  if (id) {
    return await axios.get(`${api}getTorneo/` + id);
  } else {
    return await axios.get(`${api}getTorneo`);
  }
};

export const getTorneosJugador = async (id) => {
  return await axios.get(`${api}getTorneosJugador/` + id);
};

export const getTorneosOrg = async (id, estado) => {
  if(estado != null){
    return await axios.get(`${api}getTorneosOrganizador/` + id + `/` + estado);
  } else {
    return await axios.get(`${api}getTorneosOrganizador/` + id);
  }
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
  return await axios.post(`${api}createPareja`, datosPareja);
};

export const getParejas = async (email) => {
  return await axios.get(`${api}getParejas/` + email);
};

export const getJugadores = async (query) => {
  if (query) {
    return await axios.get(`${api}getJugadores/` + query);
  } else {
    return { data: [] };
  }
};

export const getInscripciones = async (torneo) => {
  return await axios.get(`${api}getInscripciones/` + torneo);
}

export const createRecursos = async (recursos) => {
  return await axios.post(`${api}createRecurso`, recursos);
}

export const generarCalendario = async (torneo) => {
  return await axios.post(`${api}generateCalendario`, torneo);
}

export const getPartido = async (data) => {
  return await axios.get(`${api}getPartido/${data}`);
}

export const getPartidos = async (data) => {
  return await axios.post(`${api}getPartidos`, data);
}

export const validatePareja = async (data) => {
  return await axios.post(`${api}validatePareja`, data);
}

export const getHorariosTorneo = async (torneo) => {
  return await axios.get(`${api}getHorariosTorneo/${torneo}`);
}

export const deleteHorario = async (id) => {
  return await axios.delete(`${api}deleteHorario/${id}`);
}