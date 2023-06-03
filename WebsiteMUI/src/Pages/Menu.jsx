import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Menulist } from "../data/data";

export default function Menu() {
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {Menulist.map((menu) => (
          <Card sx={{ maxWidth:'390px', display: 'flex', m: '2rem'}}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />

              <CardContent>
                <Typography variant='h5' gutterBottom component={"div"}>
                  {menu.name}
                </Typography>

                <Typography variant="body2">{menu.description}>

                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}
