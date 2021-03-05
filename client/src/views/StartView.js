import React from 'react';
import { useState } from 'react';
import { Title } from '../components/Title';
import Modal from '../components/Modal';

export default function StartView() {
  const [showModal, setShowModal] = useState(true);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Title>Let's play snake game!</Title>
      {showModal && <Modal onClose={toggleModal} />}
    </div>
  );
}
