const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model'); // Import of the model Recipe from './models/Recipe.model.js'
const data = require('./data.js'); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect('mongodb://localhost/recipe-app-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

  // Iteration 2 - Create a recipe

  //  Recipe.create({
  //   title: 'Strudel',
  //   cuisine: "Italian"
  //  })
  //  .then((res) => console.log(res))

  //  Iteration 3 - Insert multiple recipes
   
  // Recipe.insertMany(data)
  // .then((res)=> console.log(res))
  // .catch((err) => { console.log('An error happened:', err) });

  // Iteration 4 - Update recipe

  Recipe.updateOne({title:'Rigatoni alla Genovese'}, {duration:100})
.then((res) => console.log(res))
.catch((err) => { console.log('An error happened:',err)})

// Iteration 5 - Remove a recipe

Recipe.deleteOne({title:'Carrot Cake'})
.then(res => console.log('Carrot Cake is no longer available'))
.catch((err)=> {console.log('An error happened:',err)})

// Iteration 6

  mongoose.connection.close();