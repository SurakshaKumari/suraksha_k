const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://localhost:27017/mg', {})
  .then(() => {console.log('MongoDB Connected');
})
  .catch(err => console.log(err));