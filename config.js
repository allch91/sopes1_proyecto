module.exports = {
    //Número de puerto de la app
    port : process.env.PORT || 5000,
    //Dirección de la base de datos Mongo 'mongodb://ip:27017/nombre-base-de-datos
    db : process.env.MONGODB || 'mongodb://localhost:27017/tweets'
}