import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import Review from "./Review";

const PaymentForm = ({
  checkoutToken,
  backStep,
  nextStep,
  onCaptureCheckout,
  shippingData,
  timeout,
  dummyData,
}) => {
  console.log();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const orderData = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: dummyData ? "xyz" : shippingData.firstName,
        lastname: dummyData ? "xyzz" : shippingData.lastName,
        email: dummyData ? "xyz@gmail.com" : shippingData.email,
      },
      shipping: {
        name: "International",
        street: dummyData ? "From xyz" : shippingData.address1,
        town_city: dummyData ? "From xyz" : shippingData.city,
        postal_zip_code: dummyData ? "46546" : shippingData.zip,
        county_state: shippingData.shippingSubdivision,
        country: shippingData.shippingCountry,
      },
      fulfillment: { shipping_method: shippingData.shippingOption },
      payment: {
        gateway: "test_gateway",
        card: {
          number: "4242 4242 4242 4242",
          expiry_month: "01",
          expiry_year: "2023",
          cvc: "123",
          postal_zip_code: "94103",
        },
      },
    };

    onCaptureCheckout(checkoutToken, orderData);
    nextStep();
    timeout();
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Typography>Card Number 42424242</Typography>
      <Typography>Expiry Date 06/26</Typography>
      <Typography>CVV 123</Typography>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <br /> <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" onClick={backStep}>
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Pay {checkoutToken.live.subtotal.formatted_with_symbol}
          </Button>
        </div>
      </form>
    </>
  );
};

export default PaymentForm;
