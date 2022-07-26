import { doRaffler } from './doRaffler';

describe('Given a raffle', () => {
  test('Each participant cannot get his own name', () => {
    const participants = ['p1', 'p2', 'p3', 'p4', 'p5'];

    const raffle = doRaffler(participants);
    participants.forEach((p) => {
      var secretFriend = raffle.get(p);

      expect(secretFriend).not.toEqual(p);
    });
  });
});
