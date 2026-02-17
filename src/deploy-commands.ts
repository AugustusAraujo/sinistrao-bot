import fs from "node:fs";
import path from "node:path";
import { REST, Routes } from "discord.js";
import { env } from "./env";

const token = env.TOKEN;
const clientId = String(env.CLIENT_ID);

(async () => {
	const commands = [];
	const foldersPath = path.join(__dirname, "commands");
	const commandFolders = fs.readdirSync(foldersPath);

	for (const folder of commandFolders) {
		const commandsPath = path.join(foldersPath, folder);
		const commandFiles = fs
			.readdirSync(commandsPath)
			.filter((file) => file.endsWith(".ts"));

		for (const file of commandFiles) {
			const filePath = path.join(commandsPath, file);

			const module = await import(filePath);
			const command = module.default;

			if (command && "data" in command && "execute" in command) {
				commands.push(command.data.toJSON());
			}
		}
	}

	const rest = new REST().setToken(token);

	try {
		console.log(
			`Started refreshing ${commands.length} application (/) commands.`,
		);
		const data: any = await rest.put(Routes.applicationCommands(clientId), {
			body: commands,
		});
		console.log(
			`Successfully reloaded ${data.length} application (/) commands.`,
		);
	} catch (error) {
		console.error(error);
	}
})();
