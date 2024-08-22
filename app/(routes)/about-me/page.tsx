"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import {CoverParticles} from "@/components/cover-particles"

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <CoverParticles />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    My{' '}
                    <span className="font-bold text-secondary">
                        professional career
                    </span>
                </h1>
                <CounterServices />

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;