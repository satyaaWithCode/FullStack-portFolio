import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Satya, a dedicated Java Full Stack Developer with a strong focus on backend development. 
        I specialize in Java, Spring Boot, and building scalable, 
        high-performance RESTful APIs and microservices. My expertise lies 
        in designing efficient backend architectures, integrating databases,
         and implementing secure authentication systems. 
         While I’m comfortable with front-end tools like React,
          my passion lies in crafting robust server-side logic and 
          deploying reliable backend systems. I'm also skilled in DevOps practices like Docker and CI/CD to streamline development and deployment. I believe in continuous learning and enjoy collaborating with others to build impactful backend solutions.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
