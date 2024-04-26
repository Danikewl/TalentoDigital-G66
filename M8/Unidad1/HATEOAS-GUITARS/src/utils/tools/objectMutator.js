const propertiesSelect = (object, properties) => {
  const newObject = { ...object };

  for (propiedad in newObject) {
    if (!properties.includes(propiedad)) delete newObject[propiedad];
  }
  return newObject;
};

module.exports = { propertiesSelect };
