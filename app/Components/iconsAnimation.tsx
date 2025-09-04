"use client";
import { motion } from "framer-motion";
import { BiSolidCarWash } from "react-icons/bi";
import { FaToilet, FaWindowRestore } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { GiFloorPolisher, GiSofa } from "react-icons/gi";
import {
  PiBuildingOfficeBold,
  PiOfficeChairFill,
  PiOven,
} from "react-icons/pi";

const icons = [
  { id: 1, icon: <FaKitchenSet size={70} />, label: "Kuhinja" },
  { id: 2, icon: <FaWindowRestore size={70} />, label: "Prozori" },
  { id: 3, icon: <FaToilet size={70} />, label: "WC" },
  { id: 4, icon: <PiOven size={70} />, label: "Pećnica" },
  { id: 5, icon: <GiSofa size={70} />, label: "Sofa" },
  { id: 6, icon: <GiFloorPolisher size={70} />, label: "Poliranje podova" },
  { id: 7, icon: <PiBuildingOfficeBold size={70} />, label: "Zgrade" },
  { id: 8, icon: <BiSolidCarWash size={70} />, label: "Dubinsko pranje\nauta" },
  { id: 9, icon: <PiOfficeChairFill size={70} />, label: "Ured" },
];

const iconVariants = {
  initial: { scale: 1, opacity: 0.6 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

export default function IconRowAnimated() {
  return (
    <div className="flex flex-col justify-center lg:flex-row flex-wrap items-center gap-10 py-10 text-center">
      {icons.map((item, index) => (
        <motion.div
          key={item.id}
          title={item.label}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            delay: index * 0.4,
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="flex flex-col items-center justify-center text-gray-700 w-32 text-center"
        >
          {item.icon}
          <div className="text-base sm:text-lg mt-2 whitespace-pre-line">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
