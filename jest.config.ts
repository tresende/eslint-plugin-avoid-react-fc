export default {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts'],
  modulePaths: ['<rootDir>/src/'],
  preset: 'ts-jest/presets/js-with-babel',
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { tsconfig: './tsconfig.test.json' }]
  }
}
