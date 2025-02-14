import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Grid from '@mui/material/Grid2';

function ProductCard({ product }) {
  return (
    <>
      <Grid size={{xs: 12, md: 6, lg: 4}}>
        <Card>
          <Image src={product.thumbnail} alt="img" width={500} height={500} style={{width: "100%", height: 200, objectFit: "cover"}} />
          <Box className="content">
            <Typography>{product.title}</Typography>
            <Typography>{product.description}</Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained">Add to Cart</Button>
            <Button size="small" variant="contained">View Detail</Button>
          </Box>
        </Card>
      </Grid>
    </>
  );
}

export default ProductCard;
