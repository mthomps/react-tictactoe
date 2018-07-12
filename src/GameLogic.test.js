import { checkWinner } from './GameLogic';
import { buildEmptyBoard } from './GameLogic';
import { X, O } from './constants';

describe('buildEmptyBoard', () => {
  it('returns an empty 3x3 matrix', () => {
    expect(buildEmptyBoard()).toEqual([[null, null, null], [null, null, null], [null, null, null]]);
  });
});

describe('checkWinner', () => {
  it('returns null for an empty board', () => {
    expect(checkWinner(buildEmptyBoard())).toEqual(null);
  });

  it('returns null for a drawn board', () => {
    expect(checkWinner([[X, X, O], [O, O, X], [X, O, X]])).toEqual(null);
  });

  it('returns X for a board with a row of Xs', () => {
    const xRow = [[X, O, null],  [X, X, X],  [O, O, null]];
    expect(checkWinner(xRow)).toEqual(X);
  });

  it('returns O for a board with a colmun of Os', () => {
    const oColumn = [[X, O, null],  [X, O, null],  [null, O, X]];
    expect(checkWinner(oColumn)).toEqual(O);
  });

  it('returns O for a board with a forward diagonal of Os', () => {
    const forwardDiag = [[X, null, O],  [X, O, null],  [O, X, null]];
    expect(checkWinner(forwardDiag)).toEqual(O);
  });

  it('returns X for a board with a backward diagonal of Xs', () => {
    const backDiag = [[X, O, O],  [X, X, O],  [O, X, X]];
    expect(checkWinner(backDiag)).toEqual(X);
  });
});
