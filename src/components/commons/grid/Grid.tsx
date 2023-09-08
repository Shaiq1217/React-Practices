import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import HandlerButtons from '../handlers/handler';

interface Data {
  id: number;
  title: string;
  description: string;
}

interface Props {
  data: Data[];
}

const GridComponent = ({ data }: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((ele) => (
            <TableRow key={ele.id}>
              <TableCell>{ele.title}</TableCell>
              <TableCell>{ele.description}</TableCell>
              <TableCell>
                <HandlerButtons />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GridComponent;
