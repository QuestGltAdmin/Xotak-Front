import Web3 from "web3";
import ERC20TokenABI from "../ABI/xotakTokenABI.json";
import Chain from "../Json/Chain.json";

const ChainList = Chain.Chains;

export const TokenBalance = async (data) => {
  try {
    let chainId = ChainList.filter((chain) => chain.chainId === data.chainId);
    chainId = chainId[0];


    const web3 = new Web3(new Web3.providers.HttpProvider(chainId.rpc));

    let balance = 0;
    if (data.tokenAddress === "0x0000000000000000000000000000000000000000") {
      balance = await web3.eth.getBalance(data.walletAddress.toLowerCase());
      balance = balance / 10 ** 18;
    } else {
      const contract = new web3.eth.Contract(
        ERC20TokenABI,
        data.tokenAddress.toLowerCase()
      );
      balance = await contract.methods
        .balanceOf(data?.walletAddress?.toLowerCase())
        .call();
      const decimal = await contract.methods.decimals().call();
      balance = balance / 10 ** decimal;
    }
    return {
      balance: balance
    };
  } catch (error) {
    console.log(error);
  }
};