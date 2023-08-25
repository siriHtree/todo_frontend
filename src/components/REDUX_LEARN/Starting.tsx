import React, { useState } from "react";
import "./app.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import ReservationCard from "./ReservationCard";
import { addReservation } from "../../app/features/reservationSlice";

function Starting() {
	const [reservationNameInput, setReservationInput] = useState("");
	const reservation = useSelector(
		(state: RootState) => state.reservations.value,
	);
	const dispatch = useDispatch();
	const handleAddReservations = () => {
		if (!reservationNameInput) {
			return;
		}
		dispatch(addReservation(reservationNameInput));
		setReservationInput("");
	};
	return (
		<div className="App">
			<div className="container">
				<div className="reservation-container">
					<div>
						<h5 className="reservation-header">Reservations</h5>
						<div className="reservation-cards-container">
							{reservation.map((name, i) => {
								return (
									<ReservationCard
										key={`lkdfjeihf${i}`}
										name={name}
										index={i}
									/>
								);
							})}
						</div>
					</div>
					<div className="reservation-input-container">
						<input
							value={reservationNameInput}
							onChange={(e) =>
								setReservationInput(e.target.value)
							}
						/>
						<button onClick={handleAddReservations}>Add</button>
					</div>
				</div>
				<div className="customer-food-container">
					<div className="customer-food-card-container">
						<p>Selena Gomez</p>
						<div className="customer-foods-container">
							<div className="customer-food"></div>
							<div className="customer-food-input-container">
								<input />
								<button>Add</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Starting;
