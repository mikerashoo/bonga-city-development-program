import React from "react";
import { useTranslationState } from "../../../translation-hooks";
import { typeTeamMember } from "../../../types/team-types";

interface TeamMemberProps {
    teamMemberInformation: typeTeamMember;
}
export const TeamMemberProfile: React.FC<TeamMemberProps> = ({
    teamMemberInformation,
}): JSX.Element => {
    const selectedLanguage = useTranslationState().selectedLanguage;
    return (
        <div className="m-auto py-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100">
            <div className="flex flex-col items-center">
                <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={
                        teamMemberInformation.sex == "M"
                            ? "/imgs/male-avator.png"
                            : "/imgs/female-avator.png"
                    }
                    alt={teamMemberInformation.name[selectedLanguage]}
                />
                <h3 className=" text-lg font-bold tracking-tight text-gray-900 ">
                    <a href="#">
                        {teamMemberInformation.name[selectedLanguage]}
                    </a>
                </h3>
                <p>{teamMemberInformation.occupation[selectedLanguage]}</p>
            </div>
        </div>
    );
};

export default TeamMemberProfile;
