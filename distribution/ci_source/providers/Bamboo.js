"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * ### CI Setup
 *
 * Install dependencies and add a danger step to your `bitbucket-pipelines.yml`.
 * For improving the performance, you may need to cache `node_modules`.
 *
 * ```yml
 * image: node:10.15.0
 * pipelines:
 *   pull-requests:
 *     "**":
 *       - step:
 *           caches:
 *             - node
 *           script:
 *             - export LANG="C.UTF-8"
 *             - yarn install
 *             - yarn danger ci
 * definitions:
 *   caches:
 *     node: node_modules
 * ```
 *
 * ### Token Setup
 *
 * You can either add `DANGER_BITBUCKETCLOUD_USERNAME`, `DANGER_BITBUCKETCLOUD_PASSWORD`
 * or add `DANGER_BITBUCKETCLOUD_OAUTH_KEY`, `DANGER_BITBUCKETCLOUD_OAUTH_SECRET`
 * -
 */
var Bamboo = /** @class */ (function () {
    function Bamboo(env) {
        this.env = env;
    }
    Object.defineProperty(Bamboo.prototype, "name", {
        get: function () {
            return "Bamboo";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bamboo.prototype, "isCI", {
        get: function () {
            return ci_source_helpers_1.ensureEnvKeysExist(this.env, ["bamboo_buildPlanName", "bamboo_planRepository_repositoryUrl"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bamboo.prototype, "isPR", {
        get: function () {
            var mustHave = ["bamboo_inject_prId", "bamboo_planRepository_repositoryUrl", "bamboo_buildPlanName"];
            var mustBeInts = ["bamboo_inject_prId"];
            return ci_source_helpers_1.ensureEnvKeysExist(this.env, mustHave) && ci_source_helpers_1.ensureEnvKeysAreInt(this.env, mustBeInts);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bamboo.prototype, "pullRequestID", {
        get: function () {
            return "" + this.env.bamboo_inject_prId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bamboo.prototype, "repoSlug", {
        get: function () {
            //ssh://git@bt01.cliplister.com:7999/clfr30/bc3_complete.git
            // bamboo_inject_slug="projects/CLFR30/repos/bc3_complete" \
            var _a = this.env.bamboo_planRepository_repositoryUrl.match(/\/(\w+)\/(\w+(?:.git)?)$/), project = _a[1], slug = _a[2];
            return "projects/" + project + "/repos/" + slug.replace(/\.[^.]+$/, "");
        },
        enumerable: true,
        configurable: true
    });
    return Bamboo;
}());
exports.Bamboo = Bamboo;
//# sourceMappingURL=Bamboo.js.map