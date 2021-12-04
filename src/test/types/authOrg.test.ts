import { AuthOrg } from "../../types";

describe('Testing ./src/types/authOrg.js', () => {
    test('Testing instance', () => {
        const oAuth = new AuthOrg('alias', 'username', 'orgId', 'instanceURL', 'accessToken', 'oauthMethod');
        expect(oAuth.alias).toMatch('alias');
        expect(oAuth.username).toMatch('username');
        const oAuth2 = new AuthOrg(oAuth);
        expect(oAuth2.alias).toMatch('alias');
        expect(oAuth2.username).toMatch('username');
    });
});