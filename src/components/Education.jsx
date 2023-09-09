import { useState } from "react";
import ToggleButton from "./ToggleButton";
import '../styles/Education.css';

export default function Education() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
      schoolName: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    })

    function handleChange(e) {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [e.target.name]: e.target.value
        }
      })
    }

    function handleToggle() {
        setIsVisible(!isVisible)
    }

    return (
      <div className="edu--container">
        <form className="edu-form--container">
          <fieldset>
            <legend>Education</legend>
            <label htmlFor="schoolName">School name:</label>
            <input
              id="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              name="schoolName"
            />
            <label htmlFor="degree">Degree:</label>
            <input
              id="degree"
              value={formData.degree}
              onChange={handleChange}
              name="degree"
            />
            <label htmlFor="startDate">Start date:</label>
            <input
              id="startDate"
              value={formData.startDate}
              onChange={handleChange}
              name="startDate"
            />
            <label htmlFor="endDate">End date:</label>
            <input
              id="endDate"
              value={formData.endDate}
              onChange={handleChange}
              name="endDate"
            />
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              value={formData.location}
              onChange={handleChange}
              name="location"
            />
            <ToggleButton isVisible={isVisible} handleToggle={handleToggle} />
          </fieldset>
        </form>

        {isVisible && (
          <div className="rendered-edu--container">
            <div className="index-box">
              <h1>Education</h1>
            </div>
            <h2>{formData.degree}</h2>
            <div className="line"></div>
            <div className="school-box">
              <p>
                School name: <span></span>
                <strong>{formData.schoolName}</strong>
              </p>
              <p>Location: {formData.location}</p>
            </div>
            <div className="date-box">
              <p>
                <strong>Start: </strong>
                <span></span>
                {formData.startDate}
              </p>

              {formData.endDate === "current" ? (
                <p>
                  <strong>Current</strong>
                </p>
              ) : (
                <p>
                  <strong>End: </strong> <span></span>
                  {formData.endDate}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    );
}