import React from "react";
import { Container } from "react-bootstrap";
import { TEAM_MEMBERS_LABEL_TRANSLATIONS } from "../../../translation-handlers/translations/teams_section_tranlations";
import {
    COLLECTED_AMOUNT_STATICS_LABEL_TRANSLATIONS,
    PARTICIPANTS_STATICS_LABEL_TRANSLATIONS,
    PROMISE_AMOUNT_STATICS_LABEL_TRANSLATIONS,
    STATICS_LABEL_TRANSLATIONS,
} from "../../../translation-handlers/translations/teams_starics_tranlations";
import { useTranslationState } from "../../../translation-hooks";
const StaticsSection = () => {
    const selectedLanguage = useTranslationState().selectedLanguage;

    return (
        <section className="bg-second py-4">
            <Container>
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <div className="mx-auto text-center ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                            {STATICS_LABEL_TRANSLATIONS[selectedLanguage]}
                        </h2>
                    </div>
                    <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3">
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl text-first font-extrabold">
                                7K+
                            </dt>
                            <dd className="font-light text-lg text-gray-500 dark:text-gray-400">
                                {
                                    PARTICIPANTS_STATICS_LABEL_TRANSLATIONS[
                                        selectedLanguage
                                    ]
                                }
                            </dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl  text-first font-extrabold">
                                100M+
                            </dt>
                            <dd className="font-light text-lg text-gray-500  dark:text-gray-400">
                                {
                                    COLLECTED_AMOUNT_STATICS_LABEL_TRANSLATIONS[
                                        selectedLanguage
                                    ]
                                }
                            </dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl  text-first font-extrabold">
                                400M+
                            </dt>
                            <dd className="font-light text-lg text-gray-500 dark:text-gray-400">
                                {
                                    PROMISE_AMOUNT_STATICS_LABEL_TRANSLATIONS[
                                        selectedLanguage
                                    ]
                                }
                            </dd>
                        </div>
                    </dl>
                </div>
            </Container>
        </section>
    );
};

export default StaticsSection;
