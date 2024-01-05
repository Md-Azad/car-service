import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { title,price,_id,img } = service;
  
  const {user} = useContext(AuthContext);
 

  const handleCheckOut=event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const due = price;
    const order ={
      CustomarName:name,
      date,
      email,
      img,
      price: due,
      service_id:_id,
      service_name: title

    }
    // console.log(order);
    fetch('https://car-service-server-ruddy.vercel.app/booking',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your booking is saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
  
  return (
    <div>
      <h1 className="text-3xl text-center">Service: <span className="text-orange-700 font-semibold">{title}</span> </h1>

      <form onSubmit={handleCheckOut} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="due"
              defaultValue={`$${price}`}
              
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Order Now" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
