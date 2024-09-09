require('dotenv').config();

module.exports = {
    nodeRpcEndpoint: process.env.ALCHEMY_API_URL, // Refactor rpcUrl
    botToken: process.env.TELEGRAM_BOT_TOKEN,     // Refactor telegramBotToken
    chatId: process.env.TELEGRAM_CHAT_ID,         // Refactor telegramChatId
    depositContractAddress: "0x00000000219ab540356cBB839Cbe05303d7705Fa" // Beacon contract address
};
