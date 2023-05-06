import nextJest from 'next/jest'

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
