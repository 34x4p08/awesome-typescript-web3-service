require('dotenv').config()
import Web3 from 'web3'

import erc20Abi from '../contracts/erc20.json'

export const web3 = new Web3(process.env.ETHEREUM_RPC_URL)

// @ts-ignore
export const USDC = new web3.eth.Contract(erc20Abi, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48');