import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div className="overflow-x-auto">
        <h1 className="text-2xl text-red-700">Bookings: {bookings.length}</h1>
      <table className="table">
    
        <thead>
          <tr>
            <th>Picture</th>
            <th>Service</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingRow key={booking._id} booking={booking}></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
