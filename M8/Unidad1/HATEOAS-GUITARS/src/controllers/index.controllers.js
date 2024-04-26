const { propertiesSelect } = require("../utils/tools/objectMutator");
const { throwGuitarNotFoundError } = require("../utils/tools/errorTools");
const guitarras = require("../../data/guitarras");
const { setPages } = require("../utils/tools/pagination");
const BASE_URL = "http://localhost:3000/v2";
/* CONTROLADORES */
const getGuitarsV2 = (currentPage, elementsPerPage) => {
  const formatedResponse = guitarras.map((guitar) => {
    return {
      guitar: guitar.name,
      value: guitar.value,
      stock: guitar.stock,
      strings: guitar.strings,
      src: `http://localhost:3000/api/V1/guitarras/${guitar.id}`,
    };
  });
  const count = formatedResponse.length;

  let prevPage =
    Number(currentPage) === 1
      ? null
      : `${BASE_URL}/guitarras?currentPage=${Number(currentPage) - 1}`;
      
  let nextPage =
    Number(currentPage) === Math.ceil(count / Number(elementsPerPage))
      ? null
      : `${BASE_URL}/guitarras?currentPage=${Number(currentPage) + 1}`;

  const paginatedResponse = setPages(
    currentPage,
    elementsPerPage,
    formatedResponse
  );

  return {
    allGuitars: paginatedResponse,
    count,
    prevPage,
    nextPage,
  };
};

const getGuitarByID = (id, properties) => {
  let guitar = guitarras.find((guitar) => guitar.id === Number(id));

  return !properties && guitar
    ? guitar
    : properties && guitar
    ? propertiesSelect(guitar, properties)
    : throwGuitarNotFoundError();
};

/* FILTRO POR BODY DE GUITARRA! */
const filtroByBody = (body) => {
  // Paso 2
  return guitarras.filter((g) => g.body.toLowerCase() === body.toLowerCase());
};

const orderValues = (
  property = "value",
  order = "asc",
  guitarsArray = guitarras
) => {

  return order == "asc"
    ? guitarsArray.sort((a, b) => (a[property] > b[property] ? 1 : -1))
    : order == "desc"
    ? guitarsArray.sort((a, b) => (a[property] < b[property] ? 1 : -1))
    : guitarsArray;
};

module.exports = {
  getGuitarByID,
  getGuitarsV2,
  filtroByBody,
  orderValues,
};
