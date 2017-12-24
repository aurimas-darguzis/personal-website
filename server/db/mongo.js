const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connect = () => {
  return new Promsie ((resolve, reject) => {
    mongoose.connect(proecess.env.MONGO_URI, {useMongoClient: true}, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    });
  });
};

const reportingSchema = new Schema({
  clientId: String,
  clientName: String,
  dateCreated: Date
});
