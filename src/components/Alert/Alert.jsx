import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const CustomAlerts = ({ type, title, message, duration = 5000 ,status}) => {
  const [visible, setVisible] = useState(status);

  const closeAlert = () => {
    setVisible(false);
  };

  useEffect(() => {
    setVisible(status)
    const timeoutId = setTimeout(() => {
      closeAlert();
    }, duration);

    // Cleanup the timeout on component unmount or if the alert is closed manually
    return () => clearTimeout(timeoutId);
  }, [status]); // No dependencies here

  return visible ? (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: '300px',
        margin: '10px',
      }}
    >
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={type} variant="filled" onClose={closeAlert}>
          <AlertTitle>{title}</AlertTitle>
          {message} — <strong>check it out!</strong>
        </Alert>
      </Stack>
    </div>
  ) : null;
};

export default CustomAlerts;
