import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    Standards: "SSC",
    Institute: "Sasi Institutes",
    Year: "2019 - 2020",
    Percentage: ["75%"],
  },
  {
    Standards: "Intermediate",
    Institute: "Sasi Institutes",
    Year: "2020 - 2022",
    Percentage: ["86.2%"],
  },
  {
    Standards: "B.Tech in Information Technology",
    Institute: "Sasi Institutes",
    Year: "2022 - Present",
    Percentage: ["Currently pursuing with a CGPA of 8.0"],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between max-w-[900px] mx-auto space-y-4">
      {experiences.map((experience, index) => {
        return (
          <>
            <div className="py-4 px-6 bg-gray-800 rounded-lg">
              <SingleExperience key={index} experience={experience} />
            </div>
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
