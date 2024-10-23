import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const BookingCalendar = ({ setSelectedDate, selectedDate}) => {

    return (
        <div className="calendar-container mb-4">
            <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
            />
        </div>
    );
}

export default BookingCalendar;