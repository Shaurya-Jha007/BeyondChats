import {
  faBars,
  faChevronDown,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { inbox } from "../lib/inbox";
export default function Inbox() {
  return (
    <motion.section
      className="w-1/5 bg-purple"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
      }}
    >
      <div className="h-11/12 w-11/12 mx-auto">
        <h2 className="mt-3 mb-6 text-3xl font-bold text-gray-700">
          Your inbox
        </h2>
        <hr className="text-gray-400 opacity-20" />
        <p className="my-4 flex xl:justify-around lg:justify-between lg:block hidden text-lg font-bold">
          <span className="cursor-pointer">
            5 Open <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <span className="cursor-pointer">
            Waiting Longest <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </p>
        <div className="">
          {inbox.map((chat, index) => {
            return (
              <div
                className={`flex mb-4 py-3 items-center 2xl:justify-around gap-4 rounded-2xl hover:bg-blue-400 cursor-pointer ${
                  index === 0 ? "bg-blue-200" : ""
                }`}
                key={index}
              >
                <p className="2xl:ml-4 xl:ml-0 2xl:px-6 2xl:py-4 px-4 py-2 bg-blue-600 2xl:text-xl xl:text-lg text-white rounded-full">
                  {chat.messenger.charAt(0)}
                </p>
                <div className="text-xl text-gray-600 font-semibold">
                  <p>{chat.messenger}</p>
                  <p className="xl:block hidden">
                    {chat.message.length > 20
                      ? chat.message.slice(0, 20) + "..."
                      : chat.message}
                  </p>
                </div>
                <div className="ml-4 2xl:block hidden">
                  <p
                    className={`${
                      chat.staleTime > 0 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {chat.staleTime}min
                  </p>
                  <p>{chat.lastMessaged}m</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-11/12 mx-auto px-4 text-2xl rounded-lg">
        <FontAwesomeIcon
          className="mr-4 px-2 py-1 bg-gray-300 cursor-pointer rounded-lg"
          icon={faToggleOff}
        />
        <FontAwesomeIcon
          className="mr-4 px-2 py-1 cursor-pointer"
          icon={faBars}
        />
      </div>
    </motion.section>
  );
}
