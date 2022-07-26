import { errorState } from './../atom';
import { useRecoilValue } from 'recoil';

export const useErrorMessage = () => {
  const message = useRecoilValue(errorState);

  return message;
};
