import { Box } from "@mui/material";
import Header from "../../components/Header";

const Form = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Profile Form" subtitle="Edit your profile" />
      </Box>
    </Box>
  );
};

export default Form;
