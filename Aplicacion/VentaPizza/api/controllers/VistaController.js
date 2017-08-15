module.exports = {
    homepage: function (req, res) {
        Pizza
            .find()
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
                return res.view('homepage', {
                    ingredientes: ingredientes
                });
            }
        });
    },
    login: function (req, res) {
        var parametros = req.allParams();
        if (parametros.correo && parametros.password) {
            Usuario.findOne({ correo: parametros.correo })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.negotiate(err);
                if (!usuarioEncontrado) {
                    console.log("el usuario no existe");
                    return res.serverError('El usuario no existe');
                }
                else {
                    if (parametros.password == usuarioEncontrado.password) {
                        console.log("Estas logeado");
                        return res.redirect('/login');
                    }
                    else {
                        return res.serverError("Password Incorrecta");
                    }
                }
            });
        }
        else {
            sails.log('Usuario eliminado');
            return res.view('login');
        }
    },
};
