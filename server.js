const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost/acme-react-redux')
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

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


app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));


app.get('/api/products', async(req, res, next) => {
    try{
        res.send(await InventoryItem.findAll());
    }
    catch(e){
        next(e);
    }
})



const start = async() =>{
    try{
        await sequelize.sync({force:true})
        app.listen(PORT, () => {
            console.log('listening on port ', PORT)
        })
        await InventoryItem.create({name: 'Foo', stockCount: 0});
        await InventoryItem.create({name: "Bar", stockCount: 0});
        await InventoryItem.create({name: 'Baz', stockCount: 0})
    }
    catch(e){
        console.log(e);
    }
}
start();