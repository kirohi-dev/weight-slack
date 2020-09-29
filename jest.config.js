module.exports = {
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/$1',
    '^models/(.+)': '<rootDir>/src/domains/models/$1',
    '^domains/(.+)': '<rootDir>/src/domains/$1',
    '^translator/(.+)': '<rootDir>/src/translator/$1',
  },
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
