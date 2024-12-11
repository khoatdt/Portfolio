import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState<null | {
    message: string;
    type: "success" | "error";
  }>(null);

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

    // EmailJS service config
    const serviceId = "service_i292z6u";
    const templateId = "template_4qp5s6m";
    const publicKey = "PEcdlXT3LAeoXevp4";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Tuan Khoa",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        showToast("Message sent successfully!", "success");
        console.log("Current toast state:", toast);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        showToast("Failed to send message. Please try again!", "error");
      });
  };

  const showToast = (message: string, type: "success" | "error") => {
    console.log("Setting toast:", { message, type });
    setToast({ message, type });

    setTimeout(() => {
      console.log("Clearing toast");
      setToast(null); // Remove toast after 3 seconds
    }, 3000);
  };

  return (
    <div className="mt-5">
      {toast && (
        <div
          className={`${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          } absolute bottom-20 right-20 text-white font-semibold p-2 rounded-lg`}
        >
          <p>{toast.message}</p>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-3 bg-white p-6 border-black border-2 border-r-4 border-b-4 rounded-lg"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="Name" className="font-semibold">
            Name
          </label>
          <input
            className="border-2 border-black border-r-4 border-b-4 p-2 rounded-lg"
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="Email" className="font-semibold">
            Email
          </label>
          <input
            className="border-2 border-black border-r-4 border-b-4 p-2 rounded-lg"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Message" className="font-semibold">
            Message
          </label>
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
