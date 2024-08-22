"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full">
            <div className="mt-20 z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">If you can think it, <br />
                        <TypeAnimation
                            sequence={[
                                'you can program it',
                                1000,
                                'you can optimize it',
                                1000,
                                'you can implement it',
                                1000,
                                'you can develop it',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    As a full-stack developer, I specialize in integrating design and functionality on both the frontend and backend to create complete and efficient digital solutions. My goal is to deliver seamless and robust user experiences, ensuring that every component of the application works in perfect harmony.
                    </p>

                    <div className="mb-20 flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            see projects
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            contact me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;