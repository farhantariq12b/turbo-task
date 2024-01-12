import styled from "styled-components";

export const StyledUserProfile = styled('div')({
  padding: '32px 40px',
  display: 'flex',
  alignItems: 'center',

  '& > div': {
    marginLeft: '14px',
  },

  '& > div:last-child': {
    marginLeft: 'auto',
  },
});