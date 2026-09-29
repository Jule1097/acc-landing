module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'ts', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(t|j)s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.jest.json' }],
  },
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
}
