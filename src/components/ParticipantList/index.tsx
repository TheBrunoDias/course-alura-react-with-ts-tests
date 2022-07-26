import { useParticipantList } from '../../state/hook/useParticipantsList';

export const ParticipantList: React.FC = () => {
  const participants: string[] = useParticipantList();

  return (
    <>
      <ul>
        {participants.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </>
  );
};
