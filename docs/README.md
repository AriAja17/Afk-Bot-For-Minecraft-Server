# Introduction

Welcome to the documentation for the **Minecraft AFK Bot**, a lightweight bot built with [Mineflayer](https://github.com/PrismarineJS/mineflayer) for Minecraft 1.21.x This bot is designed to prevent players from being kicked due to inactivity on cracked Minecraft servers, such as those hosted on Aternos. It supports anti-AFK actions, automatic reconnection, chat logging, and optional features like periodic chat messages.

The bot is optimized for servers using the [AuthMeReloaded](https://www.spigotmc.org/resources/authmereloaded.6269/) plugin, allowing the bot to bypass authentication via the `unrestrictedNames` setting.

## Features

* **Anti-AFK**: Automatically jumps and optionally sneaks to avoid idle kicks.
* **Auto-Reconnect**: Reconnects to the server if disconnected, with a configurable delay.
* **Chat Logging**: Logs all in-game chat messages for debugging.
* **Chat Messages**: Optionally sends periodic chat messages (e.g., "Selamat Bermain").
* **Coordinate Movement**: Optionally moves to specified coordinates using pathfinding.
* **AuthMe Bypass**: Skips authentication for the bot's username (e.g., `Afk_Bot`).

## Getting Started

To get started, follow the sections below:

* [Installation](installation.md): Set up the bot on your system.
* [Configuration](configuration.md): Configure the server and bot settings.
* [Usage](usage.md): Run the bot and understand its behavior.
* [Troubleshooting](troubleshooting.md): Resolve common issues.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE/) file for details.
