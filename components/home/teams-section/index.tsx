import React from "react";
import { Container } from "react-bootstrap";
import {
    sampleMainBranchData,
    sampleBranchsData,
} from "../../../sample-datas/branchs";
import {
    ORGANIZERS_DESCRIPTION_TRANSLATIONS,
    TEAM_MEMBERS_LABEL_TRANSLATIONS,
} from "../../../translation-handlers/translations/teams_section_tranlations";
import { useTranslationState } from "../../../translation-hooks";
import { typeBranchInformation } from "../../../types/team-types";
import { TeamBranchInformation } from "./TeamBranchInformation";
const TeamsSection = () => {
    const selectedLanguage = useTranslationState().selectedLanguage;

    return (
        <section className="bg-second">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                        {TEAM_MEMBERS_LABEL_TRANSLATIONS[selectedLanguage]}
                    </h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        {ORGANIZERS_DESCRIPTION_TRANSLATIONS[selectedLanguage]}
                    </p>
                </div>

                <div className="flex space-x-20 justify-center ">
                    {sampleBranchsData.map((branchInformation, index) => (
                        <TeamBranchInformation
                            key={index}
                            branchInformations={branchInformation}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamsSection;
