// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == [] || matrix == null) {
        return [];
    } else {
        return matrix
            .map((elem, index) => (index % 2 == 0 ? elem : elem.reverse()))
            .flat();
    }
};
