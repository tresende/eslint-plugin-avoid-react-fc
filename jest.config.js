module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/*.test.(ts|js)'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }]
  }
}
