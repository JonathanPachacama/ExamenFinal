var module;
module.exports = {
    attributes: {
        nombreIngrediente: {
            type: "string",
        },
        idPizza: {
            model: "Pizza",
            required: true
        }
    }
};
