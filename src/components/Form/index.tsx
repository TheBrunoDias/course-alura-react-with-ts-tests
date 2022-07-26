import React, { useRef, useState } from 'react';
import { useAddParticipant } from '../../state/hook/useAddParticipant';
import { useErrorMessage } from '../../state/hook/useErrorMessage';

export const Form: React.FC = () => {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const addInList = useAddParticipant();

  const errorMessage = useErrorMessage();

  const addParticipant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addInList(name);
    setName('');
    inputRef.current?.focus();
  };

  return (
    <>
      <form onSubmit={addParticipant}>
        <input
          ref={inputRef}
          type="text"
          value={name}
          placeholder="Insira os nomes dos participantes"
          onChange={(e) => setName(e.target.value)}
        />
        <button disabled={!name}>Adicionar</button>
        {errorMessage && <p role="alert">{errorMessage}</p>}
      </form>
    </>
  );
};
