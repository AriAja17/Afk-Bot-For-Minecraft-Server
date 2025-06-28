# Installation

This guide explains how to install the Minecraft AFK Bot on your system.

## Prerequisites

* **Node.js**: Version 22 or higher ([Download](https://nodejs.org/)).
* **Minecraft Server**: A cracked server running Minecraft 1.21.4 with [AuthMeReloaded](https://www.spigotmc.org/resources/authmereloaded.6269/) installed.
* **Git**: For cloning the repository ([Download](https://git-scm.com/)).

## Steps

1.  **Clone the Repository**:

    ```bash
    git clone git clone https://github.com/AriAja17/Afk-Bot-For-Minecraft-Server.git
    cd Afk Bot Minecraft 1.21.4
    ```
2.  **Install Dependencies**: Install the required Node.js packages:

    ```bash
    npm install
    ```

    This installs `mineflayer`, `mineflayer-pathfinder`, and `express` as defined in `package.json`.
3. **Verify Server Setup**:
   * Ensure your Minecraft server is running in offline mode (`online-mode=false` in `server.properties`).
   * Install [AuthMeReloaded](https://www.spigotmc.org/resources/authmereloaded.6269/) on your server (e.g., via Aternos plugin manager or by uploading the JAR from [ci.codemc.io](https://ci.codemc.io/job/AuthMe/job/AuthMeReloaded/)).
   * Proceed to [Configuration](configuration.md) to set up the server and bot.
