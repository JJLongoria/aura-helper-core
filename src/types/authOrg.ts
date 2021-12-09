/**
 * Class to represent a SFDX Auth Org
 */
export class AuthOrg {

    alias: string;
    username?: string;
    orgId?: string;
    instanceUrl?: string;
    accessToken?: string;
    oauthMethod?: string;

    /**
     * Create new Auth Org instance
     * @param {string | { [key: string]: any }} aliasOrAuthOrg Org Alias or Auth Org instance
     * @param {string} [username] Org username
     * @param {string} [orgId] Org Id
     * @param {string} [instanceUrl] Org Instance URl
     * @param {string} [accessToken] Org Access Token
     * @param {string} [oauthMethod] Org Oauth method
     */
    constructor(aliasOrAuthOrg: string | { [key: string]: any }, username?: string, orgId?: string, instanceUrl?: string, accessToken?: string, oauthMethod?: string) {
        if (aliasOrAuthOrg && typeof aliasOrAuthOrg !== 'string') {
            this.alias = aliasOrAuthOrg.alias;
            this.username = aliasOrAuthOrg.username;
            this.orgId = aliasOrAuthOrg.orgId;
            this.instanceUrl = aliasOrAuthOrg.instanceUrl;
            this.accessToken = aliasOrAuthOrg.accessToken;
            this.oauthMethod = aliasOrAuthOrg.oauthMethod;
        } else {
            this.alias = aliasOrAuthOrg;
            this.username = username;
            this.orgId = orgId;
            this.instanceUrl = instanceUrl;
            this.accessToken = accessToken;
            this.oauthMethod = oauthMethod;
        }
    }
}