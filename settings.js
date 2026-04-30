module.exports = {
    uiPort: process.env.PORT || 1880,

    flowFile: "flows.json",

    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "mes-laurea-secret",

    adminAuth: {
        type: "credentials",
        users: [{
            username: process.env.NODE_RED_USERNAME || "admin",
            password: process.env.NODE_RED_PASSWORD_HASH || "$2b$08$wulMYH/X9AXvhNybUSFh/.b6ysjOPxWgX6G.SnxXLyN/EX2Kmi2Ty",
            permissions: "*"
        }]
    },

    httpNodeRoot: "/",
    httpAdminRoot: "/red",

    functionGlobalContext: {},

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};