module.exports = {
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './src/utils/puppeteer_environment.js',
  setupFilesAfterEnv: ['./jest.setup.js'] ,
  testMatch: [
    "<rootDir>/src/**/Specs/**/*.[jt]s?(x)",
    "<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)"
 ],
}
