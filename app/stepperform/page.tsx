"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactDetailsForm from "@/components/form-steps/contact-details-form";
import BusinessDetailsForm from "@/components/form-steps/business-details-form";
import VerifyDocumentsForm from "@/components/form-steps/verify-documents-form";
import BankDetailsForm from "@/components/form-steps/bank-details-form";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "contact-details",
    title: "Contact Details",
    component: ContactDetailsForm,
    completed: false,
  },
  {
    id: "business-details",
    title: "Business Details",
    component: BusinessDetailsForm,
    completed: false,
  },
  {
    id: "verify-documents",
    title: "Verify Documents",
    component: VerifyDocumentsForm,
    completed: false,
  },
  {
    id: "bank-details",
    title: "Bank Details",
    component: BankDetailsForm,
    completed: false,
  },
];

export default function StepperForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    contactDetails: {
      name: "",
      phone: "",
      email: "",
      isValid: false,
    },
    businessDetails: {
      businessName: "",
      businessType: "",
      address: "",
      isValid: false,
    },
    verifyDocuments: {
      uploadedFiles: {},
      consensus: [],
      isValid: false,
    },
    bankDetails: {
      accountNumber: "",
      ifscCode: "",
      isValid: false,
    },
  });

  const updateFormData = (step: string, data: any) => {
    setFormData((prev) => {
      // Only update if the data has actually changed
      const currentStepData = prev[step as keyof typeof prev];
      const hasChanged = Object.keys(data).some(
        (key) =>
          JSON.stringify(data[key]) !==
          JSON.stringify(currentStepData[key as keyof typeof currentStepData])
      );

      if (!hasChanged) return prev;

      return {
        ...prev,
        [step]: {
          ...prev[step as keyof typeof prev],
          ...data,
        },
      };
    });
  };

  const handleNext = () => {
    // Mark the current step as completed
    const updatedSteps = [...steps];
    updatedSteps[currentStep].completed = true;
  
    if (currentStep < steps.length - 1) {
      // Move to the next step if not at the end
      setCurrentStep(currentStep + 1);
    } else {
      // Final step: show submission popup
      setShowSubmissionPopup(true);
  
      // Optional: console log final formData
      console.log("Submitted Data:", formData);
    }
  };
  

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  const handleClose = () => {
    // Handle close action
    console.log("Form closed");
  };
  const [showSubmissionPopup, setShowSubmissionPopup] = useState(false);

  return (
    <div className="w-full max-w-5xl  mx-auto py-[40px]">
      <Card className="">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>{steps[currentStep].title}</CardTitle>
          {/* <Button variant="ghost" size="icon" onClick={handleClose}>
            <X className="h-4 w-4" />
          </Button> */}
        </CardHeader>
        <CardContent className="p-0 mt-3">
          <div className="grid md:grid-cols-[250px_1fr] ">
            {/* Stepper sidebar */}
            <div className="border-r bg-gray-50 p-4">
              <div className="space-y-4">
                {steps.map((step, index) => {
                  const isCompleted = index < currentStep;
                  const isCurrent = index === currentStep;
                  const isPending = index > currentStep;

                  return (
                    <div key={step.id} className="relative">
                      <div className="flex items-center gap-3 py-2">
                        <div
                          className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-full border text-xs",
                            isCompleted
                              ? "border-green-500 bg-green-500 text-white"
                              : isCurrent
                              ? "border-green-500 bg-green-500 text-white"
                              : "border-gray-300 bg-white text-gray-500"
                          )}
                        >
                          {isCompleted ? (
                            <Check className="h-3 w-3" />
                          ) : isCurrent ? (
                            <div className="h-2 w-2 rounded-full bg-white" />
                          ) : (
                            ""
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-sm font-medium",
                            isCompleted || isCurrent
                              ? "text-gray-900"
                              : "text-gray-500"
                          )}
                        >
                          {step.title}
                        </span>
                        {isCompleted && (
                          <Check className="ml-auto h-4 w-4 text-green-500" />
                        )}
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={cn(
                            "absolute left-3 top-8 h-[calc(100%-8px)] w-[1px]",
                            isCompleted ? "bg-green-500" : "bg-gray-200"
                          )}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 flex justify-center">
                <div className="w-32">
                  {/* <img
                    src="/image/document-verification.png"
                    alt="Verification"
                    className="h-auto w-full"
                  /> */}
                  <iframe className="h-auto w-full" src="https://lottie.host/embed/7d592695-a3a1-4b28-9e6f-fdac6e2ee857/PyJR1ErHxJ.lottie"></iframe>
                </div>
              </div>
            </div>

            {/* Form content */}
            <div className="p-6">
              <CurrentStepComponent
                formData={formData}
                updateFormData={updateFormData}
              />

              <div className="mt-6 flex justify-end">
                {currentStep > 0 && (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="mr-2"
                  >
                    Back
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  className="bg-blue-400 hover:bg-blue-500 text-white"
                >
                  {currentStep === steps.length - 1
                    ? "Submit"
                    : currentStep === 2
                    ? "Save & Next"
                    : "Next"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {showSubmissionPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] max-w-md text-center">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Submission Successful 🎉
            </h2>
            <iframe src="https://lottie.host/embed/a2ddd7b3-368a-4a30-be2a-0c9eb12acf34/dIjlqZVvEe.lottie" style={{ margin:"0 auto"}}></iframe>
            <p className="text-gray-700 mb-6">
              Your details have been submitted successfully!
            </p>
            <Button
              onClick={() => setShowSubmissionPopup(false)}
              className="text-white bg-[#df9471] "
            >
              Ok
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
