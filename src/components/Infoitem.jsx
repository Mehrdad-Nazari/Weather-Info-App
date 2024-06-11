import { Description } from "@mui/icons-material";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import React from "react";

export const Infoitem = (props) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, padding: "0" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sizes="" sx={{ bgcolor: "#868e96", border:"0.5px solid black" }}>
            <Description />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
        sx={{margin:"0"}}
          primary={
            <Typography variant="button" display="block">
              {props.title}
            </Typography>
          }
          secondary={<Typography variant="subtitle1" gutterBottom  >
          {props.value}
        </Typography>}
        />
      </ListItem>
    </List>
  );
};
