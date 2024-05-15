import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export function Loading(props) {
  return (
    <Box sx={{ width: '100%' }} {...props}>
      <LinearProgress />
    </Box>
  );
}