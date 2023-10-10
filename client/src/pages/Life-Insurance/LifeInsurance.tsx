import Header from "../../components/Header/Header";
import { CheckIcon } from "@heroicons/react/20/solid";
import "./LifeInsurance.css";
import useDocumentTitle from "../../hook/useDocumentTitle";
import { useNavigate } from "react-router-dom";

const includedFeatures = ["Average Participation Profit: 20.4%", "Medical Expenses in case of an accident: 18,000,000 Toman", "Annual Insurance Premium Increase: 15%", "Amount received after 10 years: 58,400,000 Toman"];

const LifeInsurance = () => {
  const navigate = useNavigate();
  useDocumentTitle("Life Insurance - Insurance Partners");
  return (
    <div>
      <Header />
      <div className="page-container bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto sm:text-center">
            <img src="../../public/images/Life-Insurance.webp" />
            <h2 className="mt-10 text-end text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Life Insurance</h2>
            <p className="text-end mt-6 text-lg leading-8 text-gray-600">People in various life situations seek financial security for themselves and their loved ones. Life insurance, also known as future assurance, is one of the secure ways to invest with guaranteed profits. It aims to provide future security and reduce people's worries and anxieties throughout their lives. Given the current economic conditions, having substantial savings for retirement and meeting the family's future needs is of great importance.</p>
            <p className="text-end mt-6 text-lg leading-8 text-gray-600">Heavy expenses such as education costs, marriage, and starting a business for children, along with the high cost of living during retirement, emphasize the importance of having a strong financial backup more than ever. Even in the event of unfortunate incidents for the family's breadwinners, having capital and some foresight will relieve the financial concerns of the survivors.</p>
            <p className="text-end mt-6 text-lg leading-8 text-gray-600">In life insurance, individuals pay a specific amount as insurance premium, and in addition to guaranteed profitable investments, they benefit from various practical coverages. In case of their unfortunate demise, their survivors receive the capital of their insurance. In fact, life insurance is a robust financial backup for old age, retirement, or for survivors after one's demise.</p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-2 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Monthly</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Toman</span>
                    <span className="text-5xl font-bold tracking-tight text-gray-900">675,000</span>
                  </p>
                  <a
                    onClick={() => {
                      navigate("/signin");
                    }}
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">Get a loan without the need for a guarantor</p>
                </div>
              </div>
            </div>
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-end text-2xl font-bold tracking-tight text-gray-900">
                Exclusive Life Insurance Membership <img className="inline-block rounded-full ring-2 ring-white" src="../../public/images/vip.png" alt="" style={{ width: "5%" }} />
              </h3>
              <p className="text-end mt-6 text-base leading-7 text-gray-600">Insurance companies usually have certain conditions and restrictions for life insurance registration; for example, they may specify a specific duration for the insurance contract or have age restrictions for purchasing insurance.</p>
              <div className="mt-10 flex items-center gap-x-4">
                <div className="h-px flex-auto bg-gray-100" />
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Life Insurance Features at Insurance Partners</h4>
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

export default LifeInsurance;
