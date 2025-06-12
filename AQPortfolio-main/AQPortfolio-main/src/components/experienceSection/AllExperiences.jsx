import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End",
    responsibilities: [
      "Implementing reusable components.",
      "Build responsive UIs using React and Tailwind CSS.",
      "Optimize application performance and loading speed.",
      "Enhance user experience with intuitive design improvements.",
    ],
  },
  {
    job: "Back-end",
    responsibilities: [
      "Design and build RESTful APIs using Spring Boot.",
      "Implement secure authentication and data handling logic.",
      "Optimize backend performance and database queries.",
      "Assist in debugging and maintaining server-side code.",
    ],
  },
  {
    job: "Cloud",
    responsibilities: [
      "Deploy and manage applications using AWS and Docker.",
      "Configure CI/CD pipelines for automated builds and deployments.",
      "Monitor cloud services for performance and reliability.",
      "Support backend scalability using cloud-native tools.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
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
