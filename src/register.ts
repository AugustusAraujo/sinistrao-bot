import { log } from "./log";

/**
 * Initialize & register your app's services here
 */

export async function register(): Promise<void> {
	log.info("Booting...");
}

/**
 * Teardown services here
 */
export async function teardown(): Promise<void> {
	log.info("Tearing down...");
}
