import React, { useState } from 'react';
import styles from './Grid.module.css';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import HandlerButtons from '../handlers/handler';
import {
  data as initialData,
  handleEdit,
  handleDelete,
  handleToggleActive,
} from '../../../utils/dataUtils';

import PaginationControls from '../paginationControl/paginationControl';

interface Props {
  data: data[];
  setData: React.Dispatch<React.SetStateAction<data[]>>;
  setEditedCardId: React.Dispatch<React.SetStateAction<null>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const itemsPerPage = 5; // Adjust this value as needed

const GridComponent: React.FC<Props> = ({
  data,
  setData,
  setEditedCardId,
  setIsModalOpen,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.heightControl}>
      <TableContainer>
        <Table>
          <TableHead sx={{ position: 'sticky', top: 0 }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((ele) => (
              <TableRow key={ele.id}>
                <TableCell>{ele.name}</TableCell>
                <TableCell>{ele.description}</TableCell>
                <TableCell>
                  <HandlerButtons
                    isActive={ele.isActive}
                    onEdit={() =>
                      handleEdit(ele.id, setEditedCardId, setIsModalOpen)
                    }
                    onDelete={() => handleDelete(ele.id, data, setData)}
                    onToggleActive={() =>
                      handleToggleActive(ele.id, data, setData)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default GridComponent;
