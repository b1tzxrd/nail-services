import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './styles/app.css';
import BookingList from './components/BookingList';
import AddBooking from './components/AddBooking';
import BookingCalendar from './components/BookingsCalendar';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <BookingCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
          <AddBooking/>
        </div>
        <BookingList date={selectedDate.toLocaleDateString()}/>
      </div>
    </div>
  );
};


export default App;
