import "../styles/add-booking.css"

const AddBooking = () => {
    return (
        <div className="form-container mb-3">
            <h3>Добавить запись</h3>
            <form>
                <div className="mb-1">
                    <label className="form-label">Имя клиента</label>
                    <input type="text" className="form-control" placeholder="Введите имя" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Процедура</label>
                    <input type="text" className="form-control" placeholder="Введите процедуру" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Время</label>
                    <input type="time" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Телефон</label>
                    <input type="text" className="form-control" placeholder="Введите номер телефона" />
                </div>
                <button type="submit" className="btn btn-primary">Добавить запись</button>
            </form>
        </div>
    );
};

export default AddBooking;
