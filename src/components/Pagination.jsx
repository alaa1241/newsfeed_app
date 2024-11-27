/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 2,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        color="primary"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
