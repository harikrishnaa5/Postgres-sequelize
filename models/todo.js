"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Todo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Define associations here if needed in the future
        }
    }

    Todo.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false, // Ensures that every Todo must have a task name
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true, // Optional description
            },
            percentCompleted: {
                type: DataTypes.INTEGER,
                defaultValue: 0, // Default progress is 0%
            },
            isCompleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false, // Default to not completed
            },
        },
        {
            sequelize,
            modelName: "Todo",
            tableName: "todos", // Explicitly set table name
            timestamps: true, // Enables createdAt and updatedAt fields
        }
    );

    return Todo;
};
