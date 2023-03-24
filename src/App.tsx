import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddIcon from '@mui/icons-material/Add';
import AlarmIcon from '@mui/icons-material/Alarm';
import './App.css';
import Timer from './components/Timer';
import { Button, Stack } from '@mui/material';

const App: React.FC = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const increment = (): void => {
    setTime((c) => c + 1);
  };

  const startTimer = (): void => {
    setRunning(!running);
  };

  return (
    <div className="App">
      <Card sx={{ minWidth: 500, minHeight: 600, maxHeight: 600 }}>
        <CardContent>
          <h1>CoteFácil</h1>
          <Timer time={time} running={running} setTime={setTime}></Timer>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              disabled={running}
              onClick={increment}
              variant="contained"
              startIcon={<AddIcon />}
            >
              Adicionar
            </Button>
            <Button
              disabled={time === 0}
              onClick={startTimer}
              variant="contained"
              startIcon={<AlarmIcon />}
            >
              {running ? `Parar` : `Cronometro`}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
