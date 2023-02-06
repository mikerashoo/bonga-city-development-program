import Image from "next/image";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import {
    Check2Circle,
    PersonBadgeFill,
    PersonCheck,
    PersonCheckFill,
    PiggyBank,
} from "react-bootstrap-icons";
import useDownloader from "react-use-downloader";
import { supportBanks } from "../../../sample-datas/banks";
import {
    BANK_ACCOUNTS_DESCRIPTION_TRANSLATIONS,
    BANK_ACCOUNTS_TITLE_TRANSLATIONS,
    LABEL_AGREEMENT_PAPER_TRANSLATIONS,
    LABEL_EMPLOYEE_DESCRIPTION_TRANSLATIONS,
    LABEL_EMPLOYEE_FORM_TITLE_TRANSLATIONS,
    LABEL_EMPLOYEE_TRANSLATIONS,
    SUPPORTED_SECTION_LABEL_TRANSLATIONS,
} from "../../../translation-handlers/translations/support_section_tranlations";
import { STATICS_LABEL_TRANSLATIONS } from "../../../translation-handlers/translations/teams_starics_tranlations";
import { useTranslationState } from "../../../translation-hooks";

function ApplySection() {
    const selectedLanguage = useTranslationState().selectedLanguage;
    const { size, elapsed, percentage, download, cancel, error, isInProgress } =
        useDownloader();

    const fileUrl = "/agreement-form.pdf";
    const filename = "agreement-form.pdf";
    return (
        <div className="py-20">
            <Container>
                <div className="max-w-screen-xl px-4 py-4 mx-auto text-center lg:px-6">
                    <div className="mx-auto text-center mb-16">
                        <h2 className=" text-4xl tracking-tight font-extrabold text-gray-900 ">
                            {
                                SUPPORTED_SECTION_LABEL_TRANSLATIONS[
                                    selectedLanguage
                                ]
                            }
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-20">
                        <div className="flex flex-col items-center justify-center px-6">
                            <div className="w-full p-4 bg-gray-100 border border-green-600 rounded-lg shadow">
                                <div className="mx-auto mb-4 ">
                                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-first ">
                                        <PersonCheckFill
                                            color="white"
                                            className="rounded-full bg-first inline p-2 mr-2"
                                            size={40}
                                        />

                                        {
                                            LABEL_EMPLOYEE_TRANSLATIONS[
                                                selectedLanguage
                                            ]
                                        }
                                    </h2>
                                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                        {
                                            LABEL_EMPLOYEE_DESCRIPTION_TRANSLATIONS[
                                                selectedLanguage
                                            ]
                                        }
                                    </p>

                                    <Button
                                        className="bg-secondary my-2"
                                        onClick={() =>
                                            download(fileUrl, filename)
                                        }
                                    >
                                        Click to download the agreement file
                                    </Button>
                                </div>
                                <div className="space-y-4 md:space-y-6">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight ">
                                        {
                                            LABEL_EMPLOYEE_FORM_TITLE_TRANSLATIONS[
                                                selectedLanguage
                                            ]
                                        }
                                    </h1>
                                    <Form className="text-start">
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Label>
                                                Your Full Name
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter email"
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPhone"
                                        >
                                            <Form.Label>
                                                Phone Number
                                            </Form.Label>
                                            <Form.Control
                                                type="tel"
                                                placeholder="Enter phone number here"
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Label>
                                                Email address
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            controlId="formFile"
                                            className="mb-3"
                                        >
                                            <Form.Label>
                                                {
                                                    LABEL_AGREEMENT_PAPER_TRANSLATIONS[
                                                        selectedLanguage
                                                    ]
                                                }
                                            </Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>

                                        <Button className="bg-first">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                            <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-first ">
                                <PiggyBank
                                    color="white"
                                    className="rounded-full bg-first inline p-2 mr-2"
                                    size={40}
                                />

                                {
                                    BANK_ACCOUNTS_TITLE_TRANSLATIONS[
                                        selectedLanguage
                                    ]
                                }
                            </h2>
                            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                {
                                    BANK_ACCOUNTS_DESCRIPTION_TRANSLATIONS[
                                        selectedLanguage
                                    ]
                                }
                            </p>
                            <div className="pl-8">
                                {supportBanks.map((bankInformation) => (
                                    <div className="flex justify-items-center mt-4 ">
                                        <div className="flex-none p-2">
                                            <Image
                                                src={bankInformation.imgSrc}
                                                alt={
                                                    bankInformation.name[
                                                        selectedLanguage
                                                    ]
                                                }
                                                width={60}
                                                height={60}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className=" grow text-left p-4 ">
                                            <p className=" text-lg ">
                                                {
                                                    bankInformation.name[
                                                        selectedLanguage
                                                    ]
                                                }
                                            </p>
                                            <p className=" ">
                                                {bankInformation.account}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ApplySection;
