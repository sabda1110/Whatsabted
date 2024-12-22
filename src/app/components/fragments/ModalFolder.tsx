'use client';

import { Box, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledBox = styled(Box)`
  // background-color: ${(props) => props.theme.palette.primary.main};
  background-color: ${(props) => props.theme.palette.background.default};
  color: white;
  padding: 36px 40px;
  border-radius: 10px;
  outline: none;
  box-shadow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* tablet (sm) */
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 50%;
    // background-color: blue;
  }

  /* desktop (md) */
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 50%;
    // background-color: green;
  }

  /* large desktop (lg) */
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 60%;
    // background-color: red;
  }
`;

const ModalFolder: React.FC<ModalFolderProps> = (props) => {
  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center items-center p-4 md:p-8 lg:p-12"
    >
      <StyledBox>{props.children}</StyledBox>
    </Modal>
  );
};

export default ModalFolder;
