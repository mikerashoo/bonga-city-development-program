import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
    ArrowLeftSquare,
    ArrowRightSquare,
    ArrowRightSquareFill,
} from "react-bootstrap-icons";
import { TEAM_MEMBERS_LABEL_TRANSLATIONS } from "../../../translation-handlers/translations/teams_section_tranlations";
import { useTranslationState } from "../../../translation-hooks";
import { typeBranchInformation } from "../../../types/team-types";
import CustomDivider from "../../widgets/CustomDivider";
import { SocialMediaList } from "../../widgets/SocialMediaList";
import TeamMemberProfile from "./TeamMemberProfile";

interface BranchInfoProps {
    branchInformations: typeBranchInformation;
}
export const TeamBranchInformation: React.FC<BranchInfoProps> = ({
    branchInformations,
}): JSX.Element => {
    const [currentMembersIndex, setCurrentMembersIndex] = useState(0);
    const [currentMembers, setCurrentMembers] = useState([]);
    const selectedLanguage = useTranslationState().selectedLanguage;
    const members = branchInformations.members;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        updateMembers(0);
    }, []);

    const updateMembers = (startingIndex) => {
        if (startingIndex == members.length) return;
        let nextMembers = [];

        if (startingIndex + 2 > members.length - 1) {
            nextMembers = [...members.slice(startingIndex)];
        } else {
            nextMembers = [...members.slice(startingIndex, startingIndex + 2)];
        }
        setCurrentMembers(nextMembers);
        setCurrentMembersIndex(startingIndex);
    };
    const onArrowRightClicked = () => {
        console.log(members.length);
        console.log("current of Index", currentMembersIndex);
        if (currentMembersIndex == members.length - 1) return;
        let _nextIndex =
            currentMembersIndex + 2 > members.length - 1
                ? currentMembersIndex + 1
                : currentMembersIndex + 2;
        updateMembers(_nextIndex);
    };

    const onArrowLeftClicked = () => {
        if (currentMembersIndex == 0) return;

        let _nextIndex =
            currentMembersIndex - 2 > 0
                ? currentMembersIndex - 1
                : currentMembersIndex - 2;
        updateMembers(_nextIndex);
    };

    return (
        <div className="flex justify-center my-4">
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {branchInformations.name[selectedLanguage]}{" "}
                        {TEAM_MEMBERS_LABEL_TRANSLATIONS[selectedLanguage]}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex flex-wrap items-start place-content-start gap-4 gap-y-8 ">
                        {members.map((teamMember, index) => (
                            <TeamMemberProfile
                                key={index}
                                teamMemberInformation={teamMember}
                            />
                        ))}
                        {members.map((teamMember, index) => (
                            <TeamMemberProfile
                                key={index}
                                teamMemberInformation={teamMember}
                            />
                        ))}
                        {members.map((teamMember, index) => (
                            <TeamMemberProfile
                                key={index}
                                teamMemberInformation={teamMember}
                            />
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="bg-first p-4 ">
                    <h3 className="mb-4 text-2xl tracking-tight font-extrabold ">
                        {branchInformations.name[selectedLanguage]}
                    </h3>
                </div>

                <div className="p-6">
                    <p className="text-gray-700 text-base mb-4">
                        {branchInformations.description[selectedLanguage]}
                    </p>
                </div>
                <hr />
                <div className="grid grid-cols-2 py-2 justify-items-center items-center justify-center">
                    <SocialMediaList />
                    <div>
                        <Button variant="outline-success" onClick={handleShow}>
                            Members
                        </Button>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};
