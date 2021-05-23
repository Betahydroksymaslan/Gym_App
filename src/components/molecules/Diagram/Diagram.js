import React from 'react';
import PropTypes from 'prop-types';
import { StyledDiagram, StyledLabel, Average } from './Diagram.style';
import { AreaChart, Area, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Diagram = ({ data, minValue, maxValue }) => {
  const average = data?.length > 1 ? (((maxValue - 1) - (minValue + 1)) / (data.length - 1)).toFixed(1) : 0;

  return (
    <div>
      <StyledLabel>średnia</StyledLabel>
      <StyledDiagram>
        <Average>+{data?.length ? average : '0'} kg</Average>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 60,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EB5757" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#EB5757" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <YAxis type="number" hide={true} domain={[minValue, maxValue]} />
            <Area
              type="monotone"
              dataKey="weight"
              stroke="#C4686F"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </StyledDiagram>
    </div>
  );
};

Diagram.propTypes = {};

export default Diagram;
