import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const BirthdayPage = () => {
  const [showLetter, setShowLetter] = useState(false);
  const { width, height } = useWindowSize();

  const handleShowLetter = () => {
    setShowLetter(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-purple-200 text-gray-800 font-sans p-4">
      {/* Hidden YouTube Player for Background Music */}
      <iframe
        src="https://www.youtube.com/embed/NN_uehspVSc?autoplay=1&loop=1&playlist=NN_uehspVSc"
        allow="autoplay"
        style={{ display: "none" }}
        title="Background Music"
      ></iframe>

      {/* Header */}
      <Confetti width={width} height={height} numberOfPieces={100} />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          🎉 Happy Birthday 🎂
        </h1>
        <p className="text-base font-light">
          বন্ধুউউ, জন্মদিনের শুভেচ্ছা নাও.. 💕
        </p>
      </motion.div>

      {/* Cake Animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
        }}
        className="text-6xl mt-10"
      >
        🎂
      </motion.div>

      {/* Control Panel */}
      <div className="mt-10 w-full max-w-sm flex flex-col items-center space-y-4">
        <motion.button
          onClick={handleShowLetter}
          whileHover={{ scale: 1.05, backgroundColor: "#3B82F6" }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg font-bold transition-transform duration-300 font-anek "
        >
          📜 ওগো বন্ধু শোনো
        </motion.button>
      </div>

      {/* Special Letter */}
      {showLetter && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 w-full max-w-md bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-lg shadow-lg text-center"
        >
          <p className="text-lg">
            স্বর্গের পরী হবে সহচরী, দেবতা করিবে হৃদয় দান
          </p>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="mt-10 text-sm text-center text-gray-500">
        ।। সেঁজু 💖 | Happy Birthday!
      </footer>
    </div>
  );
};

export default BirthdayPage;
