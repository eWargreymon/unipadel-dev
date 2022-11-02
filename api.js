import axios from "axios";

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
  console.log(recursos);
  return await axios.post(`${api}createRecurso`, recursos);
}

export const generarCalendario = async (torneo) => {
  return await axios.post(`${api}generateCalendario`, torneo);
}

export const getPartido = async (jugador, torneo) => {
  if(torneo){
    return await axios.get(`${api}getPartido/${jugador}/${torneo}`);
  } else {
    return await axios.get(`${api}getPartido/${jugador}`);
  }
}

export const getPartidos = async (data) => {
  return await axios.post(`${api}getPartidos`, data);
}

export const getPartidosTorneo = async (data) => {
  return await axios.post(`${api}getPartidosTorneo`, data);
}

export const getPartidosTorneoPlayer = async (data) => {
  return await axios.post(`${api}getPartidosTorneoPlayer`, data);
}

export const getJornadas = async (torneo) => {
  return await axios.get(`${api}getJornadasTorneo/${torneo}`);
}

export const validatePareja = async (data) => {
  return await axios.post(`${api}validatePareja`, data);
}

export const getCanchaTorneo = async (torneo) => {
  return await axios.get(`${api}getCanchaTorneo/${torneo}`);
}

export const getHorariosTorneo = async (request, isTorneo) => {
  return await axios.get(`${api}getHorariosTorneo/${request}/${isTorneo}`);
}

export const getHorariosDisponibles = async (torneo) => {
  return await axios.get(`${api}getHorariosDisponibles/${torneo}`);
}

export const setHorarioPartido = async (request) => {
  return await axios.post(`${api}setHorarioPartido`, request);
}

export const proponerHorarioPartido = async (request) => {
  return await axios.post(`${api}proponerHorarioPartido`, request);
}

export const deleteHorario = async (id) => {
  return await axios.delete(`${api}deleteHorario/${id}`);
}

export const asignarHorarios = async (request) => {
  return await axios.post(`${api}setHorarios`, request);
}

export const aceptarPropuestaApi = async (id) => {
  return await axios.get(`${api}aceptarPropuesta/${id}`);
}

export const rechazarPropuestaApi = async (id) => {
  return await axios.get(`${api}rechazarPropuesta/${id}`);
}