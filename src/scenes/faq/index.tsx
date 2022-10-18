import { Box } from "@mui/material";
import Header from "../../components/Header";

const Faq = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="FAQ" subtitle="Check for your question" />
      </Box>
    </Box>
  );
};

export default Faq;
