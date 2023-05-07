import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './' 
});


/** @type {import('jest').Config} */
const config ={
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "^@/(.*)$": '<rootDir>/$1'
  }
};

export default createJestConfig(config)
