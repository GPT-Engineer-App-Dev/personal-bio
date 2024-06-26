import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm.jsx";
import { Container, Heading, VStack } from "@chakra-ui/react";

const stripePromise = loadStripe("your-publishable-key-here");

const Payment = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Payment
        </Heading>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </VStack>
    </Container>
  );
};

export default Payment;