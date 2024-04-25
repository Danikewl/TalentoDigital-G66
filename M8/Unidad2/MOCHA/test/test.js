const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const { app } = require("../index");

xdescribe("INTEGRIDAD DE MI API CON GET", function () {
  it("Probar si el servidor anda y devuelve un status 200 en su raiz", function () {
    chai
      .request(app)
      .get("/")
      .end(function (err, res) {
        chai.expect(res).to.have.status(200);
      });
  });

  it("Probar si la ruta usuarios funciona correctamente", function () {
    chai
      .request(app)
      .get("/usuarios")
      .end(function (err, res) {
        chai.expect(res).to.have.status(200);
      });
  });

  it("Probando Metodo GET -La data debe contener una propiedad llamada bicicletas y esta debe ser un arreglo'", function () {
    chai
      .request(app)

      .get("/bicicletas")

      .end(function (err, res) {
        let data = JSON.parse(res.text);

        chai.expect(data).to.have.property("bicicletas");
        chai.expect(data).to.have.property("api_version");
        chai.expect(res).to.have.status(200);
        chai.expect(data.bicicletas).to.be.an("array");
      });
  });
});

describe("INTEGRIDAD DE MI API CON POST", function () {
  it("Probar si el servidor anda y devuelve un status 200 en su raiz", function () {
    chai
      .request(app)
      .get("/")
      .end(function (err, res) {
        chai.expect(res).to.have.status(200);
      });
  });

  it("Probar si la ruta usuarios funciona correctamente", function () {
    chai
      .request(app)
      .get("/usuarios")
      .end(function (err, res) {
        chai.expect(res).to.have.status(200);
      });
  });

  it("Probando Metodo GET -La data debe contener una propiedad llamada bicicletas y esta debe ser un arreglo'", function () {
    chai
      .request(app)

      .get("/bicicletas")

      .end(function (err, res) {
        let data = JSON.parse(res.text);

        chai.expect(data).to.have.property("bicicletas");
        chai.expect(data).to.have.property("api_version");
        chai.expect(data).to.have.property("status");
        chai.expect(res).to.have.status(200);
        chai.expect(data.bicicletas).to.be.an("array");
      });
  });
});
