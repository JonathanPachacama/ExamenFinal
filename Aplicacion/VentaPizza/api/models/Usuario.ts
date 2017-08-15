declare var module:any;

module.export={
  attributes:{
    nombres:{
      type:"string"
    },
    apellidos:{
      type:"string"
    },
    password:{
      type:"string",
    },
    correo:{
      type:"email"
    },
    fechaNacimiento:{
      type:"date"
    },
    CompraPizza:{
      collecion:'UsuarioPizza',
      via:'idUsuario'
    }
  },
