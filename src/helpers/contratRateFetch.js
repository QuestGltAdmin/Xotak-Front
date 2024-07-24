import Web3 from "web3";
import PresaleABI from "../ABI/PresaleAbi.json";
import Contracts from "../JSON/ContractList.json";
import Chain from "../JSON/Chain.json";

const ChainList = Chain.Chains;
const ContractList = Contracts.Contracts[0];
const PresaleContract = ContractList.BNBPresaleContract;

export const contractRateBNB = async (data) => {
  try {
    let chainId = ChainList.filter((chain) => chain.chainId === data.chainId);
    chainId = chainId[0];

    const web3 = new Web3(new Web3.providers.HttpProvider(chainId.rpc));

    const caddress = web3.utils.toChecksumAddress(PresaleContract);
    let presaleContract = new web3.eth.Contract(PresaleABI, caddress);   
    let rate = await presaleContract.methods.coinRate().call();
    rate = rate/1e9;
    return  rate
  } catch (error) {
    console.log(error);
  }
};