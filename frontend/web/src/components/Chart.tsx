import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts'
import Title from './Title'

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount }
}

const data = [
  createData('2021/01/01', 0),
  createData('2021/02/01', 300),
  createData('2021/03/01', 600),
  createData('2021/04/01', 800),
  createData('2021/05/01', 1500),
  createData('2021/06/01', 2000),
  createData('2021/07/01', 2400),
  createData('2021/08/01', 2400),
  createData('2021/09/01', undefined),
]

export default function Chart() {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Title>総資産額推移</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              総資産額 ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
