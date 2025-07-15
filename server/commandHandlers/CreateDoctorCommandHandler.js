const {
  DoctorCreated,
  DoctorProfileCreated,
} = require("../events");

class CreateDoctorCommandHandler {
  constructor(repo, eventBus) {
    this.repo = repo
    this.eventBus = eventBus
  }

  handle(doctor) {
    // ToDo: ask repo for aggregate
    // ToDo: retrieve list of events

    const events = [
      new DoctorCreated({ name: doctor.name }),
      new DoctorProfileCreated({ name: doctor.profile.name }),
    ]

    this.eventBus.dispatch({ title: 'CreateDoctorGroupEvents', events })

    return 'Acknowledgement OK'
  }
}

module.exports = CreateDoctorCommandHandler
