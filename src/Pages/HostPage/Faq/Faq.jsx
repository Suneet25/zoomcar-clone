import { Box, VStack, Text } from "@chakra-ui/react";
import React from "react";
import FaqAccordian from "./FaqAcc";

const faqData = [
  {
    id: "1",
    que: "Do I need to meet the renters of my car?",
    ans: "We have installed the keyless entry devices in your car, which makes sure that you need not meet any of the renters in person, either at the start, or at the end of any booking.",
  },
  {
    id: "2",
    que: "How will I get Paid?",
    ans: "Your total earnings will be credited to your bank account every week. You can access your detailed earnings through our Zoomcar Host app.",
  },
  {
    id: "3",
    que: "What happens if my car gets challans or traffic fines while my car is being shared?",
    ans: "Zoomcar will take care of all challans incurred during car sharing.",
  },
  {
    id: "4",
    que: "How much will I earn?",
    ans: "You will earn 60% of the booking revenue that your car earns on every booking. Your earnings will be paid to you on a weekly basis. ",
  },
  {
    id: "5",
    que: "How is the price of my car decided?",
    ans: "Our intelligent demand based pricing system optimizes the price of your car. We also send you suggestion for peak seasons to share your car. We ensure you get maximum earning while sharing the car.",
  },
  {
    id: "6",
    que: "Why are safety devices installed?",
    ans: "These are Zoomcar's proprietary tech devices. They are installed in the car to keep track of car health and location of your car. It keeps your car safe when shared with Guests.",
  },
];

const FAQ = () => {
  return (
    <Box width="80%" margin="auto">
      <VStack>
        <Box p="4" ml="10">
          <Text fontSize="4xl" fontWeight="bold" textAlign="left">
            Still Have Questions?
          </Text>
        </Box>
        <VStack maxWidth="60%">
          {faqData.map((elem) => (
            <FaqAccordian key={elem.id} item={elem} />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default FAQ;
