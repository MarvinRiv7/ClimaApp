const axios = require("axios");

class Busquedas {
  historial = ["Tegucigalpa", "San Salvador", "Madrid"];

  constructor() {
    //TODO: leer DB si existe
  }

  get paramsMapTiler() {
    return {
      key: process.env.MAP_TILER,
      language: "es",
      limit: 5,
    };
  }

  async ciudad(lugar = "") {
    try {
      //Peticion HTTP
      const intance = axios.create({
        baseURL: `https://api.maptiler.com/geocoding/${lugar}.json`,
        params: this.paramsMapTiler,
      });
      const resp = await intance.get();
      return resp.data.features.map(lugar => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }))

    } catch (error) {
      return [];
    }

  }
}

module.exports = Busquedas;
