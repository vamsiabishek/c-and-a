/* eslint-disable */
export default {
  displayName: 'weather',
  preset: '../../jest.preset.js',
  testEnvironment: "jsdom",
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  setupFilesAfterEnv: ["../../tools/setupTests.ts"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/weather',
};
