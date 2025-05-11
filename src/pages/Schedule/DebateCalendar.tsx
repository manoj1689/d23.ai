'use client';

import {
  useNextCalendarApp,
  ScheduleXCalendar,
} from '@schedule-x/react';
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import '@schedule-x/theme-default/dist/index.css';
import './sx-calender.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchMyScheduledDebates } from '@/store/slices/debateSlice';
import dayjs from 'dayjs';

interface CalendarAppProps {
  status: string;
}

function CalendarApp({ status }: CalendarAppProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { debates } = useSelector((state: RootState) => state.debate);
  const [eventsService] = useState(() => createEventsServicePlugin());

  const calendar = useNextCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [], // Initial empty array, will be updated
    plugins: [eventsService],
    callbacks: {},
  });

  // Fetch data when status changes
  useEffect(() => {
    if (status) {
      dispatch(fetchMyScheduledDebates({ status }));
    }
  }, [status, dispatch]);
console.log("debate lst",debates)
  // Update calendar events when debates change
  useEffect(() => {
    if (debates && debates.length > 0 && calendar) {
      const newEvents = debates.map((debate, index) => ({
        id: String(index + 1),
        title: debate.title,
        start: dayjs(debate.scheduled_start).format('YYYY-MM-DD HH:mm'),
        end: dayjs(debate.scheduled_end).format('YYYY-MM-DD HH:mm'),
      }));

      // Clear existing events first
      eventsService.getAll().forEach(event => {
        eventsService.remove(event.id); // Assuming remove method exists
      });

      // Add new events
      newEvents.forEach(event => {
        eventsService.add(event); // Assuming add method exists
      });
    } else if (calendar) {
      // Clear events if no debates
      eventsService.getAll().forEach(event => {
        eventsService.remove(event.id); // Assuming remove method exists
      });
    }
  }, [debates, calendar, eventsService]); // Trigger effect when debates or calendar changes

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default CalendarApp;
