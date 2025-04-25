"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

// The inner component that uses useSearchParams()
const PaymentStatusContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState("Checking payment status...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const order_id = searchParams.get("order_id");

  useEffect(() => {
    if (!order_id) {
      setError("Order ID not found");
      setLoading(false);
      return;
    }

    const checkPaymentStatus = async () => {
      try {
        const response = await fetch(
          `https://api.worldpayme.com/check-payment-status?order_id=${order_id}`
        );
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setStatus(data.status || "Status unknown");
      } catch (err) {
        setError("Failed to fetch payment status");
        setStatus("Error");
      } finally {
        setLoading(false);
      }
    };

    checkPaymentStatus();
  }, [order_id]);

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
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
      <h1 className="text-2xl font-bold mb-4">Payment Status</h1>
      
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p>Checking status...</p>
        </div>
      ) : (
        <>
          <div className={`p-6 rounded-lg mb-6 ${
            status === "SUCCESS" 
              ? "bg-green-100 text-green-800" 
              : status === "FAILED" 
                ? "bg-red-100 text-red-800" 
                : "bg-yellow-100 text-yellow-800"
          }`}>
            <p className="text-lg font-semibold">{status}</p>
          </div>
          
          <Link
            href="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Return Home
          </Link>
        </>
      )}
    </div>
  );
};

// The outer component that provides Suspense boundary
const PaymentStatus = () => {
  return (
    <Suspense fallback={
      <div className="container mx-auto p-4 text-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p>Loading payment status...</p>
        </div>
      </div>
    }>
      <PaymentStatusContent />
    </Suspense>
  );
};

export default PaymentStatus;



