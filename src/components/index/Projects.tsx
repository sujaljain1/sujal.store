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
            url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGUyMmgxbWxsdXVtcDF3M2J2cDIwaWhwOW11NDI3a2h2OHI1NXNxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"
            title="Discord listing bot"
            description="I'm working on a discord product listing bot for a friend who runs a small buisness on discord :D"
            image="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/bnzq10sh.png"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://sky.coflnet.com/"
            title="Minecraft auction house flipper"
            description="I made a pretty basic mincraft mod that mainly relies on COFL mod which tracks skyblock auction house prices through skyblock api."
            image="https://media.discordapp.net/attachments/1229593033138241650/1230810792341803028/image.png?ex=6634ace0&is=662237e0&hm=2ff0e160662664e66b31bd730efb1fc5ba12e1dc53bd5de25350df660a2d5a8c&=&format=webp&quality=lossless&width=1185&height=622"
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          
        </ul>
      </section>
    </>
  );
}
