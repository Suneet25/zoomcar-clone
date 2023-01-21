import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";

const Video = () => {
  return (
    <Box width="80%" margin="auto" mt="10">
      <AspectRatio ratio={12 / 6}>
        <iframe
          src="https://www.zoomcar.com/zap/subscribe/build/64440836bb2a2ee19961407349dece57.mp4"
          alt="demo"
          title="#"
        />
      </AspectRatio>
    </Box>
  );
};

export default Video;
