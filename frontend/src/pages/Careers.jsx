import React from "react";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
//References: https://www.youtube.com/watch?v=Nm_IHH4iOx4&t=326s&ab_channel=techM
export default function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <JobSection />
      <RecruitmentSection />
      <SubscriptionSection />
      <ApplyForm />
      <Footer />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="mt-[100px] text-center py-16 bg-white">
      <h1 className="text-4xl font-bold">Join JK Convenience's Team</h1>
      <p className="mt-4 text-lg">How to apply for a job at JK</p>
      <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">
        Learn more
      </button>
    </section>
  );
};

const JobSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">JK Convenience's hiring</h2>
        <p className="mt-4 mb-4">
          JK Convenience is at the forefront of innovation in hiring...
        </p>
        <a
          href="#applyform"
          className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
        >
          Start your career at JK
        </a>
      </div>
    </section>
  );
};

const RecruitmentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">
          Transforming the recruitment process
        </h2>
        <p className="mt-4">
          JK Convenience's commitment to talent acquisition...
        </p>
        <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">
          Discover opportunities
        </button>
      </div>
    </section>
  );
};

const SubscriptionSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Stay updated on new job openings</h2>
        <p className="mt-4">
          Sign up for notifications and be the first to know about new job
          opportunities at JK Convenience...
        </p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
          Subscribe for updates
        </button>
      </div>
    </section>
  );
};

const ApplyForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z5l694s",
        "template_a7324cs",
        form.current,
        "YD1-tcp1vXdAM4GB0"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="applyform" className="text-center">
      <h1 className="text-5xl font-bold mt-20 mb-10 md:mb-20 mx-4">
        Join JK Convenience's Team
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-6xl px-4">
        <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-left">
            How to apply for a job at JK
          </h2>
          <p className="text-gray-600 text-xl text-left">
            Applying for a job at JK Convenience is easy! <br />
            Simply fill out the form with your information and upload your
            resume. <br />
            Receive notifications upon successful submission.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <img
            src="/logo.jpg"
            alt="Careers"
            className="w-64 h-auto mx-auto md:float-right rounded-full mt-4"
          />
        </div>
      </div>
      <div className="text-center mt-10 mb-10">
        <h1 className="text-4xl font-bold">Apply Here</h1>
      </div>
      <div className="mx-auto max-w-6xl px-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              name="from_name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <input
              name="mobileNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="text"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="linkedin"
            >
              LinkedIn URL
            </label>
            <input
              name="linkedin"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="linkedin"
              type="text"
              placeholder="Enter your LinkedIn URL"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="resume"
              name="resume"
            >
              Upload Resume
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="resume"
              type="file"
              name="resume"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onSubmit={sendEmail}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">Apply for Jobs | Trusted since 2018</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-white">
            About the Company
          </a>
          <a href="#" className="text-white">
            Community
          </a>
          <a href="#" className="text-white">
            Follow us on Social
          </a>
        </div>
      </div>
    </footer>
  );
};
