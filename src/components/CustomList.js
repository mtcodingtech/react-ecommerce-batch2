import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function CustomList({ product }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Image src={product.thumbnail} alt={"img"} width={50} height={50} />
          {/* <Avatar alt="Remy Sharp" src={product.thumbnail} /> */}
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
               {product.title}
              </Typography>
         
            </React.Fragment>
          }
          secondary={`$ ${product.price}`}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
