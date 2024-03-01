//   /digimon  /field  /atrribute
let URL_BASE = "https://digi-api.com/api/v1/digimon/?pageSize=6";

export const getData = async (url = URL_BASE) => {
  try {
    let response = await fetch(url); //🛑espero
    let data = await response.json(); //paresear la respuesta a json ¡OJO uso await!
    return data; //{content , pageable}
  } catch (error) {
    console.error(error);
  }
};

export const getDigimonDetail = async (url) => {
  try {
    let response = await fetch(url); //🛑espero
    let data = await response.json(); //paresear la respuesta a json ¡OJO uso await!
    return data; //{content , pageable}
  } catch (error) {
    console.error(error);
  }
};
