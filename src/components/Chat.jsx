import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBookmark,
  faChevronDown,
  faEllipsis,
  faEnvelopeOpenText,
  faFaceSmile,
  faMessage,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
export default function Chat() {
  const commonClassname =
    "px-4 py-3 bg-gray-300 hover:bg-gray-400 rounded-xl text-2xl cursor-pointer";
  return (
    <motion.section
      className="w-1/2"
      initial={{
        opacity: 0,
        y: 200,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <div className="h-18 flex justify-between items-center">
        <p className="ml-4 font-semibold text-3xl">Luis Easton</p>
        <div className="mr-4 gap-2 items-center sm:flex hidden">
          <FontAwesomeIcon className={commonClassname} icon={faEllipsis} />
          <FontAwesomeIcon className={commonClassname} icon={faMoon} />
          <p className="px-6 py-2 text-xl rounded-xl bg-gray-700 hover:bg-gray-900 text-white cursor-pointer">
            <FontAwesomeIcon className="mr-2" icon={faEnvelopeOpenText} />
            Close
          </p>
        </div>
      </div>
      <hr className="text-gray-400 opacity-20" />
      <div className="h-[73%] flex flex-col md:mt-4 sm:mt-8 mt-12 lg:mt-0 md:gap-2 gap-8">
        <div className="h-36 mt-4 mx-4 flex items-center">
          <p className="px-5 py-2 rounded-full text-2xl bg-purple-300">L</p>
          <p className="mx-2 text-xl py-4 px-4 rounded-xl bg-gray-400">
            I bought a product from your store in November as a christmas gift
            for a member of my family. However, turns out they have something
            very similar already. I was hoping you'd be able to refund me, as it
            is un-opened.
          </p>
        </div>
        <div className="h-36 mx-4 flex items-center justify-end">
          <p className="mx-2 text-xl py-4 px-4 rounded-xl bg-blue-300">
            Let me just look into this for you, Luis.
          </p>
          <p className="px-5 py-3 rounded-full text-2xl bg-red-300">R</p>
        </div>
      </div>
      <div className="h-[20%] pt-4">
        <div className="h-full">
          <p className="text-xl">
            <FontAwesomeIcon className="mr-0.5" icon={faMessage} />
            Chat
            <FontAwesomeIcon className="ml-2 text-lg" icon={faChevronDown} />
          </p>
          <input
            type="text"
            className="h-1/2 outline-none w-full text-2xl"
            placeholder="Use K for shortcuts"
          />
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-4 text-xl">
              <FontAwesomeIcon icon={faBolt} />
              <FontAwesomeIcon icon={faBookmark} />
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
            <p className="mx-2 text-xl">
              Send <FontAwesomeIcon className="ml-4" icon={faChevronDown} />
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
