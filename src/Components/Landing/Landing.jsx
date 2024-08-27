import React from "react";
import back_img from "../../Images/blackLogo.png";
import classes from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
	const navigate = useNavigate();
	function ToLogIn() {
		navigate("./secondPage");
	}
	return (
		<div>
			<div className={classes.background}>
				<ul className={classes.ulupdate}>
					<li>
						<img src={back_img} alt="" />
					</li>

					<li>
						<button onClick={ToLogIn} className={classes.login_button}>
							Sign In
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LandingPage;
