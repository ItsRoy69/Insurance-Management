import Header from "../../components/Header/Header";
import { CheckIcon } from "@heroicons/react/20/solid";
import "./CarInsurance.css";
import useDocumentTitle from "../../hook/useDocumentTitle";
import { useNavigate } from "react-router-dom";
import React from "react";

const includedFeatures = ["Price Fluctuations Coverage", "Coverage for Parts Theft", "Glass Breakage Coverage", "Natural Disasters Coverage"];

const CarInsurance = () => {
  const navigate = useNavigate();
  useDocumentTitle("Car Insurance - Insurance Companions");

  return (
    <div>
      <Header />
      <div className="page-container bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto sm:text-center">
            <img src="../../public/images/Car-Insurance.webp" alt="" />
            <h2 className="mt-10 text-end text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Car Insurance</h2>
            <p className="text-end mt-6 text-lg leading-8 text-gray-600">
              Comprehensive insurance is one of the popular types of car insurance that covers damage to the vehicle's body and property. Comprehensive insurance is optional, unlike third-party insurance. The policyholder can protect their vehicle against risks such as accidents, overturning, fire, and even theft by paying a specific insurance premium for comprehensive coverage.
            </p>
            <p className="text-end mt-6 text-lg leading-8 text-gray-600">
              The services and coverage of car insurance can vary between different insurance companies, making it difficult for car owners to choose the right policy. The best solution is to inquire about comprehensive car insurance from reputable insurance companies, compare them, and purchase comprehensive insurance online.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-2 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Monthly</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Toman</span>
                    <span className="text-5xl font-bold tracking-tight text-gray-900">945,000</span>
                  </p>
                  <a
                    onClick={() => {
                      navigate("/signin");
                    }}
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">Get a loan without the need for a guarantor</p>
                </div>
              </div>
            </div>
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-end text-2xl font-bold tracking-tight text-gray-900">
                VIP Car Insurance Membership <img className="inline-block rounded-full ring-2 ring-white" src="../../public/images/vip.png" alt="" style={{ width: "5%" }} />
              </h3>
              <p className="text-end mt-6 text-base leading-7 text-gray-600">Comprehensive car insurance coverage is divided into two main categories: primary coverage and additional coverage. Additional coverage must be selected and purchased separately at the time of purchasing comprehensive insurance.</p>
              <div className="mt-10 flex items-center gap-x-4">
                <div className="h-px flex-auto bg-gray-100" />
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Car Insurance Features with Insurance Companions</h4>
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInsurance;
