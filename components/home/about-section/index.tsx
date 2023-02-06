import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import {
    GOV_PRIVATE_LABEL,
    PROJECT_CONTENTS_TITLES,
    PROJECT_DESCRIPTIONS,
    PROJECT_TITLE,
} from "../../../translation-handlers/translations/general";
import {
    Activity,
    Check2Circle,
    FlagFill,
    PersonLinesFill,
} from "react-bootstrap-icons";
import { useTranslationState } from "../../../translation-hooks";
import {
    PROJECT_IMPLEMENTATION_TRANSLATIONS,
    PROJECT_SITE_TRANSLATIONS,
} from "../../../translation-handlers/translations/about_section_translations";
import CustomDivider from "../../widgets/CustomDivider";
const AboutSection = () => {
    const selectedLanguage = useTranslationState().selectedLanguage;

    return (
        <div className=" w-full p-32 justify-items-center text-center">
            <div className="grid justify-items-center w-full mb-8">
                <p className="text-first text-lg font-bold">
                    {PROJECT_TITLE[selectedLanguage]}
                </p>

                <article className="w-full prose prose-green">
                    <h1 className=""> DP-Neighbourhood Development Plan</h1>
                    <p>{PROJECT_SITE_TRANSLATIONS[selectedLanguage]}</p>
                </article>
            </div>
            <CustomDivider />
            <div className="flex flex-row justify-items-center h-full w-full space-x-20 my-16">
                <ProjectDescriptionCard type="gov" />
                <div className="items-center h-fit pt-40">
                    <p>
                        <span>&#8592;</span> What to be done{" "}
                        <span>&#8594;</span>{" "}
                    </p>
                </div>
                <ProjectDescriptionCard type="private" />
            </div>
            <CustomDivider />
            <div className="grid justify-items-center w-full">
                <article className=" text-center prose prose-strong:last-of-type:p">
                    <p className="">
                        {PROJECT_IMPLEMENTATION_TRANSLATIONS[selectedLanguage]}
                    </p>
                </article>
            </div>
        </div>
    );
};

const ProjectDescriptionCard = ({ type }) => {
    const selectedLanguage = useTranslationState().selectedLanguage;
    let descriptions =
        type == "gov"
            ? [...PROJECT_DESCRIPTIONS.gov]
            : [...PROJECT_DESCRIPTIONS.private];
    let title =
        type == "gov"
            ? GOV_PRIVATE_LABEL.gov[selectedLanguage]
            : GOV_PRIVATE_LABEL.private[selectedLanguage];

    return (
        <div className="flex-1 ">
            <span className="p-4 mr-2 w-fit rounded-full border bg-second">
                {type == "gov" ? (
                    <FlagFill className="inline" size={24} />
                ) : (
                    <PersonLinesFill className="inline" size={24} />
                )}{" "}
            </span>
            <div className="w-full prose mt-4">
                <h2 className=""> {title} </h2>
            </div>
            <div className="mt-2">
                {descriptions.map((description) => (
                    <div className="flex justify-items-center mt-4 drop-shadow-sm">
                        <div className="flex-none p-2 bg-first rounded-l-lg">
                            <Check2Circle size={50} />
                        </div>
                        <p className=" grow  bg-slate-200 text-left p-4 rounded-r-lg">
                            {description[selectedLanguage]}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutSection;
