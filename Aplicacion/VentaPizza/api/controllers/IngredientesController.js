module.exports = {
    listarIngredientes: function (req, res) {
        var parametros = req.allParams();
        if (!parametros.busqueda) {
            parametros.busqueda = '';
        }
        //let where = {};
        sails.log.info("Parametros", parametros);
        Ingredientes
            .find()
            .where({
            or: [
                {
                    nombreIngrediente: {
                        contains: parametros.busqueda
                    }
                }
            ]
        })
            .exec(function (err, ingredientes) {
            if (err)
                return res.negotiate(err);
            else {
                return res.view('ingredientes', {
                    ingredientes: ingredientes
                });
            }
        });
    },
    anadirIngrediente: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        var nuevoIngrediente = {
            nombreIngrediente: parametros.nombreIngrediente,
            idPizza: parametros.idPizza,
        };
        Ingredientes.create(nuevoIngrediente)
            .exec(function (error, nuevoIngrediente) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.redirect("/login");
            }
        });
    },
};
