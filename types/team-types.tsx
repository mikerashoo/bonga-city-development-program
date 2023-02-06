import { typeTranslation } from "./common-types"

export type typeTeamMember = {
    name: typeTranslation,
    sex: string,

    occupation: typeTranslation,
    imgUrl?: string,
}

export type typeBranchContantInfo = {
    phoneNumbers: string[],
    facebookLink: string,
    telegramLink: string, 
    email: string,
}


export type typeBranchInformation = {
    name: typeTranslation,
    description: typeTranslation,
    contactInfo: typeBranchContantInfo,
    members: typeTeamMember[]
}

