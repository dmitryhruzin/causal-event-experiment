class CommandBus {
  constructor() {
    this.commandHandlers = {}
  }

  registerHandler(commandName, handler) {
    this.commandHandlers[commandName] = handler
  }

  run(command) {
    return this.commandHandlers[command.constructor.name].handle(command)
  }
}

module.exports = CommandBus;
