module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
        'User',
        {
            id: {
                type: Sequelize.INTEGER(11),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            first_name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            last_name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(50),
                unique: true,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(250),
                allowNull: false,
            },
            dob: {
                type: Sequelize.DATE(),
                allowNull: false,
            },
            role: {
                type: Sequelize.STRING(15),
                isIn: ['Admin', 'User'],
                allowNull: false,
            },
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
}