const Queue = require('sync-queue')
const queue = new Queue()

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
        queue.place(() => setTimeout(() => {
          handler.handle(event)
          queue.next()
        }, Math.random() * 1000));
      })
    })
  }
}

module.exports = EventBus;
