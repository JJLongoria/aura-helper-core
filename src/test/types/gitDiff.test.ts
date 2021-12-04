import { GitDiff } from "../../types";


describe('Testing ./src/types/gitDiff.js', () => {
    test('Testing instance', () => {
        const gitDiff = new GitDiff('path', undefined, [], []);
        expect(gitDiff.path).toEqual('path');
        const gitDiff2 = new GitDiff(gitDiff);
        expect(gitDiff2.path).toEqual('path');
    });
});