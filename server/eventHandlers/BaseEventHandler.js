class BaseEventHandler {
  constructor(props) {
    this.eventTypes = props.eventTypes
  }

  unpackContainer(groupEvents) {
    return groupEvents.events.filter(event => this.eventTypes.includes(event.constructor.name))
  }
}

module.exports = BaseEventHandler
