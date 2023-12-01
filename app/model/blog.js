module.exports = (sequelize, Sequelize) => {
    return sequelize.define(
        'Blog',
        {
            id: {
                type: Sequelize.INTEGER(11),
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT(),
                allowNull: false,
            },
            publised_date: {
                type: Sequelize.DATE(),
                allowNull: false,
            },
            modify_date: {
                type: Sequelize.DATE(),
                allowNull: false,
            },
            status: {
                type: Sequelize.STRING(15),
                isIn: ['Publish', 'Unpublish'],
                allowNull: false,
            },
            category: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
            author: {
                type: Sequelize.STRING(50),
                allowNull: false,
            }
        },{
            freezeTableName: true,
            timestamps: false,
        }
    );
}