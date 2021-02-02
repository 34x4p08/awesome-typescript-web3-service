import { USDC } from 'src/constants'

export const start = async () => {
    //TODO: Some app logic
    const decimals = await USDC.methods.decimals().call()
    const vitalikBalance = await USDC.methods.balanceOf('0x1db3439a222c519ab44bb1144fc28167b4fa6ee6').call()
    console.log(`Vitalik has ${vitalikBalance / 10 ** decimals} USDC`)
};

start()