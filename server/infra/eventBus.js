class EventBus {
  constructor() {
    this.eventHandlers = {}
  }

  registerHandler(eventName, handler) {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = []
    }
    this.eventHandlers[eventName].push(handler)
  }

  async dispatch(events) {
    events.forEach(event => {
      this.eventHandlers[event.constructor.name].forEach(handler => {
        setTimeout(() => handler.handle(event), Math.random() * 1000);
      })
    })
  }
}

module.exports = EventBus;
