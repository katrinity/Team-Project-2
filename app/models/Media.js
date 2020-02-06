module.exports = function(sequelize, DataTypes) {
    //MEDIATABLE 
    var Media = sequelize.define("Media", {
      imageurl:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      media_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      release_yr:{
        type: DataTypes.STRING,
      
      },
      creatorID:{
        type: DataTypes.INTEGER,
   
      }  

    });
    return Media;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
};