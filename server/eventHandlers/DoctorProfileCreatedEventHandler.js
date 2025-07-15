const BaseEventHandler = require('./BaseEventHandler')

class DoctorProfileCreatedEventHandler extends BaseEventHandler {
  constructor(repo) {
    const eventTypes = ['DoctorProfileCreated']
    super({ eventTypes })

    this.repo = repo
  }

  handle(groupEvents) {
    const events = this.unpackContainer(groupEvents)

    for (const event of events) {
      console.log('DoctorProfileCreatedEventHandler handle', events)
    }
  }
}

module.exports = DoctorProfileCreatedEventHandler
