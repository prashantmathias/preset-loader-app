var mongoose = require('mongoose');

var CompressorSchema = new mongoose.Schema({
  presetName: {
    type: String,
    required: true,
    default: "Default"
  },
  mode: {
    type: String,
    default: "FET"
  },
  attack: {
    type: Number,
    default: 20
  },
  release: {
    type: Number,
    default: 10
  },
  threshold: {
    type: Number,
    default: -10
  },
  ratio: {
    type: Number,
    default: 2
  },
  makeUpGain: {
    type: Number,
    default: 8
  }
});

module.exports = CompressorSchema;
