import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Box
      display="flex"
      padding="24px 32px"
      justifyContent="space-between"
      borderBottom="1px solid #F1F3F5"
    >
      <Box display="flex" alignItems="center">
        <Typography
          variant="h2"
          color="#2B579A"
          fontStyle="italic"
          fontWeight="500"
          sx={{
            '> a': {
              textDecoration: 'none'
            }
          }}
        >
          <Link to="/deliverables">µDocx</Link>
        </Typography>
        <Typography variant="body1" color="#212529" marginLeft="32px">
          Create Deliverable
        </Typography>
      </Box>
      <Box padding="32px 0px" display="flex" alignItems="center">
        <Typography variant="body2" color="#212529">
          Need Help?
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
