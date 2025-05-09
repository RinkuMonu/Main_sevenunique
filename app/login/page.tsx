'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import axios from "axios";
import seoConfig from "../seoConfig";
import SEO from "@/components/SEO/SEO";

const Login = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    mobileNumber: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendOtp = async (e) => {
    e.preventDefault();

    if (!formData.mobileNumber || !/^\d{10}$/.test(formData.mobileNumber)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Mobile Number",
        text: "Please enter a valid 10-digit mobile number",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://api.finuniques.in/api/auth/send-otp", {
        mobileNumber: formData.mobileNumber,
      });

      if (response.status === 200) {
        Swal.fire({
          title: "OTP Sent Successfully",
          text: `OTP has been sent to ${formData.mobileNumber}`,
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        });
        setShowOtpField(true);
        setError(null);
      }
    } catch (error) {
      let errorMessage = "Something went wrong! Please try again.";
      if (error.response) {
        errorMessage = error.response.data?.message || "An error occurred";
      } else if (error.request) {
        errorMessage = "Network Error! Please check your internet connection.";
      }
      setError(errorMessage);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();

    if (!otp || !/^\d{6}$/.test(otp)) {
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: "Please enter a valid 6-digit OTP",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://api.finuniques.in/api/auth/login", {
        mobileNumber: formData.mobileNumber,
        otp: otp,
      });

      if (response.status === 200) {
        const token = response.data.user.token;
        // const id = response.data.user.id;
        // const role = response.data.user.role;
        localStorage.setItem("token", token);
        // localStorage.setItem("id", id);
        // localStorage.setItem("role", role);

        await Swal.fire({
          title: "Login Successful",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        router.push("/");
      }
    } catch (error) {
      let errorMessage = "Something went wrong!";
      if (error.response) {
        errorMessage = error.response.data?.message || "Invalid OTP";
      } else if (error.request) {
        errorMessage = "Network Error! Please check your internet connection.";
      }
      setError(errorMessage);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid p-0 h-screen bg-gray-100">
        <SEO seo={seoConfig["/login"]} />
      <div className="h-full">
        <div className="flex flex-row h-full">
          <div className="hidden md:block md:w-1/2">
            <div className="h-full w-full relative">
              <iframe
                src="https://lottie.host/embed/ff5871b9-506e-4cb9-9f74-61a4284fd6ae/X3Skm7ONso.lottie"
                style={{ width: "100%", height: "100%", border: "none" }}
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-5 px-2 md:pe-5 bg-white">
            <div className="ps-2 max-w-md mx-auto pt-[60px]">
              <div className="mt-5 flex justify-between items-center">
                <Image src="/image/logo.png" alt="logo" width={70} height={70} />
                <Link href="/" className="bg-gray-50 rounded-full p-4 border">
                  <IoHome className="text-[#e47947]" size={20} />
                </Link>
              </div>

              <div className="text-left mt-4">
                <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
                <p className="text-gray-600">Please Enter Your Login Details</p>
              </div>

              <form className="mt-6" onSubmit={showOtpField ? verifyOtp : sendOtp}>
                <div className="space-y-4">
                  <div className="mb-3">
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="mobileNumber"
                      placeholder="Enter Mobile Number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      maxLength={10}
                      pattern="\d{10}"
                      required
                      disabled={showOtpField}
                    />
                    {!showOtpField && (
                      <button
                        type="submit"
                        className="w-full mt-3 bg-[#d48f6e] hover:bg-[#f5bba0] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send OTP"}
                      </button>
                    )}
                  </div>

                  {showOtpField && (
                    <div>
                      <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                        id="otp"
                        placeholder="Enter OTP"
                        maxLength={6}
                        value={otp}
                        pattern="\d{6}"
                        onChange={(e) => setOtp(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
                        disabled={loading}
                      >
                        {loading ? "Verifying..." : "Login"}
                      </button>
                    </div>
                  )}
                </div>
              </form>

              {/* Optional: error message below form */}
              {error && (
                <div className="mt-4 text-red-600 text-sm text-center">{error}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
