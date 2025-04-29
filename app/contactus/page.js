import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <section>
        <div className="w-full h-screen ">
          <div className="w-full h-full flex flex-col justify-center px-48 gap-12">
            <h1 className="bebas-neue-regular text-start text-6xl font-bold">
              Get In Touch
            </h1>
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="space-y-8">
                <div>
                  <h6 className="text-xl font-bold montserrat-font">
                    Send Message
                  </h6>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <form className="grid grid-cols-2 gap-4 montserrat-font">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      className="border-b-2 focus:outline-none p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      className="border-b-2 focus:outline-none p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="text"
                      className="border-b-2 focus:outline-none p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input
                      type="text"
                      className="border-b-2 focus:outline-none p-1"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col">
                    <label className="text-sm font-medium">Subject</label>
                    <input
                      type="text"
                      className="border-b-2 focus:outline-none p-1"
                    />
                  </div>
                  <div className="col-span-2 flex flex-col">
                    <label className="text-sm font-medium">Name</label>
                    <textarea className="border-b-2 h-24 focus:outline-none p-1"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
