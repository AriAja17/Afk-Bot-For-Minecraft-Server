# Troubleshooting

This section provides solutions to common issues when running the Minecraft AFK Bot.

## Bot Fails to Connect

* **Symptoms**: Errors like `Failed to create bot` or `Connection refused`.
* **Solutions**:
  * Ensure the server is online and the IP/port in `settings.json` are correct.
  * For Aternos, check the current port in the Aternos panel (ports are dynamic).
  * Verify `online-mode=false` in `server.properties`.

## Bot Kicked with "You must login first"

* **Symptoms**: Bot is kicked with an AuthMe message.
* **Solutions**:
  * Ensure the bot's username (e.g., `Afk_Bot`) is listed in `unrestrictedNames` in `plugins/AuthMe/config.yml`.
  * Check the server console for AuthMe errors (e.g., `[AuthMe] SQLite Setup finished`).
  *   Manually register the bot from the server console:

      ```bash
      /authme register Afk_Bot afkbot
      ```

      Then update `settings.json`:

      ```json
      "auto-auth": {
        "enabled": true,
        "password": "afkbot"
      }
      ```

## Server Lag (e.g., Aternos)

* **Symptoms**: Bot fails to spawn or behaves erratically.
* **Solutions**:
  *   Increase the initial spawn delay in `index.js`:

      ```javascript
      setTimeout(() => { ... }, 15000); // Change to 15 seconds
      ```
  * Ensure the server is not overloaded (check Aternos resource usage).

## AuthMe Errors

* **Symptoms**: Errors like `[AuthMe] InjectorReflectionException` or `[AuthMe] Task #40 generated an exception`.
* **Solutions**:
  * Reinstall AuthMeReloaded.
  * Contact the AuthMe community on Discord for support.

## Other Issues

* **Bot Not Performing Anti-AFK**: Ensure `anti-afk.enabled` is `true` in `settings.json`.
* **Contact**: Open an issue on the [GitHub repository](https://github.com/your-username/minecraft-afk-bot) for further assistance.
