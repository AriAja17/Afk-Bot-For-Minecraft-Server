# Configuration

This section explains how to configure the Minecraft server and the AFK bot, including support for different Minecraft versions using ViaVersion, ViaBackwards, and ViaRewind.

## Server Configuration

1. **Enable Offline Mode**:
   * Open `server.properties` in your server directory.
   * Set `online-mode=false` to allow cracked accounts.
2. **Install AuthMeReloaded**:
   * Download and install [AuthMeReloaded](https://www.spigotmc.org/resources/authmereloaded.6269/) (version compatible with your server, e.g., 5.6.0 for Minecraft 1.21.4).
   * For Aternos, install via the plugin manager or upload the JAR from [ci.codemc.io](https://ci.codemc.io/job/AuthMe/job/AuthMeReloaded/).
3. **Install Version Compatibility Plugins (Optional)**:
   * To allow the bot to connect to servers with different Minecraft versions, install:
     * [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/): Allows newer clients (e.g., 1.21.4) to join older servers (e.g., 1.20.4).
     * [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/): Allows older clients (e.g., 1.12–1.16) to join newer servers.
     * [ViaRewind](https://www.spigotmc.org/resources/viarewind.521/): Allows very old clients (1.7.x–1.8.x) to join newer servers.
   * **Note**: These plugins are only needed if your server supports multiple client versions. If the server matches the bot version (1.21.4), skip this step.
4. **Configure AuthMeReloaded**:
   * Open `plugins/AuthMe/config.yml` in your server directory.
   *   Add the bot username (e.g., `Afk_Bot`) to `unrestrictedNames` to bypass authentication:

       ```yaml
       settings:
         unrestrictions:
           UnrestrictedName:
             - Afk_Bot
       ```
   *   Recommended settings for compatibility with the bot:

       ```yaml
       settings:
         sessions:
           enabled: true
           timeout: 0
         restrictions:
           allowCommands:
             - /login
             - /log
             - /l
             - /register
             - /reg
             - /email
             - /captcha
             - /2fa
             - /totp
           maxRegPerIp: 1
           ForceSingleSession: true
           kickOnWrongPassword: true
           allowMovement: false
           allowedMovementRadius: 5
           ProtectInventoryBeforeLogIn: true
           noTeleport: true
         registration:
           enabled: true
           force: true
           secondArg: CONFIRMATION
           messageInterval: 3
         security:
           maxLoginTry: 10
           applyBlindEffect: false
       ```
   * Save the file and restart the server.
5. **Bot Configuration**:
   * Open `settings.json` in the project directory.
   *   Update the following fields:

       ```json
       {
         "bot-account": {
           "username": "Afk_Bot",
           "password": "",
           "type": "offline"
         },
         "server": {
           "ip": "your-server-ip",
           "port": 7777,
           "version": "1.21.4"
         },
         "position": {
           "enabled": false,
           "x": 0,
           "y": 0,
           "z": 0
         },
         "utils": {
           "auto-auth": {
             "enabled": false,
             "password": "afkbot"
           },
           "anti-afk": {
             "enabled": true,
             "sneak": true
           },
           "chat-messages": {
             "enabled": false,
             "repeat": true,
             "repeat-delay": 60,
             "messages": [
               "Selamat Bermain",
               "Halo Aku Bot",
               "Abaikan Pesan Ini"
             ]
           },
           "chat-log": true,
           "auto-reconnect": true,
           "auto-reconnect-delay": 5
         }
       }
       ```
   * **Key Settings**:
     * `bot-account.username`: The bot Minecraft username (must match `unrestrictedNames` in AuthMe).
     * `server.ip` and `server.port`: Your server's IP and port (e.g., `example.aternos.me:7777` for Aternos).
     * `server.version`: Set to the bot version (default: `1.21.4`). If the server uses ViaVersion, this can remain `1.21.4` for newer servers. For older servers without ViaVersion (e.g., 1.8.9), set to the server's version (e.g., `"1.8.9"`).
     * `auto-auth.enabled`: Set to `false` for AuthMe bypass.
     * `anti-afk.enabled` and `anti-afk.sneak`: Enable anti-AFK actions.
     * `chat-messages.enabled`: Set to `true` to send periodic messages.
     * `position.enabled`: Set to `true` to move to specific coordinates. **Note**: Pathfinding may not work reliably on versions below 1.9.
6. **Version Compatibility**:
   * The bot supports Minecraft 1.21.4 by default but can connect to servers running older versions (e.g., 1.8–1.20) if the server uses ViaVersion, ViaBackwards, or ViaRewind.
   *   To connect to a specific version without ViaVersion, update `server.version` in `settings.json`:

       ```json
       "server": {
         "version": "1.8.9"
       }
       ```
   *   **Note**: Pathfinding (`position.enabled`) may not work reliably on versions below 1.9 due to game mechanics changes. Disable it for older versions:

       ```json
       "position": {
         "enabled": false
       }
       ```
   * Anti-AFK actions (jumping and sneaking) work across all supported versions (1.8–1.21.x).
7. **Verify Configuration**:
   * Start the server and check the console for AuthMe messages (e.g., `[AuthMe] SQLite Setup finished`).
   * Ensure the bot username is correctly listed in `unrestrictedNames`.
   * For older server versions (e.g., 1.7.x), use an older AuthMe version (e.g., 3.5 for 1.7.10)
