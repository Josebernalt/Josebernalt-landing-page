"use client"
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import {CoverParticles} from "@/components/cover-particles"

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <CoverParticles/>
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-40 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        My{" "}
                        <span className="font-bold text-secondary">
                            services.
                        </span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">I offer Full Stack web and application development 
                        services, specialized in creating attractive and functional websites and applications. 
                        I use the latest technologies, such as HTML, CSS, JavaScript, React, Next.js, Node.js, 
                        Bootstrap, Tailwind, and MySQL, to design intuitive and responsive user interfaces that 
                        reflect my clients' brand identity and enhance their presence. online. Additionally, I have 
                        experience in JAVA, C#, and Git/GitHub, which allows me to manage projects efficiently and 
                        collaborate effectively in development teams.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">contac me</button>
                </div>

                {/* SLIDER */}
                <div className="pb-20">
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;