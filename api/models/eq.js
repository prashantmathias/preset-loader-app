var mongoose = require('mongoose');

var EqSchema = new mongoose.Schema({
  presetName: {
    type: String,
    required: true,
    default: "Default"
  },
  lowBand: {
    type: String,
    default: "Off"
  },
  lowPeakShelf: {
    type: String,
    default: "Peak"
  },
  lowFreq: {
    type: Number,
    default: 100
  },
  lowGain: {
    type: Number,
    default: 0
  },
  lowMidBand: {
    type: String,
    default: "Off"
  },
  lowMidHiLowQ: {
    type: String,
    default: "low"
  },
  lowMidFreq: {
    type: Number,
    default: 250
  },
  lowMidGain: {
    type: Number,
    default: 0
  },
  hiMidBand: {
    type: String,
    default: "Off"
  },
  hiMidFreq: {
    type: Number,
    default: 2.5
  },
  hiMidGain: {
    type: Number,
    default: 0
  },
  hiBand: {
    type: String,
    default: "Off"
  },
  hiPeakShelf: {
    type: String,
    default: "Peak"
  },
  hiFreq: {
    type: Number,
    default: 8.5
  },
  hiGain: {
    type: Number,
    default: 0
  }
});


module.exports = EqSchema;
