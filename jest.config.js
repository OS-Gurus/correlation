const tsPreset = require('ts-jest/jest-preset')
// ☝️ importing presets allows merging multiple

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  roots: ['<rootDir>/src'],
  ...tsPreset
}

module.exports = config
