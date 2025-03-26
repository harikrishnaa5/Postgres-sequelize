"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Create the 'todos' table if it does not exist
        await queryInterface.createTable("todos", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            // Adding new columns
            percentCompleted: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            isCompleted: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        // Drop the table on rollback
        await queryInterface.dropTable("todos");
    },
};
