# Jawbone up24 API

## Requirements
* NodeJS + npm
* MongoDB
* If on a server: V8 environment

## Manual
Initialise jawbone database in mongoDB with the command "use jawbone". Read in the data in mongodb with the command -d jawbone -c measurements --type csv --file your_jawbone_data.csv.

## Supported data in following format:
* date: Number
* age: Number
* bmr: Number
* height: Number
* m_active_time: Number
* m_calories: Number
* m_distance: Number
* m_inactive_time: Number
* m_lcat: Number
* m_lcit: Number
* m_steps: Number
* m_total_calories: Number
* s_asleep_time: Number
* s_awake: Number
* s_awake_time: Number
* s_awakenings: Number
* s_bedtime: Number
* s_clinical_deep: Number
* s_count: Number
* s_duration: Number
* s_light: Number
* s_quality: Number
* s_rem: Number
* weight: Number

## API routes:
*localhost:3000/measurements
*localhost:3000/measurements/:date where :date is a date variable in format yyyymmdd 
