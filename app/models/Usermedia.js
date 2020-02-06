module.exports = function(sequelize, DataTypes) {
    //USERMEDIA TABLE 
    var Usermedia = sequelize.define("Usermedia", {
      mediaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    
      }

    });
    return Usermedia;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
};
 