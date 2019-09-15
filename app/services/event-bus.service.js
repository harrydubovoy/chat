const EventEmitter = require('events');

class Emitter extends EventEmitter {}

const EventBus = new Emitter();

module.exports = EventBus;