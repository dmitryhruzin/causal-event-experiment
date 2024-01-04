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

  async dispatch(event) {
    await new Promise(r => setTimeout(r, Math.random() * 1000));
    this.eventHandlers[event.constructor.name].forEach(handler => handler.handle(event))
  }
}

module.exports = EventBus;
