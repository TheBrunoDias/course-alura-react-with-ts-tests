import { participantsListState } from './../atom';
import { useRecoilValue } from 'recoil';

export const useParticipantList = () => {
  return useRecoilValue(participantsListState);
};
