import React from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
  console.log(products);
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}></div>
      <Grid container justifyContent="center" spacing={4}>
        {products.length === 0 ? (
          <div>
            <Typography>Loading...</Typography>
            <CircularProgress />
          </div>
        ) : null}
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};
export default Products;
