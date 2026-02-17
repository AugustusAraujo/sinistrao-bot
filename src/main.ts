import { env } from "./env";
import { log } from "./log";
import { Client, Events, GatewayIntentBits } from "discord.js";

export async function main(): Promise<void> {
	log.info("Starting bot...");

	const client = new Client({
		intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages],
	});

	client.on(Events.ClientReady, async (readyClient) => {
		log.info(`Logged in as ${readyClient.user.tag}!`);
	});

	client.on(Events.InteractionCreate, async (interaction) => {
		if (!interaction.isChatInputCommand()) {
			return;
		}

		if (interaction.commandName === "ping") {
			await interaction.reply("Pong!");
		}

		if (interaction.commandName === "pong") {
			await interaction.reply("Pong!");
		}
	});

	client.login(env.TOKEN);
}
