import { resultRaffle } from './../atom';
import { useRecoilValue } from 'recoil';

export const useRafflerResult = () => {
  return useRecoilValue(resultRaffle);
};
