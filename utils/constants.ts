import { getAddress } from '@ethersproject/address';
import { BigNumber } from 'ethers';

export const ethAddress = getAddress(`0x${'e'.repeat(40)}`);
export const ipfsDomain = 'https://gateway.ipfs.io/ipfs/';

export const bscIcon =
  'data:image/png;base64,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';
export const feePercent = BigNumber.from('15').div('100'); // TODO: Fee changes per network
