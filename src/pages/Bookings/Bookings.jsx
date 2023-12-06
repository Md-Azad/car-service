import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDeleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                const remainig = bookings.filter(book=>book._id!==id);
                setBookings(remainig);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleBookingConfirm = id=>{
    fetch(`http://localhost:5000/booking/${id}`,{
        method: 'PATCH',
        headers:{
            'content-type':'application/json',
        },
        body: JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
            const remainigBooking = bookings.filter(booking =>booking._id!==id);
            const updatedBooking = bookings.find(booking =>booking._id ===id);
            updatedBooking.status = 'confirm'
            const newBookings =[updatedBooking, ...remainigBooking];
            setBookings(newBookings)
        }
    })
  }

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
            <BookingRow key={booking._id} booking={booking} handleDeleteBooking={handleDeleteBooking} handleBookingConfirm={handleBookingConfirm}></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
