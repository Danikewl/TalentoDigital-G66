const setPages = (currentPage, elementsPerPage, elementsArray) => {
  return elementsArray.slice(
    currentPage * elementsPerPage - elementsPerPage,
    currentPage * elementsPerPage
  );
};

module.exports = { setPages };
