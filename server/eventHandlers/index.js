const HospitalizationCreatedEventHandler = require('./HospitalizationCreatedEventHandler')
const PatientCreatedEventHandler = require('./PatientCreatedEventHandler')
const DoctorCreatedEventHandler = require('./DoctorCreatedEventHandler')
const DoctorProfileCreatedEventHandler = require('./DoctorProfileCreatedEventHandler')
const ClientNotifier = require('./ClientNotifier')
const PatientAndHospitalizationCreatedEventHandler = require('./PatientAndHospitalizationCreatedEventHandler')

module.exports = {
  HospitalizationCreatedEventHandler,
  PatientCreatedEventHandler,
  DoctorCreatedEventHandler,
  DoctorProfileCreatedEventHandler,
  ClientNotifier,
  PatientAndHospitalizationCreatedEventHandler,
}
