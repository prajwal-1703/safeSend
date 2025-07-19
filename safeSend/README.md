# 🦾 SendSafe

**SendSafe** is a minimal Ethereum wallet dApp built with React, wagmi, and viem. It allows users to connect their wallet, view their ETH balance, and send 0.1 ETH to any address.

> 🧪 **Currently working on the Sepolia testnet for testing purposes only.**

---

## 🚀 Features

- 🔌 **Connect Wallet** using MetaMask (via `wagmi`)
- 💰 **View ETH Balance** of connected wallet
- 💸 **Send 0.1 ETH** to any recipient address
- ⚡ Built with **React**, **Vite**, **wagmi**, **viem**, and **@tanstack/react-query**

---

## 🧰 Tech Stack

- React + Vite
- [wagmi](https://wagmi.sh/)
- [viem](https://viem.sh/)
- [@tanstack/react-query](https://tanstack.com/query/v5)
- **Sepolia Ethereum testnet**

---

## 📦 Installation

```bash
git clone https://github.com/prajwal-1703/sendSafe.git
cd sendSafe
npm install
```

> ⚠️ Make sure you have MetaMask or another injected wallet installed.

---

## 🧪 Running the App Locally

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

> ⚠️ Make sure your MetaMask is connected to the **Sepolia testnet** to use the app.

---

## ✍️ Usage

1. **Connect Wallet** – Click the wallet button to connect via MetaMask.
2. **Check Balance** – Once connected, your ETH balance will appear.
3. **Send ETH** – Enter a recipient address and click "Send 0.1 ETH".

> 🧪 This app only interacts with **Sepolia ETH** (test ETH). It won't work on mainnet.

---

## 📁 Project Structure

```
sendSafe/
├── public/
├── src/
│   ├── App.jsx        # Main app logic
│   ├── App.css        # Styling
│   ├── main.jsx       # Entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🌐 Live Demo

> Coming soon (to be deployed on [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/))

---

## 🧠 Future Improvements

* Wallet disconnect functionality
* Custom transaction value input
* Transaction history
* Support for multiple networks
* UI/UX improvements with animations & toast notifications

---

![App Screenshot](./assets/screenshot.png)


## 🙌 Acknowledgements

* [wagmi](https://wagmi.sh/)
* [viem](https://viem.sh/)
* [Ethereum Sepolia Testnet](https://sepolia.dev/)

---

## 👋 Author

Built with ❤️ by [@prajwal-1703](https://github.com/prajwal-1703)
