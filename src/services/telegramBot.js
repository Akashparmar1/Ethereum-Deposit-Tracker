const axios = require('axios');
const { botToken, chatId } = require('../config/config');
const logService = require('../utils/logger');

// Function to send alerts through Telegram
async function triggerTelegramAlert(message) {
    try {
        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        await axios.post(telegramUrl, {
            chat_id: chatId,
            text: message
        });
        logService.info(`Telegram notification sent: ${message}`);
    } catch (error) {
        logService.error(`Error sending Telegram notification: ${error.message}`);
    }
}

module.exports = { triggerTelegramAlert };
