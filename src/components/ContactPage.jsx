import React, { useState } from "react";

const ContactPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle form submission status
  const [status, setStatus] = useState(null);

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulate a form submission (this is where you'd handle backend logic)
    setTimeout(() => {
      setStatus("Message sent successfully!");
      // Optionally clear the form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className="contact-page">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write messege here"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>

        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default ContactPage;
