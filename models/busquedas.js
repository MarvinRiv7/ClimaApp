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

      //const resp = await axios.get("https://api.maptiler.com/geocoding/Madrid.json?key=5Nxu28vUsEx1WX4BkYBz&language=es&limit=5");
      console.log(resp.data);
      return [];
    } catch (error) {
      return [];
    }
  }
}

module.exports = Busquedas;
