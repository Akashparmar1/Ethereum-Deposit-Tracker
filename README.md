Task Document for VIT SDE Hiring - Luganodes
# Ethereum Deposit Tracker

## Project Overview

Develop a robust and efficient Ethereum Deposit Tracker to monitor and record ETH deposits on the Beacon Deposit Contract.

Examples of Deposits to be Tracked:
Comment
.

Examples of Deposits to be Tracked:
Comment
Deposit Transaction: 0x1391be19259f10e01336a383217cf35344dd7aa157e95030f46235448ef5e5d6
Deposit through contract: 0x53c98c3371014fd54275ebc90a6e42dffa2eee427915cab5f80f1e3e9c64eba4


## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/eth-deposit-tracker.git
    cd eth-deposit-tracker
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the `src/` directory and add the following:
      ```plaintext
      ALCHEMY_API_URL=YOUR_ALCHEMY_API_URL
      TELEGRAM_BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
      TELEGRAM_CHAT_ID=YOUR_TELEGRAM_CHAT_ID
      ```

4. **Run the application**:
    ```bash
    node src/index.js
    ```

## Features

- Monitors Ethereum Beacon Deposit Contract for incoming deposits.
- Sends Telegram alerts for each detected deposit.
- Logs deposit details and errors.



