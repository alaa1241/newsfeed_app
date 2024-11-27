import { Typography, Box } from "@mui/material";

const NoResults = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
      textAlign="center"
    >
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          fontStyle: "italic",
          fontWeight: "light",
        }}
      >
        No results found. Try a different search term.
      </Typography>
    </Box>
  );
};

export default NoResults;
