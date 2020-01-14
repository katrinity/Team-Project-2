module.exports = function(sequelize, DataTypes) {
    //USER TABLE 
    var Users = sequelize.define("Users", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args:[4,12],
            msg: "Username must be between 4 and 12 characters long"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len:{
            args: 8,
            msg: "Password must be at least 8 characters long"
          }
          
        }
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
          len:{
            args: 6,
            msg: "Email must be at least 6 characters long"
          },
          isEmail:{
            msg: "Email must be valid"
          }
        }
      }     

    });
    return Users;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
};
 