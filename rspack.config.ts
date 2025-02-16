import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import * as RefreshPlugin from "@rspack/plugin-react-refresh";

const Dotenv = require('dotenv-webpack');

const isDev = process.env.NODE_ENV === "development";
console.log(process.env.PUBLIC_NAME);

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];
const path = require('path');

export default defineConfig({
	context: __dirname,
	entry: {
		main: "./src/main.tsx"
	},
	resolve: {
		extensions: ["...", ".ts", ".tsx", ".jsx"],
		tsConfig: path.resolve(__dirname, './tsconfig.json'),
	},
	module: {
		rules: [
			{
        test: /\.css$/,
        use: ["postcss-loader"],
        type: "css",
      },
			{
				test: /\.svg$/,
				type: "asset"
			},
			{
				test: /\.(jsx?|tsx?)$/,
				use: [
					{
						loader: "builtin:swc-loader",
						options: {
							jsc: {
								parser: {
									syntax: "typescript",
									tsx: true
								},
								transform: {
									react: {
										runtime: "automatic",
										development: isDev,
										refresh: isDev
									}
								}
							},
							env: { targets }
						}
					}
				]
			}
		]
	},
	plugins: [
		new rspack.HtmlRspackPlugin({
			template: "./index.html"
		}),
		new Dotenv({
			path: './.env', // Path to .env file (this is the default)
			safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
			defaults: false, // load '.env.defaults' as the default values if empty.
			prefix: 'import.meta.env.' // reference your env variables as 'import.meta.env.ENV_VAR'.
		}),
		isDev ? new RefreshPlugin() : null,
	].filter(Boolean),
	optimization: {
		minimizer: [
			new rspack.SwcJsMinimizerRspackPlugin(),
			new rspack.LightningCssMinimizerRspackPlugin({
				minimizerOptions: { targets }
			})
		]
	},
	experiments: {
		css: true
	}
});
