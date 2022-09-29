import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../../services/firebase";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";
import Form from "./Form";

const getToken = async () => {
  return await auth.currentUser.getIdToken();
};

const FormWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

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
      setLoading(false);
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        setData(json);
      }
    };
    asyncFn();
  }, []);

  return (
    <div className="main-container">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : data === null ? (
        <>{`Error`}</>
      ) : (
        <>
          <Form count={Number(data.paidFor)} />{" "}
        </>
      )}
    </div>
  );
};
export default FormWrapper;
