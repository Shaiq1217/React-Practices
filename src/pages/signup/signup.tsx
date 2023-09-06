import { Container, CssBaseline, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import FormInputText from '../../components/commons/formtextinput/formInputText';
import { z, string } from 'zod';
import gslogo from '../../assets/gslogo.png';
import styles from './signup.module.css';
import Button from '../../components/commons/button/button';
const validationSchema = z.object({
  email: string().email('Invalid email format').nonempty('Email is required'),
  password: string()
    .min(8, 'Password must be at least 8 characters')
    .nonempty('Password is required'),
  firstName: string()
    .min(3, 'Please enter atleast 3 characters')
    .max(10, 'Length exceeds allowed limit')
    .nonempty('Please enter your name'),
  lastName: string()
    .min(3, 'Please enter atleast 3 characters')
    .max(15, 'Length exceeds allowed limit'),
});

interface IFormInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const SignUpPage = () => {
  const methods = useForm<IFormInput>();
  const { handleSubmit, formState, setError } = methods;
  const { errors } = formState;

  const onSubmit = async (data: IFormInput) => {
    try {
      await validationSchema.parseAsync(data); // Validate the form data using Zod
      console.log(data); // Submit the data if it's valid
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((validationError) => {
          if (validationError.path[0]) {
            const fieldName = validationError.path[0];
            setError(fieldName, { message: validationError.message });
          }
        });
      }
    }
  };

  return (
    <>
      <CssBaseline />
      <Container
        component='main'
        maxWidth='xs'
        style={{
          border: '1px solid red',
          borderRadius: '0 10%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '5rem',
          minHeight: '70vh',
          minWidth: '10vw',
        }}
      >
        <FormProvider {...methods}>
          <Box
            component='form'
            noValidate
            autoComplete='off'
            display='flex'
            flexDirection='column'
            alignItems='center'
            sx={{ gap: 1 }}
          >
            <img src={gslogo} alt='GoSaaS logo' />
            <FormInputText name='firstName' label='First Name' />
            <FormInputText name='lastName' label='Last Name' type='email' />
            <FormInputText name='email' label='Email' type='email' />
            <FormInputText name='password' label='Password' type='password' />
            <Button
              text={'Sign Up'}
              border={'outlineOnHover'}
              onClick={handleSubmit(onSubmit)} // Call handleSubmit when the button is clicked
            />

            <p className={styles.registrationMsg}>
              Already have an account?{' '}
              <Link to='/' className={styles.resgistration}>
                Log In
              </Link>
            </p>
          </Box>
        </FormProvider>
      </Container>
    </>
  );
};

export default SignUpPage;
