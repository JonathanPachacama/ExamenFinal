module.exports = {
    attributes: {
        nombrePizza: {
            type: "string"
        },
        compraPizza: {
            collection: "UsuarioPizza",
            via: "idPizza" //foreing key
        },
        ingredientes: {
            collection: "Ingredientes",
            via: "idPizza" //foreing key
        }
    }
};
