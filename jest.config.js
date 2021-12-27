// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const fromRoot = (d) => path.join(__dirname, d)

module.exports = {
  roots: [fromRoot('app')],
  resetMocks: true,
  collectCoverageFrom: ['**/app/**/*.ts(x)?', '!**/app/**/stories.tsx'],
  coverageThreshold: null,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/app/$1"
  },
}
