module.exports = {
    preset: "ts-jest",
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json"
        }
    },
    verbose: true,
    collectCoverage: true,
    moduleFileExtensions: ["ts", "js", "json"],
    testMatch: ["**/test/**/*.test.ts"],
    testEnvironment: "node",
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
    ],
    modulePathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/out/"
    ],
    coverageDirectory: "tests/result",
    collectCoverageFrom: [
        "src/controllers/**/*.ts",
        "src/middlewares/**/*.ts",
        "src/services/**/*.ts",
        "!**/*.d.ts"
    ]
};