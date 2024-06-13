/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/plugin-config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pluginConfig = void 0;
const path = __webpack_require__("path");
const chalk = __webpack_require__("chalk");
const common_1 = __webpack_require__("@gauzy/common");
const config_1 = __webpack_require__("@gauzy/config");
const sentry_plugin_1 = __webpack_require__("@gauzy/sentry-plugin");
const sentry_1 = __webpack_require__("./src/sentry.ts");
const version_1 = __webpack_require__("./version.ts");
const plugins_1 = __webpack_require__("./src/plugins.ts");
const { sentry } = config_1.environment;
console.log(chalk.magenta(`API Version %s`), version_1.version);
console.log('Plugin Config -> __dirname: ' + __dirname);
console.log('Plugin Config -> process.cwd: ' + process.cwd());
let assetPath;
let assetPublicPath;
if (__dirname.startsWith('/srv/gauzy')) {
    assetPath = '/srv/gauzy/apps/api/src/assets';
    assetPublicPath = '/srv/gauzy/apps/api/public';
}
else {
    assetPath = path.join(path.resolve(__dirname, '../../../', ...['apps', 'api', 'src', 'assets']));
    assetPublicPath = path.join(path.resolve(__dirname, '../../../', ...['apps', 'api', 'public']));
}
console.log('Plugin Config -> assetPath: ' + assetPath);
console.log('Plugin Config -> assetPublicPath: ' + assetPublicPath);
console.log('DB Synchronize: ' + process.env.DB_SYNCHRONIZE);
exports.pluginConfig = {
    apiConfigOptions: {
        host: process.env.API_HOST || common_1.DEFAULT_API_HOST,
        port: process.env.API_PORT || common_1.DEFAULT_API_PORT,
        baseUrl: process.env.API_BASE_URL || common_1.DEFAULT_API_BASE_URL,
        middleware: [],
        graphqlConfigOptions: {
            path: common_1.DEFAULT_GRAPHQL_API_PATH,
            playground: true,
            debug: true,
            apolloServerPlugins: []
        }
    },
    dbConnectionOptions: {
        retryAttempts: 100,
        retryDelay: 3000,
        migrationsTransactionMode: 'each',
        migrationsRun: process.env.DB_SYNCHRONIZE === 'true' ? false : true,
        ...config_1.dbTypeOrmConnectionConfig
    },
    dbMikroOrmConnectionOptions: {
        ...config_1.dbMikroOrmConnectionConfig
    },
    dbKnexConnectionOptions: {
        retryAttempts: 100,
        retryDelay: 3000,
        ...config_1.dbKnexConnectionConfig
    },
    assetOptions: {
        assetPath: assetPath,
        assetPublicPath: assetPublicPath
    },
    ...(sentry?.dsn ? { logger: new sentry_plugin_1.SentryService(sentry_1.SentryTracing.options) } : {}),
    plugins: plugins_1.plugins
};


/***/ }),

/***/ "./src/plugins.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.plugins = void 0;
const config_1 = __webpack_require__("@gauzy/config");
const changelog_plugin_1 = __webpack_require__("@gauzy/changelog-plugin");
const jitsu_analytics_plugin_1 = __webpack_require__("@gauzy/jitsu-analytics-plugin");
const knowledge_base_plugin_1 = __webpack_require__("@gauzy/knowledge-base-plugin");
const job_proposal_plugin_1 = __webpack_require__("@gauzy/job-proposal-plugin");
const job_search_plugin_1 = __webpack_require__("@gauzy/job-search-plugin");
const sentry_1 = __webpack_require__("./src/sentry.ts");
const { jitsu, sentry } = config_1.environment;
exports.plugins = [
    ...(sentry && sentry.dsn ? [sentry_1.SentryTracing] : []),
    jitsu_analytics_plugin_1.JitsuAnalyticsPlugin.init({
        config: {
            host: jitsu.serverHost,
            writeKey: jitsu.serverWriteKey,
            debug: jitsu.debug,
            echoEvents: jitsu.echoEvents
        }
    }),
    changelog_plugin_1.ChangelogPlugin,
    knowledge_base_plugin_1.KnowledgeBasePlugin,
    job_proposal_plugin_1.JobProposalPlugin,
    job_search_plugin_1.JobSearchPlugin
];


/***/ }),

/***/ "./src/sentry.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SentryTracing = exports.initializeSentry = void 0;
const config_1 = __webpack_require__("@gauzy/config");
const sentry_plugin_1 = __webpack_require__("@gauzy/sentry-plugin");
const version_1 = __webpack_require__("./version.ts");
function initializeSentry() {
    if (config_1.environment.sentry.dsn) {
        console.log('Initializing Sentry with DSN:', config_1.environment.sentry.dsn);
        return sentry_plugin_1.SentryPlugin.init({
            dsn: config_1.environment.sentry.dsn,
            debug: process.env.SENTRY_DEBUG === 'true' || !config_1.environment.production,
            environment: config_1.environment.production ? 'production' : 'development',
            release: 'gauzy@' + version_1.version,
            logLevels: ['error'],
            integrations: [...sentry_plugin_1.DefaultSentryIntegrations],
            tracesSampleRate: process.env.SENTRY_TRACES_SAMPLE_RATE
                ? parseInt(process.env.SENTRY_TRACES_SAMPLE_RATE)
                : 0.01,
            profilesSampleRate: process.env.SENTRY_PROFILE_SAMPLE_RATE
                ? parseInt(process.env.SENTRY_PROFILE_SAMPLE_RATE)
                : 1,
            close: {
                enabled: true,
                timeout: 3000
            }
        });
    }
    else {
        console.log('Sentry not initialized: DSN not provided');
        return null;
    }
}
exports.initializeSentry = initializeSentry;
exports.SentryTracing = initializeSentry();


/***/ }),

/***/ "./version.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.version = void 0;
exports.version = __webpack_require__("./package.json").version;


/***/ }),

/***/ "@gauzy/changelog-plugin":
/***/ ((module) => {

module.exports = require("@gauzy/changelog-plugin");

/***/ }),

/***/ "@gauzy/common":
/***/ ((module) => {

module.exports = require("@gauzy/common");

/***/ }),

/***/ "@gauzy/config":
/***/ ((module) => {

module.exports = require("@gauzy/config");

/***/ }),

/***/ "@gauzy/core":
/***/ ((module) => {

module.exports = require("@gauzy/core");

/***/ }),

/***/ "@gauzy/jitsu-analytics-plugin":
/***/ ((module) => {

module.exports = require("@gauzy/jitsu-analytics-plugin");

/***/ }),

/***/ "@gauzy/job-proposal-plugin":
/***/ ((module) => {

module.exports = require("@gauzy/job-proposal-plugin");

/***/ }),

/***/ "@gauzy/job-search-plugin":
/***/ ((module) => {

module.exports = require("@gauzy/job-search-plugin");

/***/ }),

/***/ "@gauzy/knowledge-base-plugin":
/***/ ((module) => {

module.exports = require("@gauzy/knowledge-base-plugin");

/***/ }),

/***/ "@gauzy/sentry-plugin":
/***/ ((module) => {

module.exports = require("@gauzy/sentry-plugin");

/***/ }),

/***/ "chalk":
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./package.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"@gauzy/api","version":"0.1.0","description":"Gauzy API","license":"AGPL-3.0","homepage":"https://gauzy.co","repository":{"type":"git","url":"https://github.com/ever-co/ever-gauzy.git"},"bugs":{"url":"https://github.com/ever-co/ever-gauzy/issues"},"private":true,"author":{"name":"Ever Co. LTD","email":"ever@ever.co","url":"https://ever.co"},"scripts":{"typeorm":"yarn ts-node -r tsconfig-paths/register --project apps/api/tsconfig.app.json node_modules/.bin/typeorm","typeorm:sync":"yarn typeorm schema:sync","typeorm:seeds":"yarn typeorm migration:run","typeorm:flush":"yarn typeorm migration:revert","typeorm:create":"yarn typeorm migration:create","typeorm:preserve":"yarn typeorm:sync -- -f=ormconfig && yarn typeorm:seeds -- -f=ormconfig","migration:run":"yarn ts-node -r tsconfig-paths/register src/migration.ts migration:run","migration:revert":"yarn ts-node -r tsconfig-paths/register src/migration.ts migration:revert","migration:generate":"yarn ts-node -r tsconfig-paths/register src/migration.ts migration:generate","start":"yarn ts-node -r tsconfig-paths/register --project apps/api/tsconfig.app.json src/main.ts","start:debug":"nodemon --config nodemon-debug.json","build":"yarn ng build api","build:prod":"yarn ng build api --prod","seed":"cross-env NODE_ENV=development NODE_OPTIONS=--max-old-space-size=14000 yarn ts-node -r tsconfig-paths/register --project apps/api/tsconfig.app.json src/seed.ts","seed:build":"yarn ng run api:seed","seed:all":"cross-env NODE_ENV=development NODE_OPTIONS=--max-old-space-size=14000 yarn ts-node -r tsconfig-paths/register --project apps/api/tsconfig.app.json src/seed-all.ts","seed:module":"cross-env NODE_ENV=development NODE_OPTIONS=--max-old-space-size=14000 yarn ts-node -r tsconfig-paths/register --project apps/api/tsconfig.app.json src/seed-module.ts --name","seed:all:build":"yarn ng run api:seed-all","seed:prod":"cross-env NODE_ENV=production NODE_OPTIONS=--max-old-space-size=14000 yarn ts-node -r tsconfig-paths/register --project apps/api/tsconfig.app.json src/seed.ts","seed:prod:build":"yarn ng run api:seed -c=production"},"dependencies":{"@gauzy/changelog-plugin":"^0.1.0","@gauzy/core":"^0.1.0","@gauzy/jitsu-analytics-plugin":"^0.1.0","@gauzy/job-proposal-plugin":"^0.1.0","@gauzy/job-search-plugin":"^0.1.0","@gauzy/knowledge-base-plugin":"^0.1.0","@gauzy/sentry-plugin":"^0.1.0","dotenv":"^16.0.3","yargs":"^17.5.0"},"devDependencies":{"@nestjs/schematics":"^10.1.1","@nestjs/testing":"^10.3.7","nodemon":"^3.1.0","pm2":"^5.3.1","ts-node":"^10.9.2","typescript":"5.1.6"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
console.log('API Starting...');
const core_1 = __webpack_require__("@gauzy/core");
console.log('Bootstrap loaded');
const plugin_config_1 = __webpack_require__("./src/plugin-config.ts");
console.log('Plugin Config loaded');
(0, core_1.bootstrap)(plugin_config_1.pluginConfig)
    .then(() => {
    console.log('API is running');
})
    .catch(async (error) => {
    console.log(error);
    process.exit(1);
});

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map