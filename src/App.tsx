import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PersonalInfo } from "./components/PersonalInfo";
import { PlatformSelection } from "./components/PlatformSelection";
import { ProgramSelection } from "./components/ProgramSelection";
import { AccountSizeSelection } from "./components/AccountSizeSelection";
import HeroSection from "./components/HeroSection";
import CustomerReviews from "./components/CustomerReview";
import { Helmet } from "react-helmet";
// import dotenv from 'dotenv';
// dotenv.config();
const paymentLinks = {
  instant: {
    "101": "https://dxrjyl.courses.store/593493",
    "156": "https://dxrjyl.courses.store/593495",
    "297": "https://dxrjyl.courses.store/593497",
    "603": "https://dxrjyl.courses.store/593498",
    "997": "https://dxrjyl.courses.store/593500",
    "2174": "https://dxrjyl.courses.store/593502",
  },
  "one-phase": {
    "81": "https://dxrjyl.courses.store/593504",
    "132": "https://dxrjyl.courses.store/593506",
    "251": "https://dxrjyl.courses.store/593507",
    "367": "https://dxrjyl.courses.store/593508",
    "607": "https://dxrjyl.courses.store/593509",
  },
  "two-phase": {
    "58": "https://dxrjyl.courses.store/593510",
    "99": "https://dxrjyl.courses.store/593512",
    "199": "https://dxrjyl.courses.store/593514",
    "311": "https://dxrjyl.courses.store/593516",
    "552": "https://dxrjyl.courses.store/593517",
  },
};

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    program: "instant",
    accountSize: "1250",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const programAmounts = {
    instant: [
      { value: "1250", label: "$1,250", price: "101" },
      { value: "2500", label: "$2,500", price: "156" },
      { value: "5000", label: "$5,000", price: "297" },
      { value: "10000", label: "$10,000", price: "603" },
      { value: "20000", label: "$20,000", price: "997" },
      { value: "40000", label: "$40,000", price: "2174" },
    ],
    "one-phase": [
      { value: "5000", label: "$5,000", price: "81" },
      { value: "10000", label: "$10,000", price: "132" },
      { value: "25000", label: "$25,000", price: "251" },
      { value: "50000", label: "$50,000", price: "367" },
      { value: "100000", label: "$100,000", price: "607" },
    ],
    "two-phase": [
      { value: "5000", label: "$5,000", price: "58" },
      { value: "10000", label: "$10,000", price: "99" },
      { value: "25000", label: "$25,000", price: "199" },
      { value: "50000", label: "$50,000", price: "311" },
      { value: "100000", label: "$100,000", price: "552" },
    ],
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const selectedAmount = programAmounts[formData.program].find(
      (a) => a.value === formData.accountSize
    );
    if (!selectedAmount) {
      alert("Please select a valid account size.");
      return;
    }
  
    const link = paymentLinks[formData.program]?.[selectedAmount.price];
    if (!link) {
      alert("Payment link not found.");
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      // Add total price to form data
      const updatedFormData = {
        ...formData,
        total: `$${selectedAmount.price}`, // Including the price
      };
        //  const apiUrl = process.env.REACT_APP_FORMSPREE_API;

      // Send form data to Formspree
      const formspreeResponse = await fetch("https://formspree.io/f/mnnqvwlp", {
      // const formspreeResponse = await fetch( apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFormData),
      });
  
      if (formspreeResponse.ok) {
        window.open(link, "_blank"); // Open payment link in a new tab
      } else {
        alert("Failed to submit form data. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    const availableAmounts = programAmounts[formData.program];
    if (
      !availableAmounts.some((amount) => amount.value === formData.accountSize)
    ) {
      setFormData((prev) => ({
        ...prev,
        accountSize: availableAmounts[0].value,
      }));
    }
  }, [formData.program]);

  const stepContent = {
    1: {
      title: "Choose a program",
      description:
        "Select our industry-leading Instant Funding account if you want the highest chance of getting a payout across our programs.",
    },
    2: {
      title: "Start trading",
      description:
        "Trade virtual funds in a simulated trading environment under real market conditions.",
    },
    3: {
      title: "Get your first payout",
      description:
        "Once you achieve your targets, convert your virtually simulated profits into real cash.",
    },
    4: {
      title: "Continue Your Journey",
      description:
        "Grow your trading account and request payouts while keeping up to 90% of the profits.",
    },
  };

  return (
    <>
      <Helmet>
        <title>Choose Your Program - Forex Fundz | Trading Platform</title>
        <meta
          name="description"
          content="Select from our industry-leading trading programs."
        />
      </Helmet>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <HeroSection />
          <main className="flex-grow bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
              <div className="lg:w-1/3 pr-6 mb-8 lg:mb-0">
                <div className="lg:sticky top-16 bg-white border border-purple-400 rounded-lg p-6 shadow-lg">
                  <h2 className="text-2xl font-semibold text-center text-blue-800">
                    How it Works!
                  </h2>
                  <div className="flex justify-around mt-4 mb-6">
                    {Object.keys(stepContent).map((key) => (
                      <button
                        key={key}
                        className={`w-12 h-12 flex items-center justify-center rounded-2xl border-2 ${
                          activeStep === parseInt(key)
                            ? "bg-blue-500 text-white"
                            : "text-black border-blue-400"
                        }`}
                        onClick={() => setActiveStep(parseInt(key))}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                  <div className="bg-black text-white p-4 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold text-green-400">
                      {stepContent[activeStep].title}
                    </h3>
                    <p>{stepContent[activeStep].description}</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <form onSubmit={handleSubmit}>
                  <PersonalInfo
                    formData={formData}
                    onChange={handleInputChange}
                  />
                  <PlatformSelection
                    selectedPlatform={formData.platform}
                    onChange={handleInputChange}
                  />
                  <ProgramSelection
                    selectedProgram={formData.program}
                    onChange={handleInputChange}
                  />
                  <AccountSizeSelection
                    selectedSize={formData.accountSize}
                    program={formData.program}
                    programAmounts={programAmounts}
                    onChange={handleInputChange}
                  />
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <h4 className="text-lg font-medium text-gray-900">
                      Total: $
                      {programAmounts[formData.program].find(
                        (a) => a.value === formData.accountSize
                      )?.price || 0}
                    </h4>
                    <button
                      type="submit"
                      className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-md ${
                        isSubmitting && "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Proceed to Payment"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
          <CustomerReviews />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
