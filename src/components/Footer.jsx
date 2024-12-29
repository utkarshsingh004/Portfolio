import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faTwitter, faFacebook, faTelegram, faInstagram } 
	from '@fortawesome/free-brands-svg-icons'; 
    import '../App.css'; // Import your custom CSS file 

const Footer = () => { 
return ( 
	<footer className="footer"> 
	<div className="container"> 
		<div className="row"> 
		<div className="col-md-6"> 
			<p>© 2024 Utkarsh Kumar Singh. All rights reserved.</p> 
		</div> 
		<div className="col-md-6 text-md-right"> 
			<ul className="social-icons list-unstyled"> 
			<li> 
				<a 
href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}> 
				<FontAwesomeIcon icon={faLinkedin} /> 
				</a> 
			</li> 
			<li> 
				<a href= 
"https://github.com/utkarshsingh004" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}> 
				<FontAwesomeIcon icon={faGithub} /> 
				</a> 
			</li> 
			<li> 
				<a href= 
"https://https://www.facebook.com/profile.php?id=61571308679581" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}> 
				<FontAwesomeIcon icon={faFacebook} /> 
				</a>
			</li> 
			<li> 
				<a href= 
"https://x.com/_uksingh004" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}> 
				<FontAwesomeIcon icon={faTwitter} / > 
				</a>
			</li> 
			<li> 
				<a href= 
"https://www.instagram.com/_uksingh004/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}> 
				<FontAwesomeIcon icon={faInstagram} /> 
				</a>
			</li> 
			</ul> 
		</div> 
		</div> 
	</div> 
	</footer> 
); 
}; 

export default Footer;