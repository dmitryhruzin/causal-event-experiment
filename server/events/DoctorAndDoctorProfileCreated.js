class DoctorAndDoctorProfileCreated {
  constructor(payload) {
    this.doctor = { name: payload.doctor.name }
    this.doctorProfile = { name: payload.doctorProfile.name }
  }
}

module.exports = DoctorAndDoctorProfileCreated
