import { useState } from "react";
import "./profile.css";
import { Navigate } from "react-router";

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [worksAt, setWorksAt] = useState("");
  const [livesIn, setLivesIn] = useState("");
  const [institution, setInstitution] = useState("");
  const [role, setRole] = useState("");
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }

  let latitude;
  let longitude;
  function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1 className="pf-title">Profile Page</h1>
      <form onSubmit={handleFormSubmit} className="user-profile-form">
        <div className="App">
          <h2>Add Image:</h2>
          <input type="file" onChange={handleChange} />
          <img className="prof_img" src={file} />
        </div>
        <div>
          <label>User Name</label>
          <input
            className="pf"
            type="text"
            value={profilePicture}
            onChange={(event) => setProfilePicture(event.target.value)}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            className="pf"
            type="text"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            className="pf"
            type="text"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            className="pf"
            type="text"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div>
          <label>Works At:</label>
          <input
            className="pf"
            type="text"
            value={worksAt}
            onChange={(event) => setWorksAt(event.target.value)}
          />
        </div>
        <div>
          <label>Lives In:</label>
          <input
            className="pf"
            type="text"
            value={livesIn}
            onChange={(event) => setLivesIn(event.target.value)}
          />
        </div>
        <div>
          <label>Student of:</label>
          <input
            className="pf"
            type="text"
            value={institution}
            onChange={(event) => setInstitution(event.target.value)}
          />
        </div>
        <div>
          <label>Role:</label>
          <select
            className="pf"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <option value="">Select a role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        <button type="submit" className="prof-btn">
          Save
        </button>
      </form>
    </>
  );
};

export default Profile;

