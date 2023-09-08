import React from 'react';
import {
  Typography,
  CardContent,
  Card,
  CardActions,
  Switch,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './card.module.css';
import EditRoundedIcon from '@mui/icons-material/Edit';

interface Props {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onToggleActive: (e: boolean) => boolean;
}

export default function InfoCard({
  id,
  name,
  description,
  isActive,
  onEdit,
  onDelete,
  onToggleActive,
}: Props) {
  return (
    <Card
      sx={{
        minWidth: 275,
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      <CardContent>
        <Typography
          sx={{ textAlign: 'left', fontSize: '0.75rem' }}
          gutterBottom
        >
          Application
        </Typography>
        <div className={styles.colorBand}></div>
        <Typography
          sx={{ fontWeight: 'bold', textAlign: 'left' }}
          variant='h4'
          component='div'
          gutterBottom
        >
          {name}
        </Typography>
        <Typography
          sx={{ textAlign: 'left' }}
          variant='body2'
          color='text.secondary'
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <EditRoundedIcon
          sx={{ fontSize: 18, cursor: 'pointer', marginLeft: 'auto' }}
          onClick={onEdit}
        />
        <DeleteIcon
          sx={{ fontSize: 18, color: 'red', cursor: 'pointer' }}
          onClick={onDelete}
        />
        <Switch
          checked={isActive}
          inputProps={{ 'aria-label': 'controlled' }}
          size='small'
          sx={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onToggleActive(isActive)}
        />
      </CardActions>
    </Card>
  );
}
