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
    login: function (req, res) {
        var parametros = req.allParams();
        if (parametros.correo && parametros.password) {
            Usuario.findOne({ correo: parametros.correo })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.negotiate(err);
                if (!usuarioEncontrado) {
                    return res.serverError('El usuario no existe');
                }
                else {
                    if (parametros.password == usuarioEncontrado.password) {
                        console.log("Estas logeado");
                        return res.ok('Estas logeado, aqui iria las paginas del administrador');
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
