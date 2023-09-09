import { useState } from "react";
import ToggleButton from "./ToggleButton";
import '../styles/Bio.css'

export default function Bio() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: ''
    })
    const [file, setFile] = useState();

    function handleChange(e) {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [e.target.name]: e.target.value
        }
      })
    }

    function handleToggle() {
        setIsVisible(!isVisible);
    }

    function handleImageChange(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
      <div className="bio--container">
        <form className="bio-form--container">
          <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="firstName">First name:</label>
            <input
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
            />
            <label htmlFor="lastName">Last name:</label>
            <input
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <label htmlFor="phoneNumber">Phone number:</label>
            <input
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
            />
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              value={formData.address}
              onChange={handleChange}
              name="address"
            />

            <label htmlFor="image">Add image:</label>
            <input
              className="choose-image--btn"
              id="image"
              type="file"
              onChange={handleImageChange}
              name="image"
            />
            <ToggleButton isVisible={isVisible} handleToggle={handleToggle} />
          </fieldset>
        </form>

        {isVisible && (
          <div className="rendered-bio--container">
            <div className="index-box">
              <a href="https://github.com/alessandroforchin">
                <h1 className="complete-name">
                  {formData.firstName} {formData.lastName}
                </h1>
              </a>
            </div>
            <div className="rendered-info">
              <img src={file} alt="Image not found" />
              <ul className="contact-info">
                <li>E-mail: {formData.email}</li>
                <li>Phone number: (+39) <span></span>{formData.phoneNumber}</li>
                <li>Address: {formData.address}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
}
