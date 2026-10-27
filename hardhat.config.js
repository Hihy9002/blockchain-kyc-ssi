// Cấu hình Hardhat cho mạng thử nghiệm Polygon Amoy và Sepolia

const networks = {};

if (process.env.POLYGON_AMOY_RPC_URL) {
  networks.polygonAmoy = {
    url: process.env.POLYGON_AMOY_RPC_URL,
    chainId: 80002
  };
}

if (process.env.SEPOLIA_RPC_URL) {
  networks.sepolia = {
    url: process.env.SEPOLIA_RPC_URL,
    chainId: 11155111
  };
}

module.exports = {
  solidity: "0.8.24",
  networks: networks
};
