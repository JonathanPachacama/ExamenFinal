module.exports = {

  attributes: {
    nombrePizza:{
      type:"string"
    },
    ingredientes:{
      type:"string"
    },
    compraPizza:{
      collection:"UsuarioPizza", //Modelo
      via:"idPizza" //foreing key
    }
  }
};
