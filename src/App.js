import React, {useState, useEffect} from 'react';
import './Components/timer.css';

import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import { FiMinus, FiPlus } from "react-icons/fi";

const Timer = () =>{

	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(25);
	const [isActive, setIsActive] = useState(false);
	function toggle() {
		setIsActive(!isActive);
	  }
	  function increase(){
		setMinutes(minutes + 1);
	  }
	  function decrease(){
		setMinutes(minutes - 1);
	  }
	  function reset() {
		setSeconds(0);
		setMinutes(25);
		setIsActive(false);
	  }
	var timer;
	useEffect(() => {
		if(isActive){
		timer = setInterval(() => {
			setSeconds(seconds - 1);
			if(seconds === 0){
				setMinutes(minutes - 1);
				setSeconds(59);
			}
		}, 1000);
		}
		else if(!isActive && seconds !== 0){
			clearInterval(timer);
		}
		return() => clearInterval(timer);
	}, [isActive, seconds, minutes]);
	return(
		<>
			<div className='app'>
				<div className='addminus'>
					<p>Session Length</p>
					<button onClick={decrease} className="add"><FiMinus /></button>{minutes}
					<button onClick={increase}className="add"><FiPlus /></button>
				</div>
				<div className='time'>{minutes<10? "0"+ minutes: minutes}:{seconds<10 ? "0" + seconds: seconds}</div>
				<div className='row'>
				<button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>{<BsFillPlayFill/>}{<BsFillPauseFill/>}</button>
					
					<button className='button btn-secondary' onClick={reset}><GrPowerReset/></button>
				</div>
			</div>
		</>
	)
}
export default Timer;