import { getPokemons } from "../controllers/apiControllers.js";

export const app = (function () {
  return {
    metodoPublico: function () {
     getPokemons()
    },
  };
})();
