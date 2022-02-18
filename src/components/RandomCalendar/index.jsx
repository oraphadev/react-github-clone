import React from 'react';
import HeatMap from 'react-calendar-heatmap';
import {
  subYears,
  isBefore,
  isSameDay,
  addDays,
} from 'date-fns';

import { Container } from './styles';

function generateHeatmapValues(startDate, endDate) {
  const values = [];
  let currentDate = startDate;

  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4;

    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1);
  }

  return values;
}

function RandomCalendar() {
  const endDate = new Date();
  const startDate = subYears(endDate, 1);

  return (
    <Container>
      <div className="wrapper">
        <HeatMap
          classForValue={(item) => {
            let clampedCount = 0;

            if (item !== null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            }

            return `scale-${clampedCount}`;
          }}
          endDate={endDate}
          gutterSize={3.5}
          showWeekdayLabels
          startDate={startDate}
          values={generateHeatmapValues(startDate, endDate)}
        />
      </div>

      <span>
        Random calendar (do not represent actual data)
      </span>
    </Container>
  );
}

export default RandomCalendar;
