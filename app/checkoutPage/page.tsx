"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const CheckoutContent = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const paymentSessionId = searchParams.get("session_id");

    if (!paymentSessionId) {
      setError("Invalid session ID");
      setLoading(false);
      return;
    }

    // Check if script is already loaded
    if (window.Cashfree) {
      initializePayment(paymentSessionId);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.async = true;

    script.onload = () => initializePayment(paymentSessionId);
    script.onerror = () => {
      setError("Failed to load payment processor");
      setLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [searchParams]);

  const initializePayment = (sessionId: string) => {
    try {
      const cashfree = window.Cashfree({ mode: "production" });
      const checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_self",
      };

      cashfree.checkout(checkoutOptions);
      setLoading(false);
    } catch (err) {
      console.error("Payment initialization error:", err);
      setError("Failed to process payment");
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Payment Error</h1>
        <p className="mb-4">{error}</p>
        <Link
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 text-center min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-6">Processing Payment</h1>
      {loading && (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p>Loading payment gateway...</p>
        </div>
      )}
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <Suspense fallback={
      <div className="container mx-auto p-4 text-center min-h-[60vh] flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p>Loading checkout...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
};

export default CheckoutPage;