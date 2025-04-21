"use client";
import React, { useState } from "react";
import HeroSection from "@/components/pricing/hero-section";
import SidebarNavigation from "@/components/pricing/sidebar-navigation";
import PricingAccordion from "@/components/pricing/pricing-accordion";
import PricingPlans from "@/components/pricing/pricing-plans";
import CTASection from "@/components/pricing/cta-section";

import { apiPricingPlans } from "@/components/data/api-pricing-data";
import { webDevPricingPlans } from "@/components/data/web-pricing-data";
import { appDevPricingPlans } from "@/components/data/app-dev-data";
import PayoutSection from "@/components/data/payout-section";
import PayinSection from "@/components/data/payin-section";

const PricingPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>("Collect Payments");
  const [activeItem, setActiveItem] = useState({
    name: "Payment Gateway",
    section: "Collect Payments",
    
  });
  
  const toggleSection = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const toggleAccordion = (title: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenAccordion(prev => (prev === title ? null : title));
  };

  const handleSelect = (name: string, section: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveItem({ name, section });
  };

  const isActive = (name: string) => activeItem.name === name;

  const getPlansForActiveItem = () => {
    if (activeItem.section === "API's") {
      return apiPricingPlans[activeItem.name as keyof typeof apiPricingPlans] || [];
    } else if (activeItem.section === "Website Development Services") {
      return webDevPricingPlans[activeItem.name as keyof typeof webDevPricingPlans] || [];
    } else if (activeItem.section === "App Development Services") {
      return appDevPricingPlans[activeItem.name as keyof typeof appDevPricingPlans] || [];
    }
    return [];
  };

  const getDescriptionForActiveItem = () => {
    switch (activeItem.section) {
      case "API's":
        return `Integrate our powerful ${activeItem.name} API into your applications with minimal effort and competitive pricing.`;
      case "Website Development Services":
        return `Professional ${activeItem.name} services tailored to your business needs with competitive pricing.`;
      case "App Development Services":
        return `Professional ${activeItem.name} development services with cutting-edge technology and competitive pricing.`;
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />

      <div className="container mx-auto px-4 my-5">
        <div
          className="md:flex block bg-gray-50"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <SidebarNavigation
            openAccordion={openAccordion}
            toggleAccordion={toggleAccordion}
            activeItem={activeItem}
            handleSelect={handleSelect}
            isActive={isActive}
          />

          <div className="w-full md:block bg-white px-4 md:px-4 py-8 md:py-10 relative overflow-hidden">
            {activeItem.section === "Collect Payments" ? (
              activeItem.name === "Payment Gateway" ? (
                <PricingAccordion openIndex={openIndex} toggleSection={toggleSection} />
              ) : activeItem.name === "Payin Services" ? (
                <PayinSection />
              ) : activeItem.name === "Payout Services" ? (
                <PayoutSection />
              ) : (
                <div className="p-7">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                    {activeItem.name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Content for <strong>{activeItem.name}</strong> under{" "}
                    <em>{activeItem.section}</em> section.
                  </p>
                </div>
              )
            ) : ["API's", "Website Development Services", "App Development Services"].includes(activeItem.section) ? (
              <PricingPlans
                title={
                  activeItem.section === "App Development Services"
                    ? `${activeItem.name} Development`
                    : activeItem.name
                }
                description={getDescriptionForActiveItem()}
                plans={getPlansForActiveItem()}
              />
            ) : (
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                  {activeItem.name}
                </h3>
                <p className="text-gray-700 mb-4">
                  Content for <strong>{activeItem.name}</strong> under{" "}
                  <em>{activeItem.section}</em> section.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <p className="text-purple-800">
                    This is a placeholder for the {activeItem.name} content.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default PricingPage;
