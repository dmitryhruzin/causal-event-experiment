const { socket } = require('../socket')

class ClientNotifier {
  constructor(repo) {
    this.repo = repo
  }

  async handle(event) {
    socket.io.emit(event.constructor.name, event);
  }
}

module.exports = ClientNotifier
