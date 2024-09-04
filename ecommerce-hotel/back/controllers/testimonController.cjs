const Testimon = require('../models/testimonModel.cjs');


exports.getAllTestimonies = async (req, res) => {
  try {
    const testimons = await Testimon.find();
    res.status(200).json({
      status: 'success',
      data: {
        testimons
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

exports.getTestimon = async (req, res) => {
  try {
    const testimon = await Testimon.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        testimon
      }
    });
  }catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createTestimon = async (req, res) => {
  try {
    const newTestimon = await Testimon.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newTestimon
      }
    });
  }catch(err){
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateTestimon = async (req, res) => {
  try {
    const testimon = await Testimon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        testimon
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteTestimon = async (req, res) => {
  try {
    const testimon = await Testimon.findByIdAndDelete(req.params.id);
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

exports.getTestimoniesByRate = async (req, res) => {
  try {
    const testimon = await Testimon.find({ star: req.params.rate });
    res.status(200).json({
      status: 'success',
      data: {
        testimon
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};