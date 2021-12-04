import { Commit, CommitDate } from "../../types";

describe('Testing ./src/types/commit.js and ./src/types/commitDate.js', () => {
    test('Testing instance', () => {
        const commitDate = new CommitDate('day', 'mont', 1, 4, 2020, '+1', 'dateStr');
        expect(commitDate.dayName).toEqual('day');
        const commitDate2 = new CommitDate(commitDate);
        expect(commitDate2.dayName).toEqual('day');
        const commit = new Commit('pointer', 'author', 'authorEmail', commitDate, 'title', 'message');
        expect(commit.pointer).toEqual('pointer');
        const commit2 = new Commit(commit);
        expect(commit2.pointer).toEqual('pointer');
    });
});