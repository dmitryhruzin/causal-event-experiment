class PatientAndHospitalizationCreated {
  constructor(payload) {
    this.patient = { name: payload.patient.name }
    this.hospitalization = { name: payload.hospitalization.name }
  }
}

module.exports = PatientAndHospitalizationCreated
