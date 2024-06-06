import React from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-secondaryColor text-white p-6">
      <div className="font-source-sans font-bold">
        <div className="flex justify-evenly items-center text-2xl space-x-4">
          <a
            href="#"
            className="text-white">
            HOME
          </a>
          <Menu
            as="div"
            className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full text-white">
                THEMES
              </Menu.Button>
            </div>
            <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    Labour Market Analysis
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    Immigrant Employment
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    Employer Branding
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                    Job Search
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>

          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
