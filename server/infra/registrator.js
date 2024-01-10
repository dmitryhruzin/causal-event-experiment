const {
  CreatePatientCommand,
  CreateDoctorCommand,
} = require('../commands')
const {
  CreatePatientCommandHandler,
  CreateDoctorCommandHandler,
} = require('../commandHandlers')
const {
  HospitalizationCreated,
  PatientCreated,
  PatientAndHospitalizationCreated,
  DoctorCreated,
  DoctorProfileCreated,
} = require('../events')
const {
  ClientNotifier,
  HospitalizationCreatedEventHandler,
  PatientCreatedEventHandler,
  PatientAndHospitalizationCreatedEventHandler,
  DoctorCreatedEventHandler,
  DoctorProfileCreatedEventHandler,
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
    const doctorCreatedEventHandler = new DoctorCreatedEventHandler()
    this.eventBus.registerHandler(DoctorCreated.prototype.constructor.name, doctorCreatedEventHandler)
    const doctorProfileCreatedEventHandler = new DoctorProfileCreatedEventHandler()
    this.eventBus.registerHandler(DoctorProfileCreated.prototype.constructor.name, doctorProfileCreatedEventHandler)

    // Commands
    this.commandBus = new CommandBus()

    const createPatientCommandHandler = new CreatePatientCommandHandler(this.repo, this.eventBus)
    this.commandBus.registerHandler(CreatePatientCommand.prototype.constructor.name, createPatientCommandHandler)
    const createDoctorCommandHandler = new CreateDoctorCommandHandler(this.repo, this.eventBus)
    this.commandBus.registerHandler(CreateDoctorCommand.prototype.constructor.name, createDoctorCommandHandler)
  }
}

module.exports = Registrator
