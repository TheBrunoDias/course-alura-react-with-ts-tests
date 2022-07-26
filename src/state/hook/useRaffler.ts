import { useSetRecoilState } from 'recoil';
import { doRaffler } from '../helpers/doRaffler';
import { resultRaffle } from './../atom';
import { useParticipantList } from './useParticipantsList';

export const useRaffler = () => {
  const participants = useParticipantList();

  const setResult = useSetRecoilState(resultRaffle);

  return () => {
    const result = doRaffler(participants);
    setResult(result);
  };
};
