import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "/Users/dhananjay/Code/Projects/dhananjayy.com/public/images/profile/IMG_1741.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>About Dhananjay</title>
        <meta name="description" content="Learn more about Dhananjay,a 21-year-old musician from Calicut, India. My musical roots run deep in the classical traditions of Carnatic singing, but my journey took an exciting turn when I fell in love with the Western guitar. Blending the soulful melodies of Carnatic with the contemporary vibe of the guitar has become my signature sound." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Bridging Traditions and Innovations"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium ">
              Hey there! I&apos;m <strong>Dhananjay K Prasad</strong>, a 21-year-old musician from Calicut, India. My musical roots run deep in the classical traditions of Carnatic singing, but my journey took an exciting turn when I fell in love with the Western guitar. Blending the soulful melodies of Carnatic with the contemporary vibe of the guitar has become my signature sound.
              </p>
              <p className="my-4 font-medium">
              Trained in both worlds, I navigate the intricate nuances of Carnatic music while expressing myself through the strings of the Western guitar. It's a fusion that defines who I am as a musician, seamlessly blending tradition with innovation.
              </p>
              <p className="font-medium">
              At 17, I dove into music production, bringing my songs to life. This marked the beginning of my identity as a songwriter, weaving together the threads of tradition and modernity. Join me on this sonic journey where every note tells a story, and tradition harmonizes with innovation.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Dhananjay"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
   
            </div>

        </Layout>
      </main>
    </>
  );
}
