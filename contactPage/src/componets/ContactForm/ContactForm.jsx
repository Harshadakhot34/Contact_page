import React, { useState } from "react";
import Styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FormImg from "../../assets/Service 24_7-pana 1.png";

const ContactForm = () => {

  const[name, setName]= useState("");
  const[email, setEmail]= useState("");
  const[text, setText]= useState("");


  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value); 
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    console.log("Updated name:", event.target[0].value); 
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.contact_form}>
        <div className={Styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />
        <form action="" onSubmit={onSubmit}>
          <div className={Styles.form_controller}>
            <label htmlFor="NAME">Name</label>
            <input type="text" name="name" id="" />
          </div>

          <div className={Styles.form_controller}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>

          <div className={Styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" id="" rows={8} />
          </div>

          <Button text="SUBMIT BUTTON" />
        </form>
        {name}
      </div>
      
      <div className={Styles.contact_img}>
        <img src={FormImg} alt="COntact Image" />
      </div>
    </div>
  );
};

export default ContactForm;
