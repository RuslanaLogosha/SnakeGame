import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import shortid from 'shortid';
import Form from './Form';
import s from '../styles/form.module.scss';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose }) {
  const [users, setUsers] = useState(() => {
    return JSON.parse(window.localStorage.getItem('users')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = name => {
    if (name === '') {
      alert(`Введите, пожалуйста, имя контакта.`);
      return;
    }

    if (users.find(user => user.name === name)) {
      alert(`${name} is already in users.`);
      return;
    }

    const newUser = {
      id: shortid.generate(),
      name,
    };

    setUsers(prevUsers => [newUser, ...prevUsers]);
  };

  useEffect(() => {
    console.log(users);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onClose();
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        {users.length > 0 ? (
          <form className={s.form} onSubmit={handleSubmit}>
            <h1>Click button to start the game</h1>
            <button type="submit">Start the game!</button>
          </form>
        ) : (
          <Form onSubmit={addUser} onClose={onClose} />
        )}
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
