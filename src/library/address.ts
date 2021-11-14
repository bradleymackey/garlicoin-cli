import { ECPair } from "ecpair";
import * as bitcoin from "bitcoinjs-lib";
import { GARLICOIN_NETWORK } from ".";

export interface Address {
  public: string;
  private: string;
}

export function makeAddress(): Address {
  const keyPair = ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({
    pubkey: keyPair.publicKey,
    network: GARLICOIN_NETWORK,
  });
  const privateKey = keyPair.toWIF();
  return {
    public: address,
    private: privateKey,
  };
}
