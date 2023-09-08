import React, { useState } from 'react';
import styles from './applications.module.css';
import InfoCard from '../commons/card/card';
import EditModal from '../commons/modal/modal';
import ToolBar from '../commons/toolbar/toolBar';
import {
  data,
  handleEdit,
  handleCloseModal,
  handleDelete,
  handleSearch,
  handleToggleActive,
} from '../../utils/dataUtils';
const Applications = () => {
  const [data, setData] = useState<data[]>([
    {
      id: 1,
      name: 'ETS',
      description: 'this is an application',
      isActive: true,
    },
    {
      id: 3,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 4,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 5,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 6,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 7,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
    {
      id: 8,
      name: 'LMS',
      description: 'this is an application',
      isActive: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedCardId, setEditedCardId] = useState(null);
  const [searchText, setSearchText] = useState('');
  const handleEditWrapper = (id) => {
    handleEdit(id);
    setEditedCardId(id);
    setIsModalOpen(true);
  };

  const handleDeleteWrapper = (id: number) => {
    handleDelete(id, data, setData);
  };

  const handleToggleActiveWrapper = (id: number) => {
    handleToggleActive(id, data, setData);
  };

  const handleCloseModalWrapper = () => {
    handleCloseModal(setIsModalOpen, setEditedCardId);
  };

  const handleSearchWrapper = () => {
    handleSearch(searchText, data, setData);
  };

  return (
    <>
      <ToolBar
        text={'Applications'}
        onSearch={handleSearchWrapper}
        setSearchText={setSearchText}
        searchText={searchText}
      />
      <div className={styles.scrollControl}>
        <div className={styles.cardContainer}>
          {data.map((ele) => (
            <InfoCard
              key={ele.id}
              id={ele.id}
              name={ele.name}
              description={ele.description}
              isActive={ele.isActive}
              onEdit={() => handleEditWrapper(ele.id)}
              onDelete={() => handleDeleteWrapper(ele.id)}
              onToggleActive={() => handleToggleActiveWrapper(ele.id)}
            />
          ))}
        </div>
        <EditModal
          cardTitle='Edit Application'
          open={isModalOpen}
          handleClose={handleCloseModalWrapper}
          cardId={editedCardId} // Pass the edited card's ID to the modal
        />
      </div>
    </>
  );
};

export default Applications;
