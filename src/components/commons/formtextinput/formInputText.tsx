import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface FormInputProps {
  name: string;
  label: string;
  type?: string;
  setValue?: any;
}

const FormInputText = ({ name, label, type }: FormInputProps) => {
  const { control, formState } = useFormContext(); // Access the form's control and state
  const { errors } = formState;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          helperText={errors[name] ? errors[name].message : null}
          size='small'
          type={type}
          error={!!errors[name]}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant='outlined'
        />
      )}
    />
  );
};

export default FormInputText;
