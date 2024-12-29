
import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone } 
	from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } 
	from '@fortawesome/free-brands-svg-icons'; 
// import Breadcrumbs from './Breadcrumbs'; 
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
				collaboration or inquiries. 
			</p> 
			
		</section> 
	); 
}; 

export default Contact;