import React, { useEffect, useState } from 'react';

interface CalendarProps {
  date: Date;
}

function Calendar({ date = new Date() }: CalendarProps) {
  useEffect(() => {
    setCalendar();
    getFirstDayOfMonth(date);
  }, []);

  const setCalendar = () => {
    const d = new Date(date);
    const days = daysInMonth(d.getMonth(), d.getFullYear());
    const t = [];
    for (let i = 1; i < days + 1; i++) {
      t.push(i);
    }
    for (let i = 1; i < getFirstDayOfMonth(d) + 1; i++) {
      t.unshift(0);
    }
    setDaysOfMonth(t);
    securrentDate(d.getDate());
  };

  const getFirstDayOfMonth = (d: Date) => {
    const t = new Date(d);
    t.setDate(1);
    return t.getDay();
  };

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const [daysOfMonth, setDaysOfMonth] = useState<number[]>([]);
  const [currentDate, securrentDate] = useState<number>(0);

  return (
    <div className="calendar">
      <div className="header">
        {date.toLocaleString('default', { month: 'long' }) + ' '}
        {date.getFullYear()}
      </div>
      <div className="days">
        <div className="day-heading">Sun</div>
        <div className="day-heading">Mon</div>
        <div className="day-heading">Tue</div>
        <div className="day-heading">Wed</div>
        <div className="day-heading">Thu</div>
        <div className="day-heading">Fri</div>
        <div className="day-heading">Sat</div>
      </div>
      <div className="week">
        {daysOfMonth.length > 0
          ? daysOfMonth.map((e, index) => {
              return (
                <div
                  className={'day ' + (currentDate === e ? 'active' : '')}
                  key={index}
                >
                  {e === 0 ? '' : e}
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
}

export default Calendar;
