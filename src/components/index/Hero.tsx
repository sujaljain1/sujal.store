import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import SocialIcon from "@/components/SocialIcon";

export default function Hero({ inView, descRef }: { inView: boolean, descRef: any }) {
  return (
    <>
      <section className="max-w-4xl w-full flex flex-col mx-auto pt-44">
        <motion.div
          className="relative sm:p-12 p-6 w-full flex flex-col bg-gradient-to-br from-primary to to-secondary rounded-lg border-1 border-accent shadow-2xl shadow-background"
          initial={{ transform: 'translateY(30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
          ref={descRef}
        >
          <h1 className="font-leaguespartan font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-text">
            Hey, I&apos;m Sujal<span className="sm:hidden inline-block animate-wave ml-2">👋</span><span className="font-leaguespartan font-bold text-xl text-text brightness-50 italic sm:inline flex"> .sujal. on discord</span><span className="sm:inline-block hidden animate-wave ml-2">👋</span>
          </h1>
          <p className="font-leaguespartan font-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg text-text">
            {inView &&
              <Typewriter
                options={{
                  delay: 30,
                  strings: ["I'm an 18 year old computer science student"],
                  loop: false,
                  autoStart: true,
                  deleteSpeed: 604800000,
                }}
              />}
          </p>
          <ul className="flex flex-row flex-wrap gap-2 mt-2">

            <SocialIcon
              url="https://github.com/sujaljain1"
              icon={<svg role="img" className="h-7 w-7 fill-[#ffffff]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>}
              delay={0.5}
            />
            <SocialIcon
              url="https://open.spotify.com/user/sujal200619?si=3ca7d208e6454caa"
              icon={<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="#6be3a2"></circle><path fill="#324561" d="M35.643,21.502c-0.155,0-0.313-0.036-0.461-0.113c-6.745-3.517-14.513-4.338-21.873-2.308	c-0.533,0.147-1.083-0.166-1.229-0.698s0.166-1.083,0.698-1.229c7.847-2.164,16.134-1.29,23.328,2.462	c0.49,0.255,0.68,0.859,0.425,1.349C36.352,21.307,36.004,21.502,35.643,21.502z"></path><path fill="#324561" d="M33.055,27.272c-0.153,0-0.309-0.035-0.455-0.11c-5.427-2.78-11.677-3.455-17.603-1.901	c-0.533,0.142-1.081-0.179-1.221-0.713c-0.141-0.534,0.179-1.081,0.713-1.221c6.398-1.68,13.154-0.95,19.022,2.056	c0.491,0.252,0.686,0.854,0.434,1.346C33.769,27.073,33.418,27.272,33.055,27.272z"></path><path fill="#324561" d="M30.354,32.938c-0.147,0-0.298-0.033-0.439-0.103c-4.056-1.992-8.722-2.51-13.13-1.462	c-0.543,0.125-1.078-0.205-1.204-0.742c-0.128-0.537,0.204-1.076,0.741-1.204c4.865-1.153,10.005-0.582,14.474,1.613	c0.496,0.243,0.7,0.842,0.457,1.338C31.078,32.733,30.723,32.938,30.354,32.938z"></path>
              </svg>}
              delay={0.6}
            />
            <SocialIcon
              url="mailto:sujal200619@gmail.com"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-white' viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" /><path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" /></svg>}
              delay={0.7}
            />
          </ul>
        </motion.div>
      </section>
    </>
  );
}
