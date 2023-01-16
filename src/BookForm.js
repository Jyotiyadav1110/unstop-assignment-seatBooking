import React, { useState } from "react";

import ShowList from "./ShowList";
import bookSeats from "./util/BookSeat";
import { bookedSeats } from "./util/BookSeat";


const BookForm = () => {
	const availableSeats = 80 - bookedSeats.size;
	const [seats, setSeats] = useState("");
	const [error, setError] = useState("");
	const handleSubmit = () => {
		
		if (!seats) return setError("please enter number of seats");
		if (seats <= 0) return setError("seat number can not be negative or zero");
		if (seats > 7) return setError("seat number can not be grater than 7");
		
		if (seats > availableSeats)
			return setError("value exceeds availbale seats");
		bookSeats(Number(seats));
		// let x = bookSeats(Number(seats));
		// console.log(x);
		// console.log(bookedSeats)
		setError("");
		setSeats("");
	};
	return (
		<div className="Container">
			<div className="form">
				<h1>Online Seat's Booking 🚆</h1>
				<p style={{fontSize:'20px'}}>Enter Number of Seats</p>
				<input
					type="number"
					value={seats}
					onChange={(e) => setSeats(e.target.value)}
					min="0"
				/>
				<small style={{color:'red', fontStyle:'italic'}}>{error}</small>
				<p>Available Seats : {availableSeats}</p>
				<button onClick={handleSubmit}>Book Ticket &nbsp;&rarr;</button>
				<div className="indentify">
				<div className="available"></div>
				<p>Available Seats</p>
				<div className="bookedSeat"></div>
				<p>Booked Seats</p>
				</div>
				
			</div>
			<div className="hr"></div>
			<div>
			
			<ShowList />
			</div>
			
		</div>
	);
};

export default BookForm;
