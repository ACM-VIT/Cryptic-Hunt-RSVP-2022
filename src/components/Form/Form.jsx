import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../../services/firebase";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";

const getToken = async () => {
  return await auth.currentUser.getIdToken();
};

const Form = ({ count = 4 }) => {
  const [loading, setLoading] = useState(true);
  // const [token, setToken] = useState()
  const [users, setUsers] = useState(
    new Array(count).fill({
      ...{
        name: "",
        email: "",
        number: "",
        isVit: false,
        college: "",
        reg: "",
        isUser: false,
        id: "",
      },
    })
  );

  const [currentView, setCurrentView] = useState(0);
  useEffect(() => {
    const asyncFn = async () => {
      const BACKEND_URL = `https://crypticstaging.acmvit.in`;
      const token = await getToken();
      const res = await fetch(`${BACKEND_URL}/verify/getDetails`, {
        headers: {
          method: "GET",
          authorization: `Bearer ${token}`,
        },
        mode: "cors",
        credentials: "include",
      });
      if (res.ok) {
        const json = await res.json();
        console.log(json);
      }
    };
    asyncFn();
  }, []);

  const handleNext = (e) => {
    e.preventDefault();

    const emailRegEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegEx = /^\+[1-9]{1}[0-9]{3,14}$/;
    const regNoRegEx = /^(([0-2]{2}[A-Z]{3}[0-9]{4}))$/;

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
    } else if (phoneRegEx.test(users[currentView].number) === false) {
      toast.error("Invalid phone number!");
    } else if (
      users[currentView].isVit === true &&
      regNoRegEx.test(users[currentView].reg.trim()) === false
    ) {
      toast.error("Invalid registration number!");
    } else if (currentView + 1 == users.length) {
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
  const notifySubmit = () => toast.success("Form submitted successfully!");

  const onChange = (e) => {
    const currUsers = [...users.map((v) => ({ ...v }))];
    if (e.target.name === "isVit" || e.target.name === "isUser") {
      currUsers[currentView][e.target.name] = e.target.checked;
    } else {
      currUsers[currentView][e.target.name] = e.target.value;
    }
    setUsers(currUsers);
  };

  return (
    <div className="main-container">
      <div className="main-heading">Check In!</div>
      {currentView === 0 ? (
        <div className="sub-heading">Your Details</div>
      ) : (
        <div className="sub-heading">
          You have paid for <span className="text-[#FF7A01]">${}</span> people
        </div>
      )}
      {currentView === 0 ? (
        <div>
          Enter the correct details
          <br />
          (same as your graVITas’22 account){" "}
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
          value={users[currentView].name}
          onChange={onChange}
        />
        <br />
        <label>Email used for registration: </label>
        <br />
        <input
          type="email"
          name="email"
          value={users[currentView].email}
          onChange={onChange}
        />
        <br />
        <label>Phone Number(with country code): </label>
        <br />
        <input
          type="tel"
          name="number"
          value={users[currentView].number}
          onChange={onChange}
        />
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
