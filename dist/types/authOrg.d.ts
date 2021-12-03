/**
 * Class to represent a SFDX Auth Org
 */
export declare class AuthOrg {
    alias: string;
    username?: string;
    orgId?: string;
    instanceUrl?: string;
    accessToken?: string;
    oauthMethod?: string;
    /**
     * Create new Auth Org instance
     * @param {string | AuthOrg} aliasOrAuthOrg Org Alias or Auth Org instance
     * @param {string} [username] Org username
     * @param {string} [orgId] Org Id
     * @param {string} [instanceUrl] Org Instance URl
     * @param {string} [accessToken] Org Access Token
     * @param {string} [oauthMethod] Org Oauth method
     */
    constructor(aliasOrAuthOrg: string | AuthOrg, username?: string, orgId?: string, instanceUrl?: string, accessToken?: string, oauthMethod?: string);
}
