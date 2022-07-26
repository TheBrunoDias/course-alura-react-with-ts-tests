import { useNavigate } from 'react-router-dom';
import { useParticipantList } from '../../state/hook/useParticipantsList';
import { useRaffler } from '../../state/hook/useRaffler';

export const Footer: React.FC = () => {
  const navigation = useNavigate();
  const participants = useParticipantList();
  const raffle = useRaffler();

  const handleClick = () => {
    raffle();
    navigation('/sorteio');
  };

  return (
    <footer>
      <button disabled={participants.length < 3} onClick={handleClick}>
        Começar
      </button>
    </footer>
  );
};
