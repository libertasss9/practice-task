const Room = require('../models/roomModel.cjs');


exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      status: 'success',
      data: {
        rooms
      }
    });
  }
  catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        room
      }
    });
  }catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newRoom
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        room
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.countOfRooms = async (req, res) => {
  try {

    const amount = await Room.countDocuments({ roomType: req.params.type });
    res.status(200).json({
      status: 'success',
      data: { amount }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.countOfAvailableRooms = async (req, res) => {
  try {
    const amount = await Room.countDocuments({
      roomType: req.params.type.toUpperCase(),
      availability: true
    });
    res.status(200).json({
      status: 'success',
      data: {amount}
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.personalId = async (req, res) => {
  try {
    const room = await Room.findOne({
      id: req.params.personalID });
    res.status(200).json({
      status: 'success',
      data: {
        room
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getRooms = async (req, res) => {
  try {
    const query = {};

    if (req.query.location) 
      query.location = req.query.location.charAt(0).toUpperCase() + req.query.location.slice(1);

    if (req.query.type) 
      query.roomType = req.query.type;

    if (req.query.person) 
      query.person = req.query.person;

    const rooms = await Room.find(query); 
    
    res.status(200).json({
      status: 'success',
      data: {
        rooms
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};