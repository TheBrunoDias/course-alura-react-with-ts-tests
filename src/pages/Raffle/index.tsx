import { useState } from 'react';
import { useParticipantList } from '../../state/hook/useParticipantsList';
import { useRafflerResult } from '../../state/hook/useRafflerResult';

export const Raffle: React.FC = () => {
  const [selected, setSelected] = useState('');
  const [secretFriend, setSecretFrient] = useState('');
  const participants = useParticipantList();
  const result = useRafflerResult();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (result.has(selected)) {
      setSecretFrient(result.get(selected)!);
    }
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <select
            required
            name="selectedParticipant"
            id="selectedParticipant"
            placeholder="Selecione o seu nome"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option>Selecione seu nome</option>
            {participants.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <button>Sortear</button>
        </form>
        {secretFriend && <p role="alert">{secretFriend}</p>}
      </section>
    </>
  );
};
