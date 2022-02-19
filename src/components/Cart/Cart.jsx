import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  CssBaseline,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./style";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  // console.log(Object.entries(cart).length);
  const classes = useStyles();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1" style={{ color: "#064663" }}>
      You have no items in your shopping cart,
      <Link className={classes.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  if (!cart.line_items) return "Loading";

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} lg={6} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4" style={{ color: "#ECB365" }}>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            style={{ backgroundColor: "#632626", color: "#fff" }}
            onClick={onEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            style={{ backgroundColor: "#126E82", color: "#fff" }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className={classes.toolbar} />
      {cart ? null : (
        <Typography style={{ color: "#fff" }}>Loading....</Typography>
      )}
      <Container>
        <CssBaseline />
        <Typography className={classes.title} variant="h4" gutterBottom>
          Your Shopping Cart
        </Typography>

        {!cart.line_items.length ? renderEmptyCart() : renderCart()}
      </Container>
    </>
  );
};

export default Cart;
