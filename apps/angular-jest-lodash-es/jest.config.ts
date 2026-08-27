/* eslint-disable */
module.exports = {
  displayName: 'angular-jest-lodash-es',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '../../coverage/apps/angular-jest-lodash-es',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  // lodash-es ships ESM only, so it must be transformed rather than ignored.
  // It is NOT mapped to `lodash`: that package is not a dependency here, so the
  // mapping resolved to @types/lodash and Jest tried to execute a .d.ts.
  transformIgnorePatterns: ['node_modules/(?!(?:.*\\.mjs$|lodash-es/))'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
