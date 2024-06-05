import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
function Login() {
      const {
        register,
        handleSubmit,
      
        formState: { errors },
      } = useForm();

  const onSubmit =async (data) => {
    //console.log(data);
      const userinfo = {
      //  fullname: data.fullname,
       email: data.email,
       password:data.password
    }
    await axios .post("http://localhost:4000/user/login", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Sucessfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            
            window.location.reload();
            localStorage.setItem("User", JSON.stringify(res.data.user));
          },1000)
          // document.getElementById("my_modal_3").close();
          // window.location.reload()
          // alert("Login Sucessfully");
        }
        // localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          // alert("Error:" + error.response.data.message);
          toast.error("Error:" + error.response.data.message);
          setTimeout(()=>{},2000)
        }
      });
  }
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login
