import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Projects
        </motion.h1>
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <ProjectCard
            url="https://e-z.host"
            title="E-Z.Host"
            description="E-Z.Host is an easy to use and easy to integrate file sharing platform. It has plenty of domain options, tons of URL options, and an extensive embed editor."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/bnzq10sh.png"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://e-z.bio"
            title="E-Z.Bio"
            description="E-Z.Bio is a feature rich bio link platform with an easy to use interface and tons of customization options. You can have a full page setup within minutes."
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/jg8fu2hr.png"
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          
        </ul>
      </section>
    </>
  );
}
