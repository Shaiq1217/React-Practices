import { data, handleSearch, handleCloseModal } from '../../../utils/dataUtils';
import React from 'react';
import styles from './DisplayDriver.module.css';
import ToolBar from '../toolbar/toolBar';
import EditModal from '../modal/modal';

interface Props {
  data: data[];
  setData: React.Dispatch<React.SetStateAction<data[]>>;
  toolBarTitle: string;
  modalTitle: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
  renderComponent: () => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditedCardId: React.Dispatch<React.SetStateAction<null>>;
  editedCardId: number | null;
  isModalOpen: boolean;
}
const DisplayDriver = ({
  isModalOpen,
  setIsModalOpen,
  searchText,
  setSearchText,
  data,
  setData,
  editedCardId,
  setEditedCardId,
  renderComponent,
  modalTitle,
  toolBarTitle,
}: Props) => {
  return (
    <>
      <ToolBar
        text={toolBarTitle}
        onSearch={() => handleSearch(searchText, data, setData)}
        setSearchText={setSearchText}
        searchText={searchText}
      />
      {renderComponent(data)}
      <EditModal
        modalTitle={modalTitle}
        id={editedCardId} // Pass the edited card's ID to the modal
        open={isModalOpen}
        handleClose={() => handleCloseModal(setIsModalOpen, setEditedCardId)}
      />
    </>
  );
};

export default DisplayDriver;
