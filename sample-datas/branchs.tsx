import { typeBranchInformation, typeTeamMember } from "../types/team-types";

export const sampleMainBranchData:typeBranchInformation = {
    name: {
      kaff: "Boongi Kateme Dichee Uubariyoo",
      amh: "ቦንጋ ከተማ እድገት ድጋፍ ማስትባበርያ",
      eng: "Bonga Town Development Program"
    },
    description: {
      kaff: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore error, impedit dignissimos accusamus, perspiciatis aliquid harum voluptatem, qui sunt ut commodi eligendi aut fugit explicabo sequi veniam pariatur? Molestiae, facilis.",
      amh: " ዘባርቅ ምስጥርን ውድ መተግበሪያ ዕቅድ ገሰገሰ መጸሐፍ በመስኮት በመስኮት ቅኔዎቹ የጋሪው ጎሮምሳ ሌላውን እንደኛው የጋሪው ኢትዮጵያ ጎሮምሳ እንጂ ለሚገኙ ዕቅድ የኩሬውን በጠዋቱ ትክክል ቃላቶች የተሳካለት የኩሬውን ታታሪ በዘፈቀደ ኢትዮጵያ ኢትዮጵያ ኢትዮጵያ መብላት የጋሪው ዕቅድ እና ምድር ወይም ገሰገሰ ቀይሮ እሷ ለሱሪ እሷ መቋረጥ ኢትዮጵያ ከእትዬ የጋሪው የጋሪው ገሰገሰ ሌላውን ኢትዮጵያ ጎበዝ እሷ መጸሐፍ ወጣቶቹ መተግበሪያ ሲሻገር ኢትዮጵያ ብጠይቅ አጠናቀቁ መተግበሪያ መተግበሪያ ቃላቶች ወይም ነጥቡ በዘፈቀደ እንጂ በጠዋቱ ውድ ይቻላል ወይም በጊዜ ግጥም ቅኔዎቹ ቀይሮ ለገላገሉት ሌላውን እየቀደመን ብጠይቅ በመስኮት ትክክል እሷ የኩሬውን ገሰገሰ በዘፈቀደ ተረት ግጥም ቃላቶች ምስጥርን መተግበሪያ የጋሪው ብጠይቅ ሲሻገር እንደኛው በጠዋቱ መጸሐፍ በመስኮት ይቻላል ውድ አጠናቀቁ ለሱሪ የኩሬውን መመልከት መጸሐፍ ሲሻገር እኔ ቅኔዎቹ የኩሬውን ሲሻገር መብላት መቋረጥ ወይም ዕቅድ ብጠይቅ ግጥም መጸሐፍ ቃላቶች ነጥቡ መብላት ቅኔዎቹ እየቀደመን ከእትዬ ለሚገኙ ሲሻገር ውድ ምድር የተሳካለት ለገላገሉት የኩሬውን ወጣቶቹ",
      eng: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore error, impedit dignissimos accusamus, perspiciatis aliquid harum voluptatem, qui sunt ut commodi eligendi aut fugit explicabo sequi veniam pariatur? Molestiae, facilis."
    },
    contactInfo: {
      email: "bg@test.com",
      facebookLink: "https://www.facebook.com",
      telegramLink: "https://tg.com",
      phoneNumbers: [
        "+25111-232-23233",
        "+25111-232-23233"
      ]
    },
    members: [
      {
        sex: 'M', 
        name: {
          kaff: "Addeme Abebe",
          amh: "አደመ አበበ",
          eng: "Ademe Abebe"
        },
        occupation: {
          kaff: "Bonga city administrator",
          amh: "የቦንጋ ከተማ አስተዳዳ",
          eng: "Bonga city Governor"
        }
      },
      {
        sex: 'F',

        name: {
          kaff: "Belete Abebe",
          amh: "አደመ አበበ",
          eng: "Belete Abebe"
        },
        occupation: {
          kaff: "Bonga city administrator",
          amh: "የቦንጋ ከተማ አስተዳዳ",
          eng: "Bonga city Governor"
        }
      }
    ]
  };

  
export const sampleBranchsData: typeBranchInformation[] = [
  {
    name: {
      kaff: "Boongi Kateme Dichee Uubariyoo",
      amh: "ቦንጋ ከተማ እድገት ድጋፍ ማስትባበርያ",
      eng: "Bonga Town Development Program"
    },
    description: {
      kaff: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro possimus odio reiciendis. Atque vel incidunt sit deserunt? In, maxime temporibus? Sequi rerum eius accusamus veritatis quo qui voluptatem fugiat similique?",
      amh: "ዘባርቅ ምስጥርን ውድ መተግበሪያ ዕቅድ ገሰገሰ መጸሐፍ በመስኮት በመስኮት ቅኔዎቹ የጋሪው ጎሮምሳ ሌላውን እንደኛው የጋሪው ኢትዮጵያ ጎሮምሳ እንጂ ለሚገኙ ዕቅድ የኩሬውን በጠዋቱ ትክክል ቃላቶች የተሳካለት የኩሬውን ታታሪ በዘፈቀደ ኢትዮጵያ ኢትዮጵያ ኢትዮጵያ መብላት የጋሪው ዕቅድ እና ምድር ወይም ገሰገሰ ቀይሮ እሷ ለሱሪ እሷ መቋረጥ ኢትዮጵያ ከእትዬ የጋሪው የጋሪው ገሰገሰ ሌላውን ኢትዮጵያ ጎበዝ እሷ መጸሐፍ ወጣቶቹ መተግበሪያ ሲሻገር ኢትዮጵያ ብጠይቅ አጠናቀቁ መተግበሪያ መተግበሪያ ::",
      eng: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro possimus odio reiciendis. Atque vel incidunt sit deserunt? In, maxime temporibus? Sequi rerum eius accusamus veritatis quo qui voluptatem fugiat similique?"
    },
    contactInfo: {
      email: "bg@test.com",
      facebookLink: "https://www.facebook.com",
      telegramLink: "https://tg.com",
      phoneNumbers: [
        "+25111-232-23233",
        "+25111-232-23233"
      ]
    },
    members: [
      {
        sex: 'M',
        name: {
          kaff: "Addeme Abebe",
          amh: "አደመ አበበ",
          eng: "Ademe Abebe"
        },
        occupation: {
          kaff: "Bonga city administrator",
          amh: "የቦንጋ ከተማ አስተዳዳ",
          eng: "Bonga city Governor"
        }
      },
      {
        sex: 'F',
        name: {
          kaff: "Addeme Abebe",
          amh: "አደመ አበበ",
          eng: "Ademe Abebe"
        },
        occupation: {
          kaff: "Bonga city administrator",
          amh: "የቦንጋ ከተማ አስተዳዳ",
          eng: "Bonga city Governor"
        }
      },
      {
        sex: 'M',
        name: {
          kaff: "Addeme Abebe",
          amh: "አደመ አበበ",
          eng: "Ademe Abebe"
        },
        occupation: {
          kaff: "Bonga city administrator",
          amh: "የቦንጋ ከተማ አስተዳዳ",
          eng: "Bonga city Governor"
        }
      }
    ]
  },
  {
    name: {
      kaff: "Boongi Kateme Dichee Uubariyoo",
      amh: "ቦንጋ ከተማ እድገት ድጋፍ ማስትባበርያ",
      eng: "Bonga Town Development Program"
    },
    description: {
      kaff: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro possimus odio reiciendis. Atque vel incidunt sit deserunt? In, maxime temporibus? Sequi rerum eius accusamus veritatis quo qui voluptatem fugiat similique?",
      amh: "ዘባርቅ ምስጥርን ውድ መተግበሪያ ዕቅድ ገሰገሰ መጸሐፍ በመስኮት በመስኮት ቅኔዎቹ የጋሪው ጎሮምሳ ሌላውን እንደኛው የጋሪው ኢትዮጵያ ጎሮምሳ እንጂ ለሚገኙ ዕቅድ የኩሬውን በጠዋቱ ትክክል ቃላቶች የተሳካለት የኩሬውን ታታሪ በዘፈቀደ ኢትዮጵያ ኢትዮጵያ ኢትዮጵያ መብላት የጋሪው ዕቅድ እና ምድር ወይም ገሰገሰ ቀይሮ እሷ ለሱሪ እሷ መቋረጥ ኢትዮጵያ ከእትዬ የጋሪው የጋሪው ገሰገሰ ሌላውን ኢትዮጵያ ጎበዝ እሷ መጸሐፍ ወጣቶቹ መተግበሪያ ሲሻገር ኢትዮጵያ ብጠይቅ አጠናቀቁ መተግበሪያ መተግበሪያ ::",
      eng: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro possimus odio reiciendis. Atque vel incidunt sit deserunt? In, maxime temporibus? Sequi rerum eius accusamus veritatis quo qui voluptatem fugiat similique?"
    },
    contactInfo: {
      email: "bg@test.com",
      facebookLink: "https://www.facebook.com",
      telegramLink: "https://tg.com",
      phoneNumbers: [
        "+25111-232-23233",
        "+25111-232-23233"
      ]
    },
    members: [
      {
        sex: 'F',
        name: {
          kaff: "Addeme Abebe",
          amh: "አደመ አበበ",
          eng: "Ademe Abebe"
        },
        occupation: {
          kaff: "Bonga city administrator",
          amh: "የቦንጋ ከተማ አስተዳዳ",
          eng: "Bonga city Governor"
        }
      },
      {
        sex: 'M',
        name: {
          kaff: "Addeme Abebe",
          amh: "አደመ አበበ",
          eng: "Ademe Abebe"
        },
        occupation: {
          kaff: "Bonga city administrator",
          amh: "የቦንጋ ከተማ አስተዳዳ",
          eng: "Bonga city Governor"
        }
      },
      {
        sex: 'M',
        name: {
          kaff: "Addeme Abebe",
          amh: "አደመ አበበ",
          eng: "Ademe Abebe"
        },
        occupation: {
          kaff: "Bonga city administrator",
          amh: "የቦንጋ ከተማ አስተዳዳ",
          eng: "Bonga city Governor"
        }
      }
    ]
  },
   
]

