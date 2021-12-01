import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import Image from "next/image";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (e, data) => {
    sendEmail(data);
  };

  // Send email function [mailJS]
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ant5org",
        "template_w5i1kzn",
        e.target,
        "user_FFLqlyIkoNMdYCUThbcOR"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contact" id="contact">
      <h2>Get In Touch</h2>

      <div className="form-container">
        <div className="pic-contact">
          <Image src="/undraw_mail_re_duel.svg" alt="pic" layout="fill" />
        </div>
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-name-email">
            <div className="name">
              <label>Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Jim D."
              />
              {errors.name && (
                <span className="error-contact-form">
                  <b>Name</b> is required field.
                </span>
              )}
            </div>

            <div className="email">
              <label htmlFor="">Email</label>
              <input
                {...register("user_email", { required: true })}
                type="email"
                name="user_email"
                placeholder="example@gamil.com"
              />
              {errors.user_email && (
                <span className="error-contact-form">
                  <b>Email</b> format is incorrect.
                </span>
              )}
            </div>
          </div>
          <div className="contact-message">
            <label>Message</label>
            <textarea
              {...register("message", { required: true })}
              name="message"
              rows="6"
              placeholder="Have a good day :)"
            ></textarea>
            {errors.message && (
              <span className="error-contact-form">
                Please write some message.
              </span>
            )}
          </div>
          <div className="submit-contact">
            <button className="btn-submit-contact" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
