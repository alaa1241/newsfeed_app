/* eslint-disable react/prop-types */
import { Box, Skeleton } from "@mui/material";

const SkeletonLoader = ({ count = 5 }) => {
  return (
    <Box>
      {[...Array(count)].map((_, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            mb: 3,
            p: 2,
            boxShadow: 2,
            borderRadius: 2,
            bgcolor: "background.paper",
          }}
        >
          <Skeleton
            variant="rectangular"
            height={200}
            sx={{ borderRadius: 2, mb: 2 }}
          />
          <Skeleton variant="text" height={30} width="60%" />
          <Skeleton variant="text" height={20} width="80%" />
          <Skeleton variant="text" height={15} width="50%" />
        </Box>
      ))}
    </Box>
  );
};

export default SkeletonLoader;
