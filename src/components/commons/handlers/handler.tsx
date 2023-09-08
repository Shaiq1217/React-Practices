import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/Edit';
import { Box, Switch } from '@mui/material';
import { MouseEventHandler } from 'react';

interface Props {
  isActive: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onToggleActive: (e: boolean) => void;
}

const HandlerButtons = ({
  isActive,
  onEdit,
  onDelete,
  onToggleActive,
}: Props) => {
  return (
    <>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
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
      </Box>
    </>
  );
};

export default HandlerButtons;
