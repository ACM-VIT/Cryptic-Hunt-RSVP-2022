import { useEffect, useState } from "react";
import { auth } from "../../services/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import "./Form.css";

const getToken = async () => {
  return await auth.currentUser.getIdToken();
};

const Form = ({ count }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  // const [token, setToken] = useState()
  const [users, setUsers] = useState(
    new Array(count).fill({
      ...{
        name: "",
        email: "",
        number: "",
        gender: "",
        isVit: false,
        college: "",
        reg: "",
        isUser: false,
        id: "",
      },
    }),
  );

  const [currentView, setCurrentView] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();

    const emailRegEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegEx = /^\+[1-9]{1}[0-9]{3,14}$/;
    const regNoRegEx = /^(([0-2]{1}[0-3]{1}[A-Z]{3}[0-9]{4}))$/;

    if (
      users[currentView].name.trim() === "" ||
      users[currentView].email.trim() === "" ||
      users[currentView].number.trim() === ""
    ) {
      toast.error("Fill all the fields!");
    } else if (
      users[currentView].isVit === false &&
      users[currentView].college.trim() === ""
    ) {
      toast.error("Fill all the fields!");
    } else if (
      users[currentView].isVit === true &&
      users[currentView].reg.trim() === ""
    ) {
      toast.error("Fill all the fields!");
    } else if (
      users[currentView].isUser === true &&
      users[currentView].id.trim() === ""
    ) {
      toast.error("Fill all the fields!");
    } else if (emailRegEx.test(users[currentView].email.trim()) === false) {
      toast.error("Incorrect format for email!");
    } else if (users[currentView].gender === "") {
      toast.error("Please select a gender");
    } else if (phoneRegEx.test(users[currentView].number) === false) {
      toast.error("Invalid phone number!");
    } else if (
      users[currentView].isVit === true &&
      regNoRegEx.test(users[currentView].reg.trim()) === false
    ) {
      toast.error("Invalid registration number!");
    } else if (currentView + 1 == users.length) {
      asyncFn();
      notifySubmit();
    } else {
      notifySuccess();
      if (currentView + 1 < users.length) {
        setCurrentView(currentView + 1);
      }
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentView - 1 > -1) {
      setCurrentView(currentView - 1);
    }
  };

  const notifySuccess = () => toast.success("Details saved successfully!");
  const notifySubmit = () => toast("Your form is being submitted...");

  const onChange = (e) => {
    const currUsers = [...users.map((v) => ({ ...v }))];
    console.log(currUsers);
    if (e.target.name === "isVit" || e.target.name === "isUser") {
      currUsers[currentView][e.target.name] = e.target.checked;
    } else {
      currUsers[currentView][e.target.name] = e.target.value;
    }
    setUsers(currUsers);
  };

  const asyncFn = async () => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const token = await getToken();
    const body = JSON.stringify({
      data: users.map((v) => ({
        email: v.email,
        regno: v.reg ?? null,
        name: v.name,
        mobile: v.number,
        gender: v.gender,
        college: v.isVit == true ? "VIT Vellore" : v.college,
        appleId: v.isUser == true ? v.id : null,
      })),
    });
    const res = await fetch(`${BACKEND_URL}/verify/whitelist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      mode: "cors",
      credentials: "include",
      body: body,
    })
      .then((response) => {
        if (response.status == 403) {
          toast.error("Form already submitted!");
        } else if (response.status == 200) {
          toast.success("Form submitted successfully!");
          navigate(`/`);
        }
        response.json();
      })
      .catch((err) => {
        toast.error(err.message);
      });
    setLoading(false);
  };

  return (
    <div className="main-container">
      {/* <pre>
        <code>{JSON.stringify(users, null, 2)}</code>
      </pre> */}
      <div className="main-heading">Check In!</div>
      {currentView === 0 ? (
        <div className="sub-heading">Your Details</div>
      ) : (
        <div className="sub-heading">
          You have paid for <span className="text-[#FF7A01]">{count - 1}</span>{" "}
          more people
        </div>
      )}
      {currentView === 0 ? (
        <div>
          Enter the correct details
          <br />
          (same as your graVITas’23 account){" "}
        </div>
      ) : (
        <div>Enter the details for everyone you’ve paid for</div>
      )}
      <form className="checkin-form">
        <label>Full Name: </label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={users[currentView].name}
          onChange={onChange}
        />
        <br />
        <label>
          {currentView === 0
            ? "Email used for registration:"
            : "Enter particpant's Email"}
        </label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={users[currentView].email}
          onChange={onChange}
        />
        <br />
        <label>Phone Number(with country code): </label>
        <br />
        <input
          type="tel"
          name="number"
          placeholder="+XX XXXXXXXXXX"
          value={users[currentView].number}
          onChange={onChange}
        />
        <br />
        <label>Gender</label>
        <br />
        <select
          name="gender"
          onChange={onChange}
          value={users[currentView].gender}
        >
          <option value="" disabled selected>
            Choose a gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <input
          type="checkbox"
          name="isVit"
          id="cb"
          checked={users[currentView].isVit}
          onChange={onChange}
        />
        <label> Do you study in VIT Vellore: </label>
        <br />
        {users[currentView].isVit ? (
          <>
            <label>Registration Number: </label>
            <br />
            <input
              type="text"
              pattern="[0-2]{2}[A-Z]{3}[0-9]{4}"
              placeholder="XXYYYXXXX"
              name="reg"
              value={users[currentView].reg}
              onChange={onChange}
            />
            <br />
          </>
        ) : (
          <>
            <label>College Name: </label>
            <br />
            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={users[currentView].college}
              onChange={onChange}
            />
            <br />
          </>
        )}
        <input
          type="checkbox"
          name="isUser"
          id="cb"
          checked={users[currentView].isUser}
          onChange={onChange}
        />
        <label> Are you an iPhone user? </label>
        <br />
        {users[currentView].isUser ? (
          <>
            <label>Apple ID: </label>
            <input
              type="text"
              name="id"
              placeholder="Apple ID"
              value={users[currentView].id}
              onChange={onChange}
            />
            <br />
          </>
        ) : null}
        <br />
        <div className="buttons">
          {currentView === 0 ? null : (
            <button onClick={handlePrevious}>Previous</button>
          )}
          <button onClick={handleNext}>
            {currentView === users.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
