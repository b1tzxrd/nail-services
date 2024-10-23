import BookingListItem from "./BookingListItem";

const BookingList = ({ date }) => {
    return (
        <div className="col-md-6">
            <h3>Активные записи на {date}</h3>
            <BookingListItem />
        </div>
    )
}

export default BookingList;