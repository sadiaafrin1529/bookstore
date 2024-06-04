import React from 'react'
import { useForm } from "react-hook-form";
import Login from './Login';
import { Link } from 'react-router-dom';
function Contact() {
    const {
      register,
      handleSubmit,

      formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="flex h-screen items-center justify-center">
          <div className=" w-[600px] ">
            <div className="modal-box">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}

                <h3 className="font-bold text-lg">Contact Us</h3>
                <div className="mt-4 space-y-2">
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your fullname"
                    className="w-full px-3 py-1 border rounded-md outline-none"
                    {...register("fullname", { required: true })}
                  />
                  <br />
                  {errors.fullname && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                {/* Email */}
                <div className="mt-4 space-y-2">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-1 border rounded-md outline-none"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                {/* message */}
                {/* <div className="mt-4 space-y-2">
                  <span>Message</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your message"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("message", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div> */}
                <div className="mt-4 space-y-2">
                  <span>Message</span>
                  <br />
                  <textarea
                    placeholder="Typr your message"
                    className="textarea textarea-bordered textarea-lg w-full  "
                    {...register("message", { required: true })}
                  ></textarea>
                  <br />
                  {errors.message && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                {/* Button */}
                <div className=" mt-4">
                  <button className="bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                    Submit
                  </button>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
