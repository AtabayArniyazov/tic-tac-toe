class TicTacToe {
    constructor() {
        this.field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.currPlayer = "x";
        this.count = 0;
    }

    getCurrentPlayerSymbol() {
        return this.currPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === 0) {
            this.field[rowIndex][columnIndex] = this.currPlayer;
            this.count++;
            this.currPlayer === "x" ? this.currPlayer = "o" : this.currPlayer = "x";
        }
    }

    isFinished() {
        var count = 0;
        for (var i = 0; i < this.field.length; i++) {
            for (var j = 0; j < this.field.length; j++) {
                if (this.field[i][j] !== 0) {
                    count++;
                }
            }
        }
        return (count === 9 || this.getWinner()) ? true : false;
    }

    getWinner() {
        for (var i = 0; i < this.field.length; i++) {
            if (this.field[i][0] !== 0 && this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) {
                return this.field[i][0];
            } else if (this.field[0][i] !== 0 && this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
                return this.field[0][i];
            } else if (this.field[0][0] !== 0 && this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) {
                return this.field[0][0];
            } else if (this.field[0][2] !== 0 && this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]) {
                return this.field[0][2];
            }
        }
        return null;
    }

    noMoreTurns() {
        return this.count === 9 ? true : false;
    }

    isDraw() {
        if (this.getWinner() || !this.isFinished()) {
            return false;
        } else if (this.noMoreTurns()) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex] === 0) {
            return null;
        } else {
            return this.field[rowIndex][colIndex];            
        }
    }
}

module.exports = TicTacToe;