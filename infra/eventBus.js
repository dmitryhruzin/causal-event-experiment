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

  async dispatch(groupEvents) {
    const eventHandlers = groupEvents.events
      .map(event => this.eventHandlers[event.constructor.name])
      .flat()
    const handlersToRun = [...new Set(eventHandlers)]
    handlersToRun.forEach(handler => {
      setTimeout(() => handler.handle(groupEvents), Math.random() * 1000);
    })
  }
}

module.exports = EventBus;
