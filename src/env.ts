import { AppConfig, configure } from "ts-appconfig";

/**
 * Environment Variables Schema
 */
export class Environment extends AppConfig {
	readonly APP_TITLE = "sinistrao-bot";
	readonly TOKEN: string;
	readonly CLIENT_ID: string;
	readonly PUBLIC_KEY: string;
}

/**
 * Load & export environment variables
 */
export const env: Environment = configure(Environment);
