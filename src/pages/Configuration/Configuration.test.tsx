import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Configuration } from '.';
import { useParticipantList } from '../../state/hook/useParticipantsList';
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
describe('Configuration Page', () => {
  beforeEach(() => {
    (useParticipantList as jest.Mock).mockReturnValue([]);
  });

  test('most be render', () => {
    const { container } = render(
      <RecoilRoot>
        <Configuration />
      </RecoilRoot>
    );
    expect(container).toMatchSnapshot();
  });
});
