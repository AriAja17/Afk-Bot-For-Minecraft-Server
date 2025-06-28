# Minecraft AFK Bot

A lightweight **Minecraft AFK Bot** built with [Mineflayer](https://github.com/PrismarineJS/mineflayer) for Minecraft 1.21.x This bot prevents idle kicks on cracked servers by performing anti-AFK actions. It supports automatic reconnection, chat logging, and optional features like sending periodic messages. The bot is optimized for servers using [AuthMeReloaded](https://www.spigotmc.org/resources/authmereloaded.6269/), bypassing authentication via `unrestrictedNames`.

## Features
- **Anti-AFK**: Jumps and optionally sneaks to avoid idle kicks.
- **Auto-Reconnect**: Reconnects after disconnection with configurable delay.
- **Chat Logging**: Logs in-game chat for debugging.
- **Optional**: Sends periodic messages or moves to specific coordinates.
- **AuthMe Bypass**: Skips login for the bot's username (e.g., `Afk_Bot`).
- **Version Support**: Works with servers running 1.8–1.21.4 using [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/), [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/), or [ViaRewind](https://www.spigotmc.org/resources/viarewind.521/).

## Quick Start
1. Clone the repository:
   ```
   git clone https://github.com/AriAja17/Afk-Bot-For-Minecraft-Server.git
   cd Afk Bot Minecraft 1.21.4
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Configure `settings.json` and AuthMeReloaded (see [Configuration](docs/configuration.md)).
4. Run the bot:
   ```
   node index.js
   ```

## Documentation
Full setup and usage instructions are available at [Here](https://equinox-interactive.gitbook.io/wiki-for-afk-bot-minecraft-1.21.4/) or in the [docs/](docs/README.md) folder.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
