import { Logger, transports } from 'winston'

const logger = new (Logger)({
  transports: [
    new (transports.Console)(),
    new (transports.File)({ filename: 'runtime.log' }),
  ],
})

export default logger
