"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Swal from "sweetalert2";
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import Link from "next/link";

const schema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [userType, setUserType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log("Signup data", {
      ...data,
      firstName,
      lastName,
      userType,
      companyName,
    });
    Swal.fire({
      title: "Signup Successful",
      icon: "success",
    }).then(() => {
      router.push("/");
    });
  };
const gotohome = () =>{
  router.push("/");

}
  return (
    <div className="container-fluid p-0 h-screen bg-gray-100">
      <div className="h-full">
        <div className="flex flex-row h-full">
          <div className="hidden md:block md:w-1/2">
            <div className="h-full w-full relative">
              <iframe
                src="https://lottie.host/embed/61d10cab-97ca-48bb-b5ad-2d723ed0cce0/i7KyXjzN0B.lottie"
                style={{ width: "100%", height: "inherit" }}
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-5 px-2 md:pe-5 bg-white">
            <div className="ps-2 max-w-md mx-auto pt-[50px]">
              <div className="mt-5 flex justify-between align-center">
                <Image
                  src="/image/logo.png"
                  alt="logo"
                  width={70}
                  height={70}
                />
                <Link
                  href="/"
                  className="bg-gray-50 rounded-full p-4 h-full border"
                >
                  <IoHome className="text-[#e47947]" size={20} />
                </Link>
              </div>
              <div className="text-left mt-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Create Account
                </h2>
                <p className="text-gray-600">
                  Please enter your details to register
                </p>
              </div>

              <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                {!showAdditionalFields && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {/* Step 1 Inputs */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Create Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                          placeholder="Password"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-2.5 text-gray-400"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm4.243 4.243a10 10 0 01-14.142 0M4.757 4.757a10 10 0 0114.142 0"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.073.168-2.104.48-3.065M15 12a3 3 0 00-3-3M3.22 3.22l17.56 17.56"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                          placeholder="Confirm Password"
                        />

                        <button
                          type="button"
                          className="absolute right-3 top-2.5 text-gray-400"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm4.243 4.243a10 10 0 01-14.142 0M4.757 4.757a10 10 0 0114.142 0"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.073.168-2.104.48-3.065M15 12a3 3 0 00-3-3M3.22 3.22l17.56 17.56"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  {!showAdditionalFields ? (
                    <button
                      type="button"
                      className={`w-full ${
                        firstName &&
                        lastName &&
                        email &&
                        password &&
                        password === confirmPassword
                          ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                          : "bg-blue-300 cursor-not-allowed"
                      } text-white font-medium py-2 px-4 rounded-md`}
                      disabled={
                        !(
                          firstName &&
                          lastName &&
                          email &&
                          password &&
                          password === confirmPassword
                        )
                      }
                      onClick={() => setShowAdditionalFields(true)}
                    >
                      Get Start
                    </button>
                  ) : (
                    <div className="space-y-6">
                      <div
                        className={`flip-card ${
                          showAdditionalFields ? "flipped" : ""
                        }`}
                      >
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            {/* Front content (empty) */}
                          </div>
                          <div className="flip-card-back">
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Company Type{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <select
                                  value={userType}
                                  onChange={(e) => setUserType(e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                >
                                  <option value="">Select User Type</option>
                                  <option value="individual">
                                    Please Select Company type
                                  </option>
                                  <option value="Private Limited Company">
                                    Private Limited Company
                                  </option>
                                  <option value="Partnership Firm">
                                    Partnership Firm
                                  </option>
                                  <option value="Proprietorship Firm">
                                    Proprietorship Firm
                                  </option>
                                  <option value="Society/Trust/Club/NGO/Assoc">
                                    Society/Trust/Club/NGO/Assoc
                                  </option>
                                  <option value="OPC (One Person Company)">
                                    OPC (One Person Company)
                                  </option>
                                  <option value="LLP">LLP</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Mobile Number{" "}
                                  <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="number"
                                  value={companyName}
                                  onChange={(e) =>
                                    setCompanyName(e.target.value)
                                  }
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                  placeholder="Enter Number"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        onClick={gotohome}
                        disabled={!userType || !companyName}
                        className={`w-full font-medium py-2 px-4 rounded-md 
                            ${
                              !userType || !companyName
                              ? "bg-[#ab6545] cursor-not-allowed"
                              : " bg-[#f2aa89] hover:bg-[#f2aa89] cursor-pointer"
                          } text-white font-medium py-2 px-4 rounded-md`}
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
