import React from "react";
import Header from "../../components/Header/Header";
import useDocumentTitle from "../../hook/useDocumentTitle";
import Axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [usersCount, setUsersCount] = useState("");
  const [branchesCount, setBranchesCount] = useState("");
  const [contractsCount, setContractsCount] = useState("");
  const stats = [
    { name: "Nationwide Branches", value: branchesCount },
    { name: "Users", value: "+" + usersCount },
    { name: "Closed Contracts", value: contractsCount }
  ];
  useEffect(() => {
    Axios.post("http://localhost:3001/total-users").then((response) => {
      setUsersCount(response.data[0]["COUNT(*)"]);
      console.log(response);
    });
    Axios.post("http://localhost:3001/total-branches").then((response) => {
      setBranchesCount(response.data[0]["COUNT(*)"]);
      console.log(response);
    });
    Axios.post("http://localhost:3001/total-contracts").then((response) => {
      setContractsCount(response.data[0]["COUNT(*)"]);
      console.log(response);
    });
  }, []);

  useDocumentTitle("About Us - Insurance Companions");
  return (
    <div>
      <Header color={"white"} />
      <div style={{ height: "100vh" }} className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img src="/images/company.webp" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          />
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          />
        </div>
        <div className="text-end mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-20 mx-auto max-w-6xl lg:mx-0">
            <h2 className="text-end text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
            <p className="text-end mt-6 text-lg leading-8 text-gray-300">Planning to buy insurance? Don't worry about the complicated process of purchasing and using insurance. Insurance Companions is here to assist you in making the best insurance choice with sufficient knowledge.</p>
            <p className="text-end mt-6 text-lg leading-8 text-gray-300">Insurance Companions is with you in all stages of buying and using insurance. With the help of Insurance Companions, you can gather complete information about various types of insurance and their coverages before making a purchase. You can also compare the services and prices of various insurance companies. The purchase process with Insurance Companions is very fast and simple. All steps are online, and there is no need for in-person visits, saving you time.</p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
