import { Network } from "bitcoinjs-lib";

const garlicoin: Network = {
  bech32: "grlc",
  messagePrefix: "\x18Garlicoin Signed Message:\n",
  pubKeyHash: 0x26,
  wif: 0xb0,
  scriptHash: 0x32,
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
};

export default garlicoin;
