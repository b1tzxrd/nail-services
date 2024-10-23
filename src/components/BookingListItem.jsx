import '../styles/booking-list.css'


const BookingListItem = () => {

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Имя клиента</h5>
                <p className="card-text"><strong>Процедура:</strong> Название процедуры</p>
                <p className="card-text"><strong>Время:</strong> 14:30</p>
                <p className="card-text"><strong>Телефон:</strong> +1234567890</p>
                <button className="btn btn-danger">Отменить запись</button>
            </div>
        </div>
    );

}

export default BookingListItem;