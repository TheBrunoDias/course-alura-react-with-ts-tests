import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
import { ParticipantList } from '../../components/ParticipantList';

export const Configuration: React.FC = () => {
  return (
    <>
      <Form />
      <ParticipantList />
      <Footer />
    </>
  );
};
