"use client";
import { motion } from "framer-motion";
import { BiSolidCarWash } from "react-icons/bi";
import {
  FaToilet,
  FaWindowRestore,
} from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { GiFloorPolisher, GiSofa } from "react-icons/gi";
import { PiBuildingOfficeBold, PiOfficeChairFill, PiOven } from "react-icons/pi";

const icons = [
  { id: 1, icon: <FaKitchenSet size={70} />, label: "Kitchen" },
  { id: 2, icon: <FaWindowRestore size={70} />, label: "Windows" },
  { id: 3, icon: <FaToilet size={70} />, label: "Toilet" },
  { id: 4, icon: <PiOven size={70} />, label: "Oven" },
  { id: 5, icon: <GiSofa size={70} />, label: "Sofa" },
  { id: 6, icon: <GiFloorPolisher size={70} />, label: "Floor polish" },
  { id: 7, icon: <PiBuildingOfficeBold size={70} />, label: "Buildings" },
  { id: 8, icon: <BiSolidCarWash size={70} />, label: "Car Inside\nOutside" },
  { id: 9, icon: <PiOfficeChairFill size={70} />, label: "Office" },
];

// Define animation of each icon
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
    <div className="flex flex-col justify-center md:flex-row items-center gap-12 py-10">
      {icons.map((item, index) => (
        <motion.div
          key={item.id}
          title={item.label}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          transition={{
            delay: index * 0.4, // delay each icon's animation
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="text-gray-500 text-2xl sm:text-4xl"
        >
          {item.icon}
          <div className="text-xl sm:text-2xl mb-2 whitespace-pre-line">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
}