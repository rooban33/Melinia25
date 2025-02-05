import React, { useState, useEffect } from "react";
import TiltedCard from "./PrizePool";
import "./Timer.css";
import TimerImage from "../Assets/images/squid-game-piggy-bank-05-Photoroom.png";

const COUNTDOWN_TARGET = new Date("2025-03-07T09:00:00");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);
	return { days, hours, minutes, seconds };
};

const CountdownTimer = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (

		<div className='countdown'>
			<TiltedCard
				imageSrc={TimerImage} // Set TimerImage here
				altText="Timer Image"
				captionText=" "
				containerHeight="300px"
				containerWidth="300px"
				imageHeight="300px"
				imageWidth="300px"
				rotateAmplitude={12}
				scaleOnHover={1.2}
				showMobileWarning={false}
				showTooltip={false}
				displayOverlayContent={true}
				overlayContent={
					<div></div>
				}
			/>

			<h4 className="aboutFont ds-digib-text">
				PRIZE POOL : 70,000 RS
			</h4>
			<div className='content'>
				{Object.entries(timeLeft).map((el) => {
					const label = el[0];
					const value = el[1];
					return (
						<div className='box' key={label}>
							<div className='value'>
								<span>{value}</span>
							</div>
							<span className='label'> {label} </span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CountdownTimer;
