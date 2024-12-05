import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!name || !email || !message) {
      setError("All fields are required!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format!");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_i292z6u";
    const templateId = "template_4qp5s6m";
    const publicKey = "PEcdlXT3LAeoXevp4";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Tuan Khoa",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        showToast("Message sent successfully!", "success");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        showToast("Failed to send message. Please try again!", "error");
      });
  };

  const showToast = (message: string, type: "success" | "error") => {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type} fixed bottom-4 right-4 z-50 flex items-center justify-center p-4 rounded-lg shadow-lg max-w-fit h-fit`;
    toast.innerText = message;

    if (type === "success") {
      toast.classList.add("bg-green-500", "text-white");
    } else if (type === "error") {
      toast.classList.add("bg-red-500", "text-white");
    }

    document.body.appendChild(toast);

    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  };

  return (
    <div className=" mt-5 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-white p-6 border-black border-2 border-r-4 border-b-4 rounded-lg"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="Name">Name</label>
          <input
            className="border-2 border-black border-r-4 border-b-4 p-2 rounded-lg"
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="Email">Email</label>
          <input
            className="border-2 border-black border-r-4 border-b-4 p-2 rounded-lg"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Message">Message</label>
          <textarea
            className="border-2 border-black border-r-4 border-b-4 p-2 rounded-lg resize-none"
            placeholder="Type Your Message Here."
            rows={3}
            cols={50}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {error && <div className="text-red-500 font-bold">{error}</div>}
        <button
          type="submit"
          className="btn btn-success border-black border-2 border-r-4 border-b-4 text-white p-2 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
