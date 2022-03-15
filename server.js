const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost/acme-react-redux')


const InventoryItem = sequelize.define('item', {
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        verify: {
            notEmpty: true
        }
    },
    stockCount: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
})



const start = async() =>{
    try{
        await sequelize.sync({force:true})
        await InventoryItem.create({name: 'Foo', stockCount: 0});
        await InventoryItem.create({name: "Bar", stockCount: 0});
        await InventoryItem.create({name: 'Baz', stockCount: 0})
    }
    catch(e){
        console.log(e);
    }
}
start();