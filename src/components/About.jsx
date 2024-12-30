
import React from 'react';
import { FontAwesomeIcon }
	from '@fortawesome/react-fontawesome';
import { faUser }
	from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const About = () => {
	return (
		<section id="about"
			className="container text-center">
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<h2 className="section-title">
						<FontAwesomeIcon icon={faUser}
							className="mr-2" />
						About Me
					</h2>
					<div className="profile-image-container">

						<img src="user.jpg"
							alt="user pic"
							className="img-fluid rounded-circle profile-image" />
					</div>
					<p className="section-description mt-4">
					Hi, I'm <big><b>Utkarsh Kumar Singh</b></big>, a passionate web developer with a strong foundation in both frontend and backend development. I specialize in creating clean, responsive, and user-friendly websites and applications that deliver seamless user experiences. My skill set includes HTML, CSS, JavaScript, React, Node.js, and other modern web technologies.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
