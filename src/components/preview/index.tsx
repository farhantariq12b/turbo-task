import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { Box, Typography } from "@mui/material";

const Preview: React.FC = () => {
  return (
    <Box
      padding="16px 32px"
      sx={{ background: "#F1F3F5" }}
      borderRadius="5px"
      boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.20)"
    >
      <Box
        sx={{
          ".rpv-core__page-layer": {
            width: "100% !important",
            height: "100% !important",
            ".rpv-core__canvas-layer": {
              width: "100% !important",
              height: "100% !important",
              canvas: {
                width: "100% !important",
                height: "100% !important",
              },
            },
            ".rpv-core__text-layer": {

            }
          },
        }}
      >
        <Typography
          variant="body2"
          fontSize="14px"
          color="#ADB5BD"
          fontWeight="400"
          textAlign="center"
          mb="16px"
        >
          Preview
        </Typography>

        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl={"/pdf/turbo-docs.pdf"} />
        </Worker>

        <Box mt="16px"></Box>
      </Box>
    </Box>
  );
};

export default Preview;
