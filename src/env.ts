import { AppConfig, configure } from "ts-appconfig";

/**
 * Environment Variables Schema
 */
export class Environment extends AppConfig {
	readonly APP_TITLE = "sinistrao-bot";
	readonly TOKEN: string;
	readonly CLIENT_ID = "1473407198804578324";
	readonly PUBLIC_KEY: string;
}

/**
 * Load & export environment variables
 */
export const env: Environment = configure(Environment);
