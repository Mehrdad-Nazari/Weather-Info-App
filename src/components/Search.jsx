import {  SearchRounded } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React from "react";

export const Search = (props) => {
  const checkKey = function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      props.handlerSubmit();
      e.target.value = "";
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <TextField
          onKeyDown={checkKey}
          onChange={props.SearchHandler}
          label="Enter Your City Name"
          variant="standard"
        />
        <Button onClick={props.handlerSubmit} type="button" sx={{ p: "10px" }}>
          <SearchRounded sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        </Button>
      </Box>
    </>
  );
};
