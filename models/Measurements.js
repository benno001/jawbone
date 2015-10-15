/**
 * Database schema for measurement
 */

var mongoose = require('mongoose');

var MeasurementSchema = new mongoose.Schema({
	date: Number,
	age: Number,
	bmr: Number,
	height: Number,
	m_active_time: Number,
	m_calories: Number,
	m_distance: Number,
	m_inactive_time: Number,
	m_lcat: Number,
	m_lcit: Number,
	m_steps: Number,
	m_total_calories: Number,
	s_asleep_time: Number,
	s_awake: Number,
	s_awake_time: Number,
	s_awakenings: Number,
	s_bedtime: Number,
	s_clinical_deep: Number,
	s_count: Number,
	s_duration: Number,
	s_light: Number,
	s_quality: Number,
	s_rem: Number,
	weight: Number
});

mongoose.model('Measurement', MeasurementSchema);