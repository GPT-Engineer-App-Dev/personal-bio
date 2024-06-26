import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Box, Button, FormControl, FormLabel, VStack, Text } from "@chakra-ui/react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setError(null);
      setSuccess(true);
      setLoading(false);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth={1} borderRadius="md">
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Card Details</FormLabel>
          <CardElement />
        </FormControl>
        {error && <Text color="red.500">{error}</Text>}
        {success && <Text color="green.500">Payment successful!</Text>}
        <Button type="submit" colorScheme="blue" isLoading={loading} isDisabled={!stripe}>
          Pay
        </Button>
      </VStack>
    </Box>
  );
};

export default CheckoutForm;