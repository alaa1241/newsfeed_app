/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const Header = ({ onSearchChange, onCategoryChange }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("general");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    onSearchChange(value); // Notify parent about the search term
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    onCategoryChange(value); // Notify parent about the selected category
  };

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "primary.main", boxShadow: 3, mb: 2 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer" }}
        >
          NewsFeed
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "white",
            borderRadius: 2,
            px: 2,
            py: 0.5,
            boxShadow: 1,
            mr: 2,
          }}
        >
          <SearchIcon sx={{ color: "gray" }} />
          <InputBase
            placeholder="Search news..."
            value={search}
            onChange={handleSearchChange}
            sx={{ ml: 1, flex: 1 }}
          />
        </Box>

        <FormControl
          sx={{ minWidth: 120, bgcolor: "white", borderRadius: 2, mr: 2 }}
          size="small"
        >
          <Select value={category} onChange={handleCategoryChange}>
            <MenuItem value="general">General</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="entertainment">Entertainment</MenuItem>
            <MenuItem value="health">Health</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
