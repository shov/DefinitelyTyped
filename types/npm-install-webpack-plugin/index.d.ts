// Type definitions for npm-install-webpack-plugin 4.0
// Project: https://github.com/ericclemmons/npm-install-webpack-plugin#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7
import { Plugin } from "webpack";

/**
 * Speed up development by automatically installing & saving dependencies with Webpack.
 */
declare class NpmInstallPlugin extends Plugin {
    constructor(options?: NpmInstallPlugin.Options);
}

declare namespace NpmInstallPlugin {
    interface Options {
        /**
         * Use --save or --save-dev
         * @default false
         */
        dev?: boolean | DevFunction | undefined;
        /**
         * Install missing peerDependencies
         * @default true
         */
        peerDependencies?: boolean | undefined;
        /**
         * Reduce amount of console logging
         * @default false
         */
        quiet?: boolean | undefined;
        /**
         * npm command used inside company, yarn is not supported yet
         */
        npm?: string | undefined;
    }

    type DevFunction = (module: string, path: string) => boolean;
}

export = NpmInstallPlugin;
