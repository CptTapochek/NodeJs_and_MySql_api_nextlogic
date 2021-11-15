const Sequilize = require('sequelize');

module.exports = function (sequilize){
    return sequilize.define('students', {
        id: {
            type: Sequilize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Name: {
            type: Sequilize.STRING,
            allowNull: false,
            validate:{
                min: 3
            }
        },
        Surname: {
            type: Sequilize.STRING,
            allowNull: false,
            validate:{
                min: 3
            }
        },
        Year: {
            type: Sequilize.TINYINT,
            allowNull: false
        },
        Course_1: {
            type: Sequilize.FLOAT,
            allowNull: false,
            validate:{
                min: 1,
                max: 10
            }
        },
        Course_2: {
            type: Sequilize.FLOAT,
            allowNull: false,
            validate:{
                min: 1,
                max: 10
            }
        },
        Course_3: {
            type: Sequilize.FLOAT,
            allowNull: false,
            validate:{
                min: 1,
                max: 10
            }
        },
        Course_4: {
            type: Sequilize.FLOAT,
            allowNull: false,
            validate:{
                min: 1,
                max: 10
            }
        },
        Course_5: {
            type: Sequilize.FLOAT,
            allowNull: false,
            validate:{
                min: 1,
                max: 10
            }
        },
        Course_6: {
            type: Sequilize.FLOAT,
            allowNull: false,
            validate:{
                min: 1,
                max: 10
            }
        }
    },  {
        tableName: 'students'
    });
}