  'use client';

  import { useState } from "react";
  import { useRouter } from "next/navigation";
  import Swal from "sweetalert2";
  import Image from "next/image";

  const Login = () => {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOtpField, setShowOtpField] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({ mobileNumber: "" });

    const router = useRouter();

    const handleChange = (e:any) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const sendOtp = async (e:any) => {
      e.preventDefault();
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful OTP sending
      Swal.fire({
        title: "OTP Sent Successfully",
        icon: "success",
      });
      setShowOtpField(true);
      setLoading(false);
    };

    const verifyOtp = async (e:any) => {
      e.preventDefault();
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      Swal.fire({
        title: "Login Successful",
        icon: "success",
      }).then(() => {
        // Mock user data
        localStorage.setItem("token", "mock-token");
        localStorage.setItem("id", "mock-user-id");
        localStorage.setItem("role", "user");
        
        router.push("/");
      });
      setLoading(false);
    };

    return (
      <div className="container-fluid p-0 h-screen bg-gray-100">
        <div className="h-full">
          <div className="flex flex-row h-full">
            <div className="hidden md:block md:w-1/2">
              <div className="h-full w-full relative">
                <Image
                  src="/image/login.svg"
                  alt="Login"
                  fill
                  className="p-[50px]"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 py-5 px-2 md:pe-5 bg-white">
              <div className="ps-2 max-w-md mx-auto pt-[60px]">
                <div className="mt-5">
                  <Image src="/image/logo.png" alt="logo" width={70} height={70} />
                </div>
                <div className="text-left mt-4">
                  <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
                  <p className="text-gray-600">Please Enter Your Login Details</p>
                </div>

                <form className="mt-6">
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
                        required
                        disabled={showOtpField}
                      />
                      {!showOtpField && (
                        <button
                          type="button"
                          className="w-full mt-3 bg-[#d48f6e] hover:bg-[#f5bba0] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                          onClick={sendOtp}
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
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          required
                        />
                        <button
                          type="button"
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
                          onClick={verifyOtp}
                          disabled={loading}
                        >
                          {loading ? "Verifying..." : "Login"}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Don't have an account? <a href="/register" className="text-blue-600 hover:text-blue-800">Register</a>
                    </p>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Login;