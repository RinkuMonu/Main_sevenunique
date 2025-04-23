"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const paymentSessionId = searchParams.get("session_id");

    if (!paymentSessionId) {
      setError("Invalid session ID");
      setLoading(false);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.async = true;

    script.onload = () => {
      try {
        const cashfree = window.Cashfree({ mode: "production" });
        const checkoutOptions = {
          paymentSessionId,
          redirectTarget: "_self",
        };

        console.log("Starting Cashfree checkout...");
        cashfree.checkout(checkoutOptions);
        setLoading(false);
      } catch (err) {
        setError("Failed to initialize payment");
        setLoading(false);
      }
    };

    script.onerror = () => {
      setError("Failed to load payment processor");
      setLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [searchParams]);

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Payment Error</h1>
        <p className="mb-4">{error}</p>
        <Link
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Processing Payment</h1>
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p>Loading payment gateway...</p>
        </div>
      ) : (
        <p>Redirecting to payment page...</p>
      )}
    </div>
  );
};

export default CheckoutPage;