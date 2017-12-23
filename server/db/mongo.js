const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connect = () => {
  return new Promsie((resolve ,reject) => {
    mongoose.connect(process.env.MONGO_URI, {useMongoClient: true}, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const someSchema = new Schema({
  id: String,
  title: String,
  lastModified: Date
});
