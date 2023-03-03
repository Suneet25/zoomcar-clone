import { Box, Button, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

const DateTime = () => {
  const navigate = useNavigate();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const handleSelect = (date) => {
    let startDate = String(state[0].startDate);
    let endDate = String(state[0].endDate);
    let startingDate = "";
    let endingdDate = "";
    for (let i = 0; i < 16; i++) {
      startingDate += startDate[i];
      endingdDate += endDate[i];
    }
    localStorage.setItem("firstDay", JSON.stringify(startingDate));
    localStorage.setItem("lastDay", JSON.stringify(endingdDate));

    navigate("/");
  };

  return (
    <Container>
      <Box height={"100vh"} backgroundColor="white" color={"black"}>
        <DateRangePicker
          onChange={(e) => setState([e.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={state}
          direction="horizontal"
          preventSnapRefocus={true}
          calendarFocus="backwards"
        />
        <Box>
          <Button backgroundColor="#e0e0e0" onClick={() => handleSelect(state)}>
            Done
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default DateTime;
