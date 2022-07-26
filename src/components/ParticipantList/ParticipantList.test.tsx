import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ParticipantList } from '.';
import { useParticipantList } from '../../state/hook/useParticipantsList';

jest.mock('../../state/hook/useParticipantsList', () => {
  return {
    useParticipantList: jest.fn(),
  };
});

describe('Empty Participant List', () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });

  test('Must be render without elements', () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );
    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(0);
  });
});

describe('Filled Participant List', () => {
  const participants = ['p1', 'p2'];

  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue(participants);
  });

  test('Must render with elements', () => {
    render(
      <RecoilRoot>
        <ParticipantList />
      </RecoilRoot>
    );
    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(participants.length);
  });
});
