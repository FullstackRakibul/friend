import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const BirthdayPage = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { width, height } = useWindowSize();

  const handleShowLetter = () => {
    setShowLetter(true);
  };

  // Initialize YouTube Player
  const onIframeLoad = (event) => {
    const iframe = event.target;
    const player = new window.YT.Player(iframe, {
      events: {
        onReady: () => setPlayer(player),
      },
    });
  };

  // Play or Pause Video
  const togglePlayback = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-purple-200 text-gray-800 font-sans p-4">
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
        <motion.a
          href="#poem"
          whileHover={{ scale: 1.05, backgroundColor: "#F59E0B" }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg font-bold text-center transition-transform duration-300"
        >
          🎶 নাও , একটু গান শোনো...
        </motion.a>
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

      {/* Embedded YouTube Song */}
      <section
        id="poem"
        className="mt-16 w-full max-w-md bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative">
          {/* Iframe */}
          <iframe
            id="youtube-player"
            src="https://www.youtube.com/embed/NN_uehspVSc?enablejsapi=1"
            title="Birthday Song"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowFullScreen
            className="w-full h-48 md:h-64"
            onLoad={onIframeLoad}
          ></iframe>

          {/* Overlay Controls */}
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 hover:bg-opacity-0 transition duration-300">
            <button
              onClick={togglePlayback}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md font-bold text-sm"
            >
              {isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>
          </div>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold">🎶 Birthday Song</h3>
          <p className="text-sm text-gray-600">
            Enjoy this special song just for you!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-sm text-center text-gray-500">
        ।। সেঁজু 💖 | Happy Birthday!
      </footer>
    </div>
  );
};

export default BirthdayPage;
