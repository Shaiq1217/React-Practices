import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import FormInputText from "../../components/commons/formtextinput/formInputText";
import { z, string } from "zod";
import gslogo from "../../assets/gslogo-red.png";
import styles from "./login.module.css";
import Button from "../../components/commons/button/button";
const validationSchema = z.object({
  email: string().email("Invalid email format").nonempty("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .nonempty("Password is required"),
});

interface IFormInput {
  email: string;
  password: string;
}

const LogInPage = () => {
  const methods = useForm<IFormInput>();
  const { handleSubmit, setError } = methods;

  const onSubmit = async (data: IFormInput) => {
    try {
      await validationSchema.parseAsync(data); // Validate the form data using Zod
      console.log(data); // Submit the data if it's valid
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle Zod validation error
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
        component="main"
        maxWidth="xs"
        style={{
          border: "1px solid #007fff",
          borderRadius: "0 10%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5rem",
          marginInlineStart: "35vw",
          minHeight: "70vh",
          minWidth: "30vw",
        }}
      >
        <FormProvider {...methods}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ gap: 1 }}
          >
            <img src={gslogo} alt="GoSaaS logo" />
            <FormInputText name="email" label="Email" type="email" />
            <FormInputText name="password" label="Password" type="password" />
            <Button
              text={"Sign In"}
              border={"outlineOnHover"}
              onClick={handleSubmit(onSubmit)} // Call handleSubmit when the button is clicked
            />
            <p className={styles.registrationMsg}>
              Don't have an account?{" "}
              <Link to="/register" className={styles.resgistration}>
                Register Here
              </Link>
            </p>
          </Box>
        </FormProvider>
      </Container>
    </>
  );
};

export default LogInPage;
