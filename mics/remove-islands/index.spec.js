"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
test('should match all test cases', () => {
    expect((0, _1.removeIslands)([
        [1, 0, 0, 1, 0],
        [0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
    ])).toMatchObject([
        [0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
    ]);
});
