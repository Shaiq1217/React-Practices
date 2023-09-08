import React from 'react';
import {
  Typography,
  CardContent,
  Card,
  CardActions,
  Switch,
} from '@mui/material';
import styles from './card.module.css';
import HandlerButtons from '../handlers/handler';
interface Props {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onToggleActive: (e: boolean) => void;
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
        margin: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.197)',
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
        <HandlerButtons
          isActive={isActive}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleActive={onToggleActive}
        />
      </CardActions>
    </Card>
  );
}
