const { CreatePatientCommand } = require('../commands')
const { CreatePatientCommandHandler } = require('../commandHandlers')
const {
  HospitalizationCreated,
  PatientCreated,
  PatientAndHospitalizationCreated,
} = require('../events')
const {
  ClientNotifier,
  HospitalizationCreatedEventHandler,
  PatientCreatedEventHandler,
  PatientAndHospitalizationCreatedEventHandler,
} = require('../eventHandlers')
const CommandBus = require('./commandBus')
const EventBus = require('./eventBus')

class Registrator {
  constructor() {
    this.repo = {}
  }

  register() {
    // Events
    this.eventBus = new EventBus()

    const hospitalizationCreatedEventHandler = new HospitalizationCreatedEventHandler()
    this.eventBus.registerHandler(HospitalizationCreated.prototype.constructor.name, hospitalizationCreatedEventHandler)
    const patientCreatedEventHandler = new PatientCreatedEventHandler()
    this.eventBus.registerHandler(PatientCreated.prototype.constructor.name, patientCreatedEventHandler)
    const clientNotifier = new ClientNotifier()
    this.eventBus.registerHandler(PatientAndHospitalizationCreated.prototype.constructor.name, clientNotifier)
    const patientAndHospitalizationCreatedEventHandler = new PatientAndHospitalizationCreatedEventHandler()
    this.eventBus.registerHandler(PatientAndHospitalizationCreated.prototype.constructor.name, patientAndHospitalizationCreatedEventHandler)

    // Commands
    this.commandBus = new CommandBus()

    const createPatientCommandHandler = new CreatePatientCommandHandler(this.repo, this.eventBus)
    this.commandBus.registerHandler(CreatePatientCommand.prototype.constructor.name, createPatientCommandHandler)
  }
}

module.exports = Registrator
