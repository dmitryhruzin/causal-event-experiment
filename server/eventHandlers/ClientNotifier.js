const { socket } = require('../socket')

class ClientNotifier {
  constructor(repo) {
    this.repo = repo
  }

  async handle(event) {
    console.log('ClientNotifier handle', event)
    console.log('io', socket)
    socket.io.emit(event.constructor.name, event);
  }
}

module.exports = ClientNotifier
