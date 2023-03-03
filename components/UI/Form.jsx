import React from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    alert(
      `Hi ${e.target[0].value}, Thank you for visiting my website. At present, the email service is disabled. Please feel free to contact me at chidambararaja97@gmail.com.`
    );
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
