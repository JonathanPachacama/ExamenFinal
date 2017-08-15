module.exports = {
    attributes: {
        nombrePizza: {
            type: "string"
        },
        ingredientes: {
            type: "string"
        },
        compraPizza: {
            collection: "UsuarioPizza",
            via: "idPizza" //foreing key
        }
    }
};
