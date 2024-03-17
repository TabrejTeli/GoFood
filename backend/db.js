const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://tabrejteli1:tabrej123@db-clustor.h9dbj75.mongodb.net/gofoodMern?retryWrites=true&w=majority&appName=db-clustor';
const mongodb = () => {
        mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {

            console.log('MongoDB Connected', mongoose.connection.db.databaseName);
            const fetched_data = mongoose.connection.db.collection('food_items');
                
            fetched_data.find({}).toArray((error, data) => {
                if(error) console.log(error)
                else console.log(data)
            })

            })
            .catch(err => console.error('Error connecting to MongoDB:', err));
}

module.exports = mongodb();
