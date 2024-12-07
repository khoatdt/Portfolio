"use client";

import ButtonGroups from "./ui/button-groups";
import CardCv from "./ui/card-cv";
import EmailForm from "./ui/contact-form";

export function Contact() {
  return (
    <div className="container mx-auto">
      <div className="place-items-center">
        <h1 className="text-3xl w-fit md:text-5xl font-bold rounded-lg border border-b-4 border-r-4 border-black p-4 bg-white ">
          Contact Me
        </h1>
      </div>
      <div className="flex justify-between md:justify-center">
        <EmailForm />

        <CardCv />
      </div>
      <div className="mt-5 place-items-center">
        <ButtonGroups />
      </div>
    </div>
  );
}

export default Contact;
