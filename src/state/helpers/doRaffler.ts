import shuffle from 'just-shuffle';

export const doRaffler = (participants: string[]) => {
  const length = participants.length;

  const randomOrder = shuffle(participants);
  const result = new Map<string, string>();

  for (let index = 0; index < length; index++) {
    var friendIndex = index === length - 1 ? 0 : index + 1;

    result.set(randomOrder[index], randomOrder[friendIndex]);
  }

  return result;
};
