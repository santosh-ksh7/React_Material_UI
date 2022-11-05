import { Box, Stack } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import Leftbar from './components/Leftbar';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={3} sx={{justifyContent: "space-between"}}>
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
