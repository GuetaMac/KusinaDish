// SAMPLE lang ito para hindi mukhang walang laman ang app habang nag-e-encode ka.
// Kapag may sarili ka nang mga recipe sa recipes.js, burahin mo ang file na ito
// at tanggalin ang import nito sa App.jsx.

export const samples = [
  {
    id: "chicken-adobo",
    title: "Chicken Adobo",
    description:
      "Manok na binabad sa toyo at oyster sauce, tapos nilaga sa suka. Panalo sa kanin.",
    category: "Ulam",
    tags: ["manok", "adobo", "toyo", "oyster sauce", "suka"],
    image: "/images/adobo.jpg",
    cookTime: 45,
    servings: 4,
    difficulty: "Madali",
    ingredients: [
      { name: "manok", amount: 1, unit: "kilo", note: "hiniwa" },
      { name: "toyo", amount: 0.5, unit: "tasa", note: "" },
      { name: "oyster sauce", amount: null, unit: "", note: "" },
      { name: "suka", amount: 0.25, unit: "tasa", note: "" },
      { name: "mantika", amount: null, unit: "", note: "pang-gisa" },
      { name: "bawang", amount: 1, unit: "ulo", note: "dinikdik" },
      { name: "sibuyas", amount: 1, unit: "pc", note: "hiniwa" },
      { name: "dahon ng laurel", amount: 2, unit: "pcs", note: "" },
      { name: "paminta", amount: 1, unit: "tsp", note: "buo" },
      { name: "tubig", amount: 1, unit: "tasa", note: "" },
      {
        name: "atsuete",
        amount: null,
        unit: "",
        note: "optional, ibabad sa tubig at lamasin para pumula",
      },
    ],
    steps: [
      {
        title: "Ihanda muna natin, bebe.",
        text: "Hi bebe. Hiwain mo na yung manok, dikdikin yung bawang, at hiwain yung sibuyas para hindi tayo nagmamadali mamaya. Kung gagamit ka ng atsuete, ibabad mo na rin muna sa kaunting tubig. Hahaha.",
      },
      {
        title: "Ibabad natin sa toyo.",
        text: "Sa malaking bowl, ilagay mo yung manok, toyo, at oyster sauce. Haluin mo tapos hayaan mong magbabad ng mga 15 minuto. Habang naghihintay ka, pwede mo muna akong kausapin.",
      },
      {
        title: "Kulayan natin, optional.",
        text: "Kung gusto mong mapula yung sabaw, lamasin mo yung binabad na atsuete sa tubig hanggang lumabas yung kulay. Salain mo tapos itabi mo muna yung pulang tubig. Kapag ayaw mo, skip mo na 'to, bebe.",
      },
      {
        title: "Igisa muna natin, bebe.",
        text: "Painitin mo yung mantika sa kaldero tapos igisa mo yung bawang at sibuyas hanggang bumango at lumambot. Dyan nagsisimula yung sarap, kaya huwag mong lalaktawan 'to ha.",
      },
      {
        title: "Pakuluan na natin.",
        text: "Ilagay mo yung manok kasama yung pinagbabaran sa kaldero na may gisa. Isunod yung suka, laurel, paminta, at tubig. Pakuluan mo, tapos huwag mong haluin hangga't hindi pa kumukulo, para hindi lumakas yung amoy ng suka. Sundin mo 'to ha, bebe.",
      },
      {
        title: "Hinaan ang apoy.",
        text: "Takpan mo tapos hayaan mong kumulo nang mahina hanggang lumambot yung manok at lumapot nang konti yung sabaw. Huwag mong iiwan nang sobrang tagal, baka masunog, tapos ako pa ang sisihin mo.",
      },
      {
        title: "Ilagay ang atsuete.",
        text: "Kung gumamit ka ng atsuete, ibuhos mo na yung pulang tubig at haluin nang dahan-dahan. Dyan na mamumula yung sabaw, bebe.",
      },
      {
        title: "Taste test.",
        text: "Tikman mo na. Kung kulang sa alat, dagdagan mo ng toyo. Kung kulang sa asim, konting suka. Kung sakto na, wag ka nang mag-experiment diyan.",
      },
      {
        title: "Tapos na.",
        text: "Patayin mo na yung apoy at ihain na natin habang mainit. Dapat may kanin ka, bebe. Hindi pwedeng puro manok lang. Enjoy your meal, bebe.",
      },
    ],
  },
  {
    id: "tinolang-manok",
    sample: true,
    title: "Tinolang Manok",
    description:
      "Malinamnam na sabaw ng manok na may luya, sayote, at dahon ng sili.",
    category: "Sabaw",
    tags: ["manok", "luya", "sayote", "sabaw"],
    image: "/images/tinola.jpg",
    cookTime: 50,
    servings: 4,
    difficulty: "Madali",
    ingredients: [
      { name: "manok", amount: 1, unit: "kilo", note: "hiniwa" },
      {
        name: "luya",
        amount: 1,
        unit: "pc",
        note: "sinlaki ng hinlalaki, hiniwang manipis",
      },
      { name: "sibuyas", amount: 1, unit: "pc", note: "hiniwa" },
      { name: "bawang", amount: 3, unit: "butil", note: "dinikdik" },
      { name: "sayote", amount: 1, unit: "pc", note: "hiniwa" },
      { name: "dahon ng sili", amount: 1, unit: "tali", note: "" },
      { name: "patis", amount: 2, unit: "tbsp", note: "" },
      { name: "tubig", amount: 6, unit: "tasa", note: "" },
    ],
    steps: [
      {
        title: "Igisa ang pampalasa",
        text: "Igisa ang bawang, sibuyas, at luya sa kaunting mantika hanggang bumango.",
      },
      {
        title: "Iluto ang manok",
        text: "Ilagay ang manok at haluin hanggang mag-iba ang kulay. Timplahan ng patis.",
      },
      {
        title: "Pakuluan",
        text: "Buhusan ng tubig at pakuluan. Hinaan ang apoy at hayaang kumulo hanggang lumambot ang manok.",
      },
      {
        title: "Ilagay ang gulay",
        text: "Isunod ang sayote at lutuin hanggang lumambot. Bago patayin ang apoy, ilagay ang dahon ng sili.",
      },
    ],
  },
  {
    id: "turon",
    sample: true,
    title: "Turon",
    description:
      "Saging na saba na binalot sa lumpia wrapper at pinirito hanggang malutong at may karamelo.",
    category: "Merienda",
    tags: ["saging", "matamis", "prito"],
    image: "/images/turon.jpg",
    cookTime: 25,
    servings: 6,
    difficulty: "Madali",
    ingredients: [
      {
        name: "saging na saba",
        amount: 6,
        unit: "pcs",
        note: "hiniwa nang pahaba sa dalawa",
      },
      { name: "lumpia wrapper", amount: 12, unit: "pcs", note: "" },
      { name: "brown sugar", amount: 0.5, unit: "tasa", note: "" },
      { name: "mantika", amount: null, unit: "", note: "pangprito" },
    ],
    steps: [
      {
        title: "Balutin ang saging",
        text: "Igulong ang saging sa brown sugar, ilagay sa wrapper, tiklupin ang gilid at balutin nang mahigpit. Basain ng tubig ang dulo para dumikit.",
      },
      {
        title: "Painitin ang mantika",
        text: "Painitin ang mantika sa katamtamang apoy. Dapat hindi masyadong mainit para hindi masunog ang asukal.",
      },
      {
        title: "Iprito",
        text: "Iprito ang turon hanggang gintong kayumanggi at malutong, mga 2 hanggang 3 minuto bawat side.",
      },
      {
        title: "Patuluin at ihain",
        text: "Ilagay sa papel na pampatuyo ng mantika at ihain habang mainit.",
      },
    ],
  },
];
