import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Footer } from '.';
import { useParticipantList } from '../../state/hook/useParticipantsList';

const mockUseNavigation = jest.fn();
const mockRaffler = jest.fn();

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

jest.mock('../../state/hook/useRaffler', () => {
  return {
    useRaffler: () => mockRaffler,
  };
});

describe('when there is not enough participants', () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });

  test('the game cannot be started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});

describe('when there is enough participants', () => {
  const participants = ['p1', 'p2', 'p3'];

  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
  });

  test('the game can start', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });

  test('the game has started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockUseNavigation).toHaveBeenCalledTimes(1);
    expect(mockUseNavigation).toBeCalledWith('/sorteio');
    expect(mockRaffler).toBeCalledTimes(1);
  });
});
