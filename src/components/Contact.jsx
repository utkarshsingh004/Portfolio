
import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faVoicemail, faPhone } 
	from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } 
	from '@fortawesome/free-brands-svg-icons'; 
import '../App.css'; 
import ContactPage from './ContactPage';

const Contact = () => { 
	// const breadcrumbsPaths = 
	// 	[ 
	// 		{ title: 'Home', to: '/' }, 
	// 		{ title: 'Contact', to: '/contact' } 
	// 	]; 

	return ( 
		<section id="contact" className="container"> 
			{/* <Breadcrumbs paths={breadcrumbsPaths} />  */}
			<h2 className="section-title">Contact</h2> 
		   <ContactPage/>
			<p className="section-description">
				Feel free to reach out for
				collaboration or inquiries:-
			</p> 
			<div className="personal-detail">	
			<p><FontAwesomeIcon icon={faPhone} /> Contact Number : (+91)9973546694</p>
			<p><FontAwesomeIcon icon={faVoicemail} /> Email : singhutkarshkumar097@gmail.com</p>
			</div>
		</section> 
	); 
}; 

export default Contact;
