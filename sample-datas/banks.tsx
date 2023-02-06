import { typeTranslation } from "../types/common-types";

export const supportBanks: typeBankInformation[] = [
    {
        name: {
            kaff: "Ethiopiye Nigid Baanko",
            amh: "የኢትዮጵያ ንግድ ባንክ",
            eng: "Ethiopian Commertial Bank",
        },
        account: "1000517858092",
        imgSrc: "/imgs/banks/cbe.jpeg",
    },
    {
        name: {
            kaff: "Daasheni Baanko",
            amh: "ዳሸን ባንክ",
            eng: "Dashen Bank",
        },
        account: "5104396191011",
        imgSrc: "/imgs/banks/dashen.png",
    },
    {
        name: {
            kaff: "Awaashi Baanko",
            amh: "አዋሽ ባንክ",
            eng: "Awaash Bank",
        },
        account: "013221063543200",
        imgSrc: "/imgs/banks/awash.png",
    },
];

type typeBankInformation = {
    name: typeTranslation;
    imgSrc: string;
    account: string;
};
