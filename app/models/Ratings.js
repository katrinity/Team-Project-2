module.exports = function(sequelize, DataTypes) {
    //USER TABLE 
    var Ratings = sequelize.define("Ratings", {
      stars:{
        type: DataTypes.INTEGER,
        allowNull: false,


      },
      
      mediaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    
      }

    });
    return Ratings;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
};
 