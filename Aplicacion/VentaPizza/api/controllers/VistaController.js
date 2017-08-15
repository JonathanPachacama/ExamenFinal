module.exports = {
    homepage: function (req, res) {
        var parametros = req.allParams();
        if (!parametros.busqueda) {
            parametros.busqueda = '';
        }
        //let where = {};
        sails.log.info("Parametros", parametros);
        Pizza
            .find()
            .where({
            or: [
                {
                    nombrePizza: {
                        contains: parametros.busqueda
                    }
                }
            ]
        })
            .exec(function (err, pizzas) {
            if (err)
                return res.negotiate(err);
            else {
                return res.view('homepage', {
                    pizzas: pizzas
                });
            }
        });
    },
};
