"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeIslands = void 0;
const matrix = [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];
const trackIslandPath = (point, landStack) => {
    const { row, col } = point;
    // out matrix
    if (row < 0 || row > matrix.length - 1) {
        return;
    }
    if (col < 0 || col > matrix[0].length - 1) {
        return;
    }
    // check point value
    if (matrix[row][col] === 0) {
        return;
    }
    // prevent infinity loop (loop backwards)
    for (let index = 0; index < landStack.length; index++) {
        if (landStack[index].row === row && landStack[index].col === col) {
            return;
        }
    }
    landStack.push(Object.assign({}, point));
    // The filter
    // 0trackIslandPath
    //000
    // 0
    const pointLeft = { row, col: col - 1 };
    const pointRight = { row, col: col + 1 };
    const pointTop = { row: row - 1, col };
    const pointBottom = { row: row + 1, col };
    trackIslandPath(pointLeft, landStack);
    trackIslandPath(pointRight, landStack);
    trackIslandPath(pointTop, landStack);
    trackIslandPath(pointBottom, landStack);
    return;
};
const removeIslands = (matrix) => {
    // loop through matrix
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const landStack = [];
            trackIslandPath({ row, col }, landStack);
            // Check if landStack has any point belong to border
            const borderPoints = landStack.filter((p) => {
                if (p.row === 0 || p.row === matrix.length - 1) {
                    return p;
                }
                if (p.col === 0 || p.col === matrix[0].length - 1) {
                    return p;
                }
            });
            // is island, remove island
            if (borderPoints.length === 0) {
                landStack.forEach((p) => {
                    matrix[p.row][p.col] = 0;
                });
            }
        }
    }
};
exports.removeIslands = removeIslands;
const run = () => {
    console.log(matrix);
    (0, exports.removeIslands)(matrix);
    console.log(matrix);
};
run();
