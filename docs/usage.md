# Usage

This guide explains how to run the Minecraft AFK Bot and understand its behavior.

## Running the Bot

1. Ensure the Minecraft server is online and configured (see [Configuration](configuration.md)).
2.  Navigate to the project directory:

    ```bash
    cd Afk Bot Minecraft 1.21.4
    ```
3.  Start the bot:

    ```bash
    node index.js
    ```
4.  Expected output:

    ```
    [INFO] Attempting to connect to your-server-ip:7777 (version 1.21.4)
    Server started
    [INFO] Connected to server your-server-ip:25565
    [INFO] Bot logged in with protocol version: 769
    [AfkBot] Bot joined the server
    [INFO] Bot settings initialized
    [INFO] Authentication skipped (bot in AuthMe unrestrictedNames)
    [INFO] Anti-AFK: Jumping enabled
    [INFO] Anti-AFK: Sneaking enabled
    ```

## Bot Behavior

* **Anti-AFK**: The bot jumps continuously and sneaks (if enabled) to avoid idle kicks.
* **Auto-Reconnect**: Reconnects after disconnection with a delay specified in `auto-reconnect-delay` (default: 5 seconds).
* **Chat Logging**: Logs all in-game chat messages if `chat-log` is `true` in `settings.json`.
* **Chat Messages**: Sends messages from `chat-messages.messages` at intervals defined by `chat-messages.repeat-delay` if `chat-messages.enabled` is `true`.
* **Coordinate Movement**: Moves to coordinates specified in `position.x`, `position.y`, `position.z` if `position.enabled` is `true`.

## Stopping the Bot

* Press `Ctrl+C` in the terminal to stop the bot.
* The bot will attempt to reconnect if disconnected from the server, unless manually stopped.
