const mineflayer = require('mineflayer');
const Movements = require('mineflayer-pathfinder').Movements;
const pathfinder = require('mineflayer-pathfinder').pathfinder;
const { GoalBlock } = require('mineflayer-pathfinder').goals;

const config = require('./settings.json');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot has arrived');
});

app.listen(8000, () => {
  console.log('Server started');
});

function createBot() {
  console.log(`[INFO] Attempting to connect to ${config.server.ip}:${config.server.port} (version ${config.server.version})`);
  let bot;
  try {
    bot = mineflayer.createBot({
      username: config['bot-account'].username,
      password: config['bot-account'].password,
      auth: config['bot-account'].type,
      host: config.server.ip,
      port: config.server.port,
      version: config.server.version,
    });
  } catch (err) {
    console.error(`\x1b[31m[ERROR] Failed to create bot: ${err.message}\x1b[0m`);
    return;
  }

  if (!bot) {
    console.error('\x1b[31m[ERROR] Bot instance is undefined\x1b[0m');
    return;
  }

  bot.on('error', (err) => {
    console.error(`\x1b[31m[ERROR] Bot error: ${err.message}\x1b[0m`);
  });

  bot.on('connect', () => {
    console.log(`[INFO] Connected to server ${config.server.ip}:${config.server.port}`);
  });

  bot.on('login', () => {
    console.log(`[INFO] Bot logged in with protocol version: ${bot.protocolVersion}`);
  });

  bot.loadPlugin(pathfinder);
  const mcData = require('minecraft-data')(bot.version);
  if (!mcData) {
    console.error(`\x1b[31m[ERROR] Failed to load minecraft-data for version ${bot.version}\x1b[0m`);
    return;
  }
  const defaultMove = new Movements(bot, mcData);

  bot.once('spawn', () => {
    console.log('\x1b[33m[AfkBot] Bot joined the server\x1b[0m');

    if (bot.settings) {
      bot.settings.colorsEnabled = false;
      console.log('[INFO] Bot settings initialized');
    } else {
      console.warn('\x1b[33m[WARNING] Bot settings not available, continuing without setting colorsEnabled\x1b[0m');
    }

    setTimeout(() => {
      console.log('[INFO] Authentication skipped (bot in AuthMe unrestrictedNames)');

      if (config.utils['chat-messages'].enabled) {
        console.log('[INFO] Started chat-messages module');
        const messages = config.utils['chat-messages']['messages'];

        if (config.utils['chat-messages'].repeat) {
          const delay = config.utils['chat-messages']['repeat-delay'];
          let i = 0;

          let msg_timer = setInterval(() => {
            bot.chat(`${messages[i]}`);

            if (i + 1 === messages.length) {
              i = 0;
            } else {
              i++;
            }
          }, delay * 1000);
        } else {
          messages.forEach((msg) => {
            bot.chat(msg);
          });
        }
      }

      const pos = config.position;

      if (config.position.enabled) {
        console.log(
          `\x1b[32m[AfkBot] Starting to move to target location (${pos.x}, ${pos.y}, ${pos.z})\x1b[0m`
        );
        bot.pathfinder.setMovements(defaultMove);
        bot.pathfinder.setGoal(new GoalBlock(pos.x, pos.y, pos.z));
      }

      if (config.utils['anti-afk'].enabled) {
        bot.setControlState('jump', true);
        console.log('[INFO] Anti-AFK: Jumping enabled');
        if (config.utils['anti-afk'].sneak) {
          bot.setControlState('sneak', true);
          console.log('[INFO] Anti-AFK: Sneaking enabled');
        }
      }
    }, 10000);
  });

  bot.on('chat', (username, message) => {
    if (config.utils['chat-log']) {
      console.log(`[ChatLog] <${username}> ${message}`);
    }
  });

  bot.on('goal_reached', () => {
    console.log(
      `\x1b[32m[AfkBot] Bot arrived at the target location. ${bot.entity.position}\x1b[0m`
    );
  });

  bot.on('death', () => {
    console.log(
      `\x1b[33m[AfkBot] Bot has died and was respawned at ${bot.entity.position}\x1b[0m`
    );
  });

  if (config.utils['auto-reconnect']) {
    bot.on('end', () => {
      console.log('\x1b[33m[AfkBot] Bot disconnected, attempting to reconnect...\x1b[0m');
      setTimeout(() => {
        createBot();
      }, config.utils['auto-reconnect-delay'] * 1000);
    });
  }

  bot.on('kicked', (reason) => {
    console.log(
      '\x1b[33m',
      `[AfkBot] Bot was kicked from the server. Reason: \n${reason}`,
      '\x1b[0m'
    );
  });
}

createBot();