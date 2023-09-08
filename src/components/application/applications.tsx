import React, { useState } from 'react';
import styles from './applications.module.css';
import InfoCard from '../commons/card/card';
import EditModal from '../commons/modal/modal';

const Applications = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'ETS',
      description: 'this is an application',
      isActive: true,
    },
    {
      id: 2,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 2,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 2,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 2,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 2,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 2,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editedCardId, setEditedCardId] = useState(null);

  const handleEdit = (id) => {
    // Handle the edit action for the card with the given ID
    console.log(`Edit action for card with ID ${id}`);
    setEditedCardId(id); // Store the edited card's ID
    setIsModalOpen(true); // Open the modal
  };

  const handleDelete = (id: number) => {
    console.log(`Delete action for card with ID ${id}`);
  };

  const handleToggleActive = (id: number) => {
    setData((prevData) =>
      prevData.map((ele) =>
        ele.id === id ? { ...ele, isActive: !ele.isActive } : ele
      )
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditedCardId(null);
  };

  return (
    <>
      <div className={styles.scrollControl}>
        <div className={styles.cardContainer}>
          {data.map((ele) => (
            <InfoCard
              key={ele.id}
              id={ele.id}
              name={ele.name}
              description={ele.description}
              isActive={ele.isActive}
              onEdit={() => handleEdit(ele.id)}
              onDelete={() => handleDelete(ele.id)}
              onToggleActive={() => handleToggleActive(ele.id)}
            />
          ))}
        </div>
        <EditModal
          cardTitle='Edit Application'
          open={isModalOpen}
          handleClose={handleCloseModal}
          cardId={editedCardId} // Pass the edited card's ID to the modal
        />
      </div>
    </>
  );
};

export default Applications;
