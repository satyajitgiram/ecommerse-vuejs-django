module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+\\.js$'
  ],
  
}


