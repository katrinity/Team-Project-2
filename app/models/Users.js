  
module.exports = function(sequelize, DataTypes) {
    //USER TABLE 
    var Users = sequelize.define("Users", {
      first_name: {
        type: DataTypes.STRING,
        //allowNull: false,
        validate: {
          len:[2]
        }
      },
      last_name: {
        type: DataTypes.STRING,
        //allowNull: false,
        validate: {
          len:[2]
        }
      },  
      email:{
        type: DataTypes.STRING,
        //allowNull: false,
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
      },
      password: {
        type: DataTypes.STRING,
        //allowNull: false,
        validate: {
          len:{
            args: 8,
            msg: "Password must be at least 8 characters long"
          }
          
        }
      },
      isLoggedIn:{
        type: DataTypes.BOOLEAN,
        default: 0
      }

    });
    return Users;

    
  }

 