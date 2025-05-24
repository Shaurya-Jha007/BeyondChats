import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { faIntercom } from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";
import { useRef, useState } from "react";
export default function Agent() {
  const [messages, setMessages] = useState([]);
  const messageRef = useRef();
  const noMessages = messages.length === 0;
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: 30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      className="w-[30%]"
    >
      <div className="flex h-[8%] justify-between items-center">
        <div className="flex text-xl font-semibold gap-8 ml-8">
          <p className="border-b-2 text-[#797CBC] font-bold">AI Copilot</p>
          <p>Details</p>
        </div>
        <FontAwesomeIcon icon={faToggleOn} className="mr-4 text-2xl" />
      </div>
      {noMessages && (
        <div className={"h-[77%] flex flex-col justify-center items-center"}>
          <FontAwesomeIcon
            icon={faIntercom}
            className="text-4xl font-bold mb-4"
          />
          <div className="text-2xl font-semibold">
            <p>Hi, I'm Fin AI Copilot</p>
          </div>
          <br />
          <p className="text-xl font-medium text-gray-600">
            Ask me anything about this conversation.
          </p>
        </div>
      )}

      {!noMessages && (
        <div className="h-[77%] flex flex-col pt-4 text-xl">
          {messages.map((message, index) => {
            return (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-400 mt-2 mx-4 px-2 py-2 rounded-lg"
                key={index}
              >
                {message}
              </motion.p>
            );
          })}
        </div>
      )}

      <div className="h-[15%] px-6 rounded-b-2xl flex flex-col justify-center bg-gradient-to-br from-[#F4D9D9] via-[#F4E3EC] to-[#D2D6F3]">
        {noMessages && (
          <div
            onClick={() => {
              return setMessages((prevState) => {
                return [...prevState, messageRef.current.textContent];
              });
            }}
            className="py-1 px-2 rounded-md font-semibold flex text-lg text-gray-700 bg-white cursor-pointer hover:bg-blue-400 duration-300"
          >
            <span className="font-bold">Suggested</span>
            <p ref={messageRef}>💵 How do I get a refund?</p>
          </div>
        )}
        <div className="bg-white mt-6 h-12 flex items-center rounded-xl">
          <input
            type="text"
            className="w-11/12 h-full text-xl px-2 outline-none"
            placeholder="Ask a question..."
          />
          <FontAwesomeIcon icon={faArrowUp} className="w-1/12 cursor-pointer" />
        </div>
      </div>
    </motion.section>
  );
}
