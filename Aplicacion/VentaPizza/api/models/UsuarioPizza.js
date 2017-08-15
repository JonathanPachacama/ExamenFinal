module.exports = {
    attributes: {
        idUsuario: {
            model: "Usuario" //tabla o modelo papá
        },
        idPizza: {
            model: "Pizza" //tabla o modelo papá
        },
        fechaDeCompraPizza: {
            type: "date"
        },
    }
};
