import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   userName: String,
                                   handle: String,
                                   image: String,
                                   topic: String,
                                   time: String,
                                   liked: Boolean,
                                   replies: Number,
                                   retuits: Number,
                                   likes: Number,
                                   dislikes: Number,
                                   tuit: String,
                               }, {collection: 'tuits'});
export default schema;

