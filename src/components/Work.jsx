import { useState } from "react"
import ToggleButton from "./ToggleButton"
import '../styles/Work.css'


export default function Work() {
    const [isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
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
      <div className="work--container">
        <form className="work-form--container">
          <fieldset>
            <legend>Work experience</legend>
            <label htmlFor="company">Company:</label>
            <input
              id="company"
              value={formData.company}
              onChange={handleChange}
              name="company"
            />
            <label htmlFor="position">Position:</label>
            <input
              id="position"
              value={formData.position}
              onChange={handleChange}
              name="position"
            />
            <label htmlFor="location">Location:</label>
            <input
              id="location"
              value={formData.location}
              onChange={handleChange}
              name="location"
            />
            <label htmlFor="startDate">Start:</label>
            <input
              id="startDate"
              value={formData.startDate}
              onChange={handleChange}
              name="startDate"
            />
            <label htmlFor="endDate">End:</label>
            <input
              id="endDate"
              value={formData.endDate}
              onChange={handleChange}
              name="endDate"
            />
            <textarea
              name="description"
              id="description"
              cols="65"
              rows="5"
              maxLength={300}
              placeholder="Job description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>

            <ToggleButton isVisible={isVisible} handleToggle={handleToggle} />
          </fieldset>
        </form>

        {isVisible && (
          <div className="rendered-work--container">
            <div className="index-box">
              <h1>Work experience</h1>
            </div>
            <h2>{formData.position}</h2>
            <div className="line"></div>
            <div className="company-box">
              <p>
                Company name: <span></span>
                <strong>{formData.company}</strong>
              </p>
              <p>
                Location: <span></span>
                {formData.location}
              </p>
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
                  <strong>End: </strong>
                  <span></span>
                  {formData.endDate}
                </p>
              )}
            </div>
            <div className="description-box">
              <p className="index">Brief description of my work:</p>
              <p className="work-description">{formData.description}</p>
            </div>
          </div>
        )}
      </div>
    );
}