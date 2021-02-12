module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    transform: {
        '^.+\\.vue$': 'vue-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!@ionic/vue|@ionic/vue-router)'],
    // preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
};
