import Header from "../../components/Header/Header";
import { CheckIcon } from "@heroicons/react/20/solid";
import "./FireInsurance.css";
import useDocumentTitle from "../../hook/useDocumentTitle";
import { useNavigate } from "react-router-dom";

const includedFeatures = ["Tornado, Cyclone, and Hurricane", "Roof collapse due to heavy snow", "Glass breakage coverage", "Aircraft and helicopter crashes or parts thereof"];
const FireInsurance = () => {
  const navigate = useNavigate();
  useDocumentTitle("Fire Insurance - Insurance Partners");
  return (
    <div>
      <Header />
      <div className="page-container bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto  sm:text-center">
            <img src="../../public/images/Fire-Insurance.webp" />
            <h2 className="mt-10 text-end text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fire Insurance</h2>
            <p className="text-end mt-6 text-lg leading-8 text-gray-600">Iran is one of the top 10 most disaster-prone countries in the world, and unfortunately, fires are also common occurrences in our country. On a daily basis, more than 50 fire incidents occur in the country. These incidents not only result in tragic loss of life but also significant financial damages for individuals.</p>
            <p className="text-end mt-6 text-lg leading-8 text-gray-600">This has made the need for property insurance to compensate for these losses more critical than ever. To cover the financial damages caused by fire-related incidents, insurance companies offer a product called "Fire Insurance."</p>
            <p className="text-end mt-6 text-lg leading-8 text-gray-600">Fire Insurance is a subset of property insurance that provides coverage for the financial losses incurred by the insured due to fire damage to their movable and immovable properties. It is also sold under the name of "Earthquake and Fire Insurance."</p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-2 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Monthly</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Toman</span>
                    <span className="text-5xl font-bold tracking-tight text-gray-900">135,000</span>
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
                Exclusive Fire Insurance Membership <img className="inline-block rounded-full ring-2 ring-white" src="../../public/images/vip.png" alt="" style={{ width: "5%" }} />
              </h3>
              <p className="text-end mt-6 text-base leading-7 text-gray-600">When buying earthquake and fire insurance, it's advisable to add suitable additional coverages to the policy based on the location, building area, and its usage.</p>
              <div className="mt-10 flex items-center gap-x-4">
                <div className="h-px flex-auto bg-gray-100" />
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Fire Insurance Features by Insurance Partners</h4>
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
export default FireInsurance;
