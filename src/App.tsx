import { FC } from 'react';
import Calendar from './components/calendar';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const someDate = new Date();

  return (
    <div>
      <Calendar date={someDate}></Calendar>
    </div>
  );
};
