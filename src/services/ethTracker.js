const { JsonRpcProvider, ethers } = require('ethers'); // Using ethers.js v6
const logService = require('../utils/logger');
const { nodeRpcEndpoint, depositContractAddress } = require('../config/config');
const { triggerTelegramAlert } = require('./telegramNotifier');

// Initialize the provider with the RPC endpoint
const rpcProvider = new ethers.JsonRpcProvider(nodeRpcEndpoint);

// New function name and logs to track deposit transactions
async function monitorDeposits() {
    console.log("Initializing deposit monitoring...");

    const lastProcessedBlock = await rpcProvider.getBlockNumber();

    rpcProvider.on("block", async (currentBlock) => {
        console.log("Processing block:::", currentBlock);
        if (currentBlock > lastProcessedBlock) {
            const blockData = await rpcProvider.getBlockWithTransactions(currentBlock);

            blockData.transactions.forEach(tx => {
                if (tx.to && tx.to.toLowerCase() === depositContractAddress.toLowerCase()) {
                    const depositInfo = `
                        New deposit identified:
                        - Tx Hash: ${tx.hash}
                        - Sender: ${tx.from}
                        - Amount: ${ethers.utils.formatEther(tx.value)} ETH
                        - Block: ${currentBlock}
                    `;
                    logService.info(depositInfo);
                    triggerTelegramAlert(depositInfo);
                }
            });
        }
    });
}

module.exports = monitorDeposits;
