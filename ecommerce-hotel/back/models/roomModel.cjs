const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  id: Number,
  roomType: {
    type: String,
    uppercase: true
  },
  cost: Number,
  image: {
    type: String,
    required: [true, 'room must have an image']
  },
  availability: Boolean,
  amenities: [String],
  description: {
    type: String,
    trim: true
  },
  location: String,
  person: Number
})

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;