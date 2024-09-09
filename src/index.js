const monitorDeposits = require('./services/ethTracker.js');
const logService = require('./utils/logger');

// Initialize the application
async function initiateTracker() {
    try {
        logService.info('Launching Ethereum Deposit Monitor...');
        await monitorDeposits(); // Renamed the function
    } catch (error) {
        logService.error(`Tracker initialization failed: ${error.message}`);
    }
}

// Start the tracker
initiateTracker();
