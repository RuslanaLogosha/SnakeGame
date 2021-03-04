import { useState } from 'react';
import s from './form.module.css';

export default function Form({ onSubmit, onClose }) {
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    onSubmit(name);
    setTimeout(() => {
      onClose();
    }, 10);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Please enter your login
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      {name.length > 0 ? (
        <button className={s.button} type="submit">
          Start the game!
        </button>
      ) : (
        <button disabled className={s.button} type="submit">
          Start the game!
        </button>
      )}
    </form>
  );
}
