import "./style.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer";
function LeaveFeedback() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
  });
  const templateParams = {
    from_name: form.name,
    number: form.number,
    email: form.email,
  };
  function fireSetForm(e) {
    let key = e.target.name;
    let value = e.target.value;
    setForm({ ...form, [key]: value });
  }
  function submit(e) {
    e.preventDefault();
    emailjs
      .send(
        "service_mtmxw1b",
        "template_s9xgohg",
        templateParams,
        "7bgDfbj4TV1F0RSOv"
      )
      .then(
        (response) => {
          //   console.log("SUCCESS!", response.status, response.text);
          toast.success("SUCCESS!", {
            theme: "dark",
          });
        },
        (err) => {
          toast.error("ERROR",{
            theme:"dark"
          })
        }
      );
  }
  return (
    <>
      <div className="lf-body">
        <div className="lf">
          <form onSubmit={submit}>
            <p id="title">Остались вопросы?</p>
            <p id="subtitle">Оставь заявку и мы ответим</p>
            <input
              type="text"
              onChange={fireSetForm}
              name="name"
              placeholder="Имя"
            />
            <input
              type="text"
              onChange={fireSetForm}
              name="number"
              placeholder="Телефон"
            />
            <input
              type="email"
              onChange={fireSetForm}
              name="email"
              placeholder="Почта"
            />
            <button id="btn">Оставить заявку</button>
            <ToastContainer />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LeaveFeedback;
