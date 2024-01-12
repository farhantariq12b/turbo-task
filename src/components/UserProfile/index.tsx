import React, { useState } from 'react';
import { Avatar, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useAuth0 } from '@auth0/auth0-react';
import { StyledUserProfile } from './userProfile.style';
import { useNavigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const { user } = useAuth0();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.setItem('user_id', '')
    navigate('/login')
  }

  const PROFILE_MENU_ITEMS = [
    { label: 'Logout', onClick: logoutUser },
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Divider />
      <StyledUserProfile>
        <Avatar alt={user?.nickname} sx={{ marginLeft: '0 !important' }} src={user?.picture} />
        <div>
          <Typography variant="body2" color="black">{user?.name}</Typography>
          <Typography variant="overline" lineHeight="1.5" color="textSecondary">{'Admin'}</Typography>
        </div>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={Boolean(anchorEl) ? 'long-menu' : undefined}
            aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
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
        </div>
      </StyledUserProfile>
    </div>
  );
};

export default UserProfile;
