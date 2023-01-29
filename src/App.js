import React, { useState } from "react";
import "./App.css";
import ShowList from "./ShowList";
import bookSeats from "./BookSeat";
import { bookedSeats } from "./BookSeat";

const App = () => {
	console.log(bookedSeats);
	const availableSeats = 80 - bookedSeats.size;
	console.log(80 - bookedSeats);

	const [seats, setSeats] = useState("");
	const [error, setError] = useState("");
	const handleSubmit = () => {
		if (!seats) return setError("please enter number of seats");
		if (seats <= 0) return setError("seat number can not be negative or zero");
		if (seats > 7) return setError("seat number can not be grater than 7");
		
		if (seats > availableSeats)
			return setError("value exceeds availbale seats");
		bookSeats(Number(seats));
		setError("");
		setSeats("");
	};
	return (
    <div className="App">
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
				<button onClick={handleSubmit}>Book Ticket</button>
				<div className="indentify">
				<div className="available"></div>
				<p>Available Seats</p>
				<div className="bookedSeat"></div>
				<p>Booked Seats</p>
				</div>
				
			</div>
			<div className="hr"></div>
			<div>
			<h1>Seats</h1>
			<ShowList />
			</div>
			
		</div>
    </div>
	);
};

export default App;
