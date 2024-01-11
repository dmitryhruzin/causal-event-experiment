class CreateDoctor {
  constructor(payload) {
    this.name = payload.name

    if (payload.profile) {
      this.profile = {}
      this.profile.name = payload.profile.name
    }
  }
}

module.exports = CreateDoctor
