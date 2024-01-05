class CreatePatient {
  constructor(payload) {
    this.name = payload.name

    if (payload.hospitalization) {
      this.hospitalization = {}
      this.hospitalization.name = payload.hospitalization.name
    }
  }
}

module.exports = CreatePatient
