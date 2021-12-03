"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthOrg = void 0;
/**
 * Class to represent a SFDX Auth Org
 */
class AuthOrg {
    /**
     * Create new Auth Org instance
     * @param {string | AuthOrg} aliasOrAuthOrg Org Alias or Auth Org instance
     * @param {string} [username] Org username
     * @param {string} [orgId] Org Id
     * @param {string} [instanceUrl] Org Instance URl
     * @param {string} [accessToken] Org Access Token
     * @param {string} [oauthMethod] Org Oauth method
     */
    constructor(aliasOrAuthOrg, username, orgId, instanceUrl, accessToken, oauthMethod) {
        if (aliasOrAuthOrg instanceof AuthOrg) {
            this.alias = aliasOrAuthOrg.alias;
            this.username = aliasOrAuthOrg.username;
            this.orgId = aliasOrAuthOrg.orgId;
            this.instanceUrl = aliasOrAuthOrg.instanceUrl;
            this.accessToken = aliasOrAuthOrg.accessToken;
            this.oauthMethod = aliasOrAuthOrg.oauthMethod;
        }
        else {
            this.alias = aliasOrAuthOrg;
            this.username = username;
            this.orgId = orgId;
            this.instanceUrl = instanceUrl;
            this.accessToken = accessToken;
            this.oauthMethod = oauthMethod;
        }
    }
}
exports.AuthOrg = AuthOrg;
//# sourceMappingURL=authOrg.js.map