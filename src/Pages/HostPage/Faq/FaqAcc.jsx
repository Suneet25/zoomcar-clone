import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

const FaqAccordian = ({ item }) => {
  const { que, ans } = item;
  return (
    <Box width="100%">
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {que}
              </Box>
              <AccordionIcon color="rgb(16,163,16)" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{ans}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FaqAccordian;
