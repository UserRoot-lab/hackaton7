const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://Root1:1234@cluster0.cgsaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    
})
.then(db => console.log("Conectado"))
.catch(err => console.error(err));