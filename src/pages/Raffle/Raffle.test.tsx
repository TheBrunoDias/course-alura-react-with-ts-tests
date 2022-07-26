import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Raffle } from '.';
import { useParticipantList } from '../../state/hook/useParticipantsList';
import { useRafflerResult } from '../../state/hook/useRafflerResult';

const mockUseNavigation = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockUseNavigation,
  };
});

jest.mock('../../state/hook/useParticipantsList', () => {
  return {
    useParticipantList: jest.fn(),
  };
});

jest.mock('../../state/hook/useRafflerResult', () => {
  return {
    useRafflerResult: jest.fn(),
  };
});

describe('Raffle Page', () => {
  const participants = ['p1', 'p2', 'p3'];

  const result = new Map([
    ['p1', 'p2'],
    ['p2', 'p3'],
    ['p3', 'p1'],
  ]);

  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
    (useRafflerResult as jest.Mock).mockReturnValue(result);
  });

  test('All participants can see they secret friend', () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole('option');

    expect(options).toHaveLength(participants.length + 1);
  });

  test('Show secret friend when requested', () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');

    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const secretFriend = screen.getByRole('alert');

    expect(secretFriend).toBeInTheDocument();
  });
});
