declare var module;
declare var require;
declare var sails;
declare var Pizza;
declare var Usuario;
declare var Ingredientes;

module.exports = {


  listarIngredientes: (req, res) => {

    let parametros = req.allParams();
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
          }]
      })
      .exec((err, ingredientes) => {
        if (err) return res.negotiate(err);
        else {
          return res.view('ingredientes', {
            ingredientes: ingredientes
          });
        }

      })
  },

  anadirIngrediente:(req,res)=>{

      let parametros = req.allParams();
      sails.log.info("Parametros",parametros);

      let nuevoIngrediente = {
        nombreIngrediente:parametros.nombreIngrediente,
      };

      Ingredientes.create(nuevoIngrediente)
        .exec(
          (error,nuevoIngrediente)=>{
            if(error){
              return res.serverError(error)
            }else{
              return res.redirect("/login");
            }
          }
        )


    },



}
