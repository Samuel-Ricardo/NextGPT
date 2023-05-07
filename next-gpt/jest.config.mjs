import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './' 
});


/** @type {import('jest').Config} */
const config ={
  roots: ["<rootDir>/src", "<rootDir>/test"],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "^@/(.*)$": '<rootDir>/$1'
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "<rootDir>/src/**/*.tsx",
    "<rootDir>/test/**/*.ts"
  ]
};

export default createJestConfig(config)
