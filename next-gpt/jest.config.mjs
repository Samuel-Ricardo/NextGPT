import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './' 
});


/** @type {import('jest').Config} */
const config ={

  globals: {
            "ts-jest": {
              useESM: true,
              tsconfig: "tsconfig.json",
              diagnostics: true
            }
          },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  roots: ["<rootDir>/src", "<rootDir>/test"],
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts','.tsx'],
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node', "d.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  modulePaths: ["<rootDir>/src"],
  moduleNameMapper: {
    "^@/(.*)$": '<rootDir>/$1',
    "^@config$": "<rootDir>/config/index.ts",
    "^@config/(.*)$": "<rootDir>/config/$1/$1/$1",
    "^@prisma$": "<rootDir>/app/prisma/prisma.ts",
    "^@prisma/(.*)$": "<rootDir>/app/prisma/$1",
    "^@modules/(.*)$": "<rootDir>/app/modules/$1",
    "^@repository/(.*)$": "<rootDir>/app/repository/$1",
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx|d.ts)?$': ['ts-jest', {useESM: true}],
  },
  transformIgnorePatterns: [],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "<rootDir>/src/**/*.tsx",
//    "<rootDir>/test/**/*.(ts|tsx)"
  ]
};

export default createJestConfig(config)
