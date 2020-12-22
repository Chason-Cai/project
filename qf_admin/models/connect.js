const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/qf_admin',{
  useNewUrlParser:true,
  useUnifiedTopology:true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongodb连接成功了')
});
