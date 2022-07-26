import { atom } from 'recoil';

export const participantsListState = atom<string[]>({
  key: 'participantListState',
  default: [],
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});

export const resultRaffle = atom<Map<string, string>>({
  key: 'resultRaffle',
  default: new Map(),
});
