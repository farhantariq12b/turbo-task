import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const UserProfile: React.FC = () => {
  const { user, logout } = useAuth0();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const logoutUser = async () => {
    await logout();
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const PROFILE_MENU_ITEMS = [{ label: "Logout", onClick: logoutUser }];

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Divider />
      <Box padding="32px 40px" display="flex" alignItems={"center"}>
        <Avatar
          alt={user?.nickname}
          sx={{ marginLeft: "0 !important" }}
          src={user?.picture}
        />
        <Box marginLeft="14px">
          <Typography variant="body2" color="black">
            {user?.name}
          </Typography>
          <Typography variant="overline" lineHeight="1.5" color="textSecondary">
            {"Admin"}
          </Typography>
        </Box>
        <Box marginLeft={"auto"}>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={Boolean(anchorEl) ? "long-menu" : undefined}
            aria-expanded={Boolean(anchorEl) ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <MoreHorizIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {PROFILE_MENU_ITEMS.map((item, index) => (
              <MenuItem key={index} onClick={item.onClick}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </div>
  );
};

export default UserProfile;
