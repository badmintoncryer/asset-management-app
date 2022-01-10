import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import Chart from './Chart'
import TotalAssets from './TotalAssets'
import { getTime } from 'api/api'

const Home: React.FC = () => {
  const [time, setTime] = useState<string>()

  useEffect(() => {
    const _getTime = async () => {
      const res = await getTime()
      setTime(res.cur_date)
    }

    _getTime()
  }, [])

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <TotalAssets />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <div className="App">
        <header className="App-header">
          <p>Update Time: {time}</p>
        </header>
      </div>
    </div>
  )
}

export default Home
