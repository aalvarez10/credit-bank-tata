module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  roots: ['src'],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect"
  ],
  transformIgnorePatterns: ["node_modules/(?!((jest-)?react-native|react-native-vector-icons|react-native-elements|@react-native(-community)?)/)"], 
};
