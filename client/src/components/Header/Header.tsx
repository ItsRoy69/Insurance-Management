import { Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import ElderlyIcon from "@mui/icons-material/Elderly";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useNavigate } from "react-router-dom";
import "./header.css";
import React from "react";

const callsToAction = [
  { name: "Educational Videos", href: "#", icon: PlayCircleIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon }
];

const Header = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav id="nav" className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <div
            className="btn"
            onClick={() => {
              navigate("/signin");
            }}
          >
            <UserIcon
              style={{
                display: "inline-block",
                position: "relative",
                top: "3px",
                marginRight: "8px"
              }}
              className="h-4 w-4"
              aria-hidden="true"
            />
            <a className="text-md font-semibold leading-6">
              <span>Login</span>
            </a>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon style={{ color: props.color }} className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            style={{ color: props.color }}
            onClick={() => {
              navigate("/contact");
            }}
            className="text-lg leading-6 text-gray-900"
          >
            Contact Us
          </a>
          <a
            style={{ color: props.color }}
            onClick={() => {
              navigate("/about");
            }}
            className="text-lg leading-6 text-gray-900"
          >
            About Us
          </a>
          <Popover className="relative">
            <Popover.Button style={{ color: props.color }} className="popover-btn inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span style={{ color: props.color }} className="text-lg leading-6 text-gray-900">
                Types of Insurance
              </span>
              <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </Popover.Button>

            <Transition as={Fragment} enter="transition ease-out duration-400" enterFrom="opacity-0 translate-y-5" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-5" leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    <div
                      style={{
                        textAlign: "end",
                        transition: "all 0.4s"
                      }}
                      className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100"
                    >
                      <div>
                        <a
                          onClick={() => {
                            navigate("/LifeInsurance");
                          }}
                          className="text-gray-900"
                          style={{
                            fontSize: "1.01rem"
                          }}
                        >
                          Life Insurance
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">Life insurance is considered one of the most important branches of social welfare</p>
                      </div>
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <ElderlyIcon
                          style={{
                            transition: "all 0.5s"
                          }}
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        textAlign: "end",
                        transition: "all 0.4s"
                      }}
                      className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100"
                    >
                      <div>
                        <a
                          onClick={() => {
                            navigate("/CarInsurance");
                          }}
                          className="text-gray-900"
                          style={{
                            fontSize: "1.01rem"
                          }}
                        >
                          Car Insurance
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">This group can be divided into two types: body insurance and third-party and passenger insurance</p>
                      </div>
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <DirectionsCarIcon
                          style={{
                            transition: "all 0.5s"
                          }}
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        textAlign: "end",
                        transition: "all 0.4s"
                      }}
                      className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100"
                    >
                      <div>
                        <a
                          onClick={() => {
                            navigate("/FireInsurance");
                          }}
                          className="text-gray-900"
                          style={{
                            fontSize: "1.01rem"
                          }}
                        >
                          Fire Insurance
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">Fire insurance covers financial and material damages</p>
                      </div>
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <LocalFireDepartmentIcon
                          style={{
                            transition: "all 0.5s"
                          }}
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a key={item.name} href={item.href} className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            onClick={() => {
              navigate("/branch");
            }}
            style={{ color: props.color }}
            className="text-lg leading-6 text-gray-900"
          >
            Insurance Service Centers
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end flex lg:flex-1">
          <a
            onClick={() => {
              navigate("/");
            }}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Insurance Companions</span>
            <img className="h-12 w-auto" src="/favicon/android-chrome-512x512.png" alt="" />
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              onClick={() => {
                navigate("/");
              }}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Insurance Companions</span>
              <img className="h-8 w-auto" src="/favicon/android-chrome-512x512.png" alt="" />
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Insurance Service Centers</a>
                <a
                  onClick={() => {
                    navigate("/about");
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  onClick={() => {
                    navigate("/contact");
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
                <a
                  onClick={() => {
                    navigate("/signin");
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
