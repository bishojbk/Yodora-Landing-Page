import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const SignInModal = ({ isOpen, onClose }: any) => {
  const modalVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 bottom-0 z-50 h-screen flex items-center justify-center bg-[#000] bg-opacity-60"
        >
          <div className="bg-white relative md:w-3/12 p-8 rounded-md gap-6 flex flex-col">
            <h2 className="text-3xl mb-4 text-center ">Sign In</h2>

            <form className="grid gap-6">
              <div className="grid gap-2">
                <div className="flex items-center gap-4 opacity-75">
                  <FaUserAlt />
                  <input
                    placeholder="Username"
                    className="flex items-center text-xl border-0 outline-0 bg-transparent"
                  />
                </div>

                <hr className="border-t-1 border-solid border-black" />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center gap-4 opacity-75">
                  <RiLockPasswordFill />
                  <input
                    type="password"
                    placeholder="Password"
                    className="flex items-center text-xl border-0 outline-0 bg-transparent"
                  />
                </div>

                <hr className="border-t-1 border-solid border-black" />
              </div>
              <button
                title="Sign In"
                className="border mx-auto w-5/12 border-black transition-all duration-300 rounded py-1 px-3 hover:bg-gray-200"
              >
                Sign In
              </button>
            </form>
            <button
              title="Close"
              onClick={onClose}
              className="text-blue-500 hover:underline absolute right-4 top-4"
            >
              <IoMdClose />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignInModal;
