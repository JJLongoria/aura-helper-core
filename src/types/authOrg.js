class AuthOrg {
    constructor(aliasOrObject, username, orgId, instanceUrl, accessToken, oauthMethod) {
        if (typeof aliasOrObject === 'object') {
            this.alias = aliasOrObject.alias;
            this.username = aliasOrObject.username;
            this.orgId = aliasOrObject.orgId;
            this.instanceUrl = aliasOrObject.instanceUrl;
            this.accessToken = aliasOrObject.accessToken;
            this.oauthMethod = aliasOrObject.oauthMethod
        } else {
            this.alias = aliasOrObject;
            this.username = username;
            this.orgId = orgId;
            this.instanceUrl = instanceUrl;
            this.accessToken = accessToken;
            this.oauthMethod = oauthMethod
        }
    }
}
module.exports = AuthOrg;