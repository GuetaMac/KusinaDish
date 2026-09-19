// src/data/recipes.js
// Isang recipe = isang object. Idagdag lang ang susunod na dish sa array.
//
// amount: null  => walang tiyak na dami (to taste / ayon sa gusto)

export const recipes = [
  {
    id: "sinigang-na-baboy",
    title: "Sinigang na Baboy",
    description:
      "Maasim at mainit na sabaw na may baboy at gulay. Bagay na bagay sa kanin.",
    category: "Sabaw",
    tags: ["baboy", "sabaw", "maasim"],
    image: "/images/sinigang.jpg",
    cookTime: 60,
    servings: 4,
    difficulty: "Madali",

    ingredients: [
      { name: "baboy", amount: 1, unit: "kilo", note: "" },
      { name: "sinigang mix", amount: 1, unit: "pack", note: "" },
      { name: "labanos", amount: 1, unit: "pc", note: "hiniwa" },
      { name: "talong", amount: 1, unit: "pc", note: "hiniwa" },
      { name: "kangkong", amount: 1, unit: "tali", note: "" },
      { name: "okra", amount: 5, unit: "pcs", note: "" },
      { name: "siling haba", amount: 2, unit: "pcs", note: "" },
      { name: "sibuyas", amount: 1, unit: "pc", note: "" },
      { name: "kamatis", amount: 2, unit: "pcs", note: "" },
      { name: "bawang", amount: null, unit: "", note: "" },
      { name: "tubig", amount: null, unit: "", note: "" },
      { name: "paminta", amount: null, unit: "", note: "ayon sa panlasa" },
      { name: "vetsin", amount: null, unit: "", note: "ayon sa panlasa" },
      { name: "patis", amount: null, unit: "", note: "ayon sa panlasa" },
    ],

    steps: [
      {
        title: "Ihanda muna natin, bebe.",
        text: "Hi bebe. Maghanda muna tayo ng lahat ng ingredients para hindi tayo mag-panic mamaya. Hahaha.",
      },
      {
        title: "Pakuluan na natin yung baboy.",
        text: "Bebe, ilagay mo yung baboy sa malaking pot tapos lagyan mo ng tubig. Pakuluan natin hanggang lumambot yung meat. Habang naghihintay ka, pwede mo muna akong kausapin.",
      },
      {
        title: "Lagyan na natin ng pampalasa.",
        text: "Kapag medyo malambot na yung baboy, ilagay mo na yung sibuyas, bawang at kamatis. Hayaan mong kumulo nang ilang minutes para lumabas yung flavor.",
      },
      {
        title: "Gulay time.",
        text: "Unahin mo yung mga gulay na mas matagal maluto, like labanos at okra. Hayaan mo muna silang lumambot nang konti.",
      },
      {
        title: "Isunod ang sinigang mix.",
        text: "Bebe, eto na yung nagpapasarap. Ilagay mo yung sinigang mix tapos lagyan mo na rin ng paminta at vetsin, haluin nang mabuti. Tikman mo rin ha? Baka mamaya sobrang asim tapos sisisihin mo ako.",
      },
      {
        title: "Isunod ang ibang gulay.",
        text: "Ilagay mo na yung talong, siling haba, at kangkong. Huwag masyadong matagal para hindi maging sobrang lambot yung gulay.",
      },
      {
        title: "Taste test.",
        text: "Tikman mo na, bebe. Kung kulang sa alat, dagdagan mo ng konting patis. Kung sakto na, wag ka nang mag-experiment diyan.",
      },
      {
        title: "Tapos na.",
        text: "Patayin na yung apoy at ihain na natin habang mainit. At bebe, dapat may kanin ka. Hindi pwedeng puro sabaw lang. Enjoy your meal, bebe.",
      },
    ],
  },
  {
    id: "caldereta",
    title: "Caldereta",
    description:
      "Malapot at malinamnam na nilagang karne sa sarsang may liver spread. Beef, pork, o chicken, ikaw ang bahala.",
    category: "Ulam",
    tags: ["caldereta", "beef", "baboy", "manok", "liver spread"],
    image: "/images/caldereta.jpg",
    cookTime: 90,
    servings: 4,
    difficulty: "Katamtaman",

    ingredients: [
      { name: "beef, pork, or chicken", amount: 1, unit: "kilo", note: "" },
      { name: "toyo", amount: null, unit: "", note: "" },
      { name: "calamansi", amount: null, unit: "", note: "" },
      { name: "ketchup", amount: null, unit: "", note: "konti lang" },
      { name: "oyster sauce", amount: null, unit: "", note: "" },
      { name: "Lea & Perrins", amount: null, unit: "", note: "" },
      { name: "pickles", amount: null, unit: "", note: "" },
      { name: "bawang", amount: null, unit: "", note: "minced" },
      { name: "sibuyas", amount: null, unit: "", note: "chopped" },
      { name: "Reno liver spread", amount: null, unit: "", note: "" },
      { name: "patatas", amount: null, unit: "", note: "cut into chunks" },
      { name: "carrots", amount: null, unit: "", note: "cut into chunks" },
      { name: "tubig", amount: null, unit: "", note: "" },
      {
        name: "salt and pepper",
        amount: null,
        unit: "",
        note: "depende sa panlasa",
      },
      { name: "palapot", amount: null, unit: "", note: "optional" },
      {
        name: "SkyFlakes or Pan de Rita",
        amount: null,
        unit: "",
        note: "optional, pangpalapot",
      },
    ],

    steps: [
      {
        title: "Marinate muna natin, bebe.",
        text: "Bebe, ilagay mo muna yung beef, pork, or chicken sa isang bowl. Lagyan mo ng toyo, calamansi, konting ketchup, oyster sauce, Lea & Perrins, at pickles. Haluin mo nang mabuti para kumapit lahat ng flavor sa meat. Tapos i-marinate natin for around 30 minutes.",
      },
      {
        title: "Gisa na tayo.",
        text: "Kapag marinated na yung meat, magpainit ka ng kawali o pot. Gisa muna tayo ng bawang at sibuyas hanggang mabango.",
      },
      {
        title: "Isunod yung meat.",
        text: "Ilagay mo na yung marinated meat kasama yung pinagmarinade natin. Haluin mo nang mabuti. Takluban mo muna, bebe, kasi magtutubig naman yan habang niluluto. Hayaan mo muna siyang maluto for around 10 minutes.",
      },
      {
        title: "Haluin at dagdagan ng tubig kung kailangan.",
        text: "After 10 minutes, buksan mo na at haluin. Tingnan mo kung sapat yung tubig. Kung kulang yung tubig at hindi pa malambot yung meat, dagdagan mo lang. Takpan ulit at hintayin nating lumambot.",
      },
      {
        title: "Ilagay ang patatas at carrots.",
        text: "Kapag medyo malambot na yung meat, ilagay na natin yung patatas at carrots. Haluin mo nang maayos tapos takpan ulit. Hayaan mong maluto hanggang lumambot yung meat, patatas, at carrots.",
      },
      {
        title: "Reno time.",
        text: "Kapag malambot na lahat, bebe, saka na natin ilagay yung Reno liver spread. Haluin mo nang mabuti para mag-blend siya sa sauce.",
      },
      {
        title: "Palaputin natin.",
        text: "Kung gusto mo ng mas malapot na sauce, lagyan mo ng palapot. Kung wala kang palapot, pwede kang gumamit ng dinurog na SkyFlakes o Paborita. Hahaha. Unti-unti lang ang ilagay habang hinahalo hanggang makuha mo yung lapot na gusto mo.",
      },
      {
        title: "Final taste test.",
        text: "Tikman mo na, bebe. I-adjust mo yung lasa depende sa panlasa mo. Kung kulang sa alat o flavor, dagdagan mo lang nang kaunti.",
      },
      {
        title: "Serve na.",
        text: "Kapag sakto na yung lasa at lapot, patayin na natin yung apoy. I-serve mo na habang mainit. Tapos syempre, dapat may kanin. Hahaha. Enjoy, bebe. Sana masarap yung Caldereta mo.",
      },
    ],
  },
  {
    id: "afritada",
    title: "Afritada",
    description:
      "Karne sa tomato sauce na may patatas, carrots, green peas, at bell pepper. Kaunting Reno para sa sarap.",
    category: "Ulam",
    tags: ["afritada", "chicken", "manok", "baboy", "beef", "tomato sauce"],
    image: "/images/afritada.jpg",
    cookTime: 60,
    servings: 4,
    difficulty: "Madali",

    ingredients: [
      { name: "chicken, pork, or beef", amount: 1, unit: "kilo", note: "" },
      { name: "toyo", amount: null, unit: "", note: "" },
      { name: "pineapple juice", amount: null, unit: "", note: "" },
      { name: "vetsin", amount: null, unit: "", note: "" },
      { name: "paminta", amount: null, unit: "", note: "" },
      { name: "asin", amount: null, unit: "", note: "" },
      { name: "bawang", amount: null, unit: "", note: "minced" },
      { name: "sibuyas", amount: null, unit: "", note: "chopped" },
      { name: "tomato sauce", amount: 250, unit: "grams", note: "" },
      { name: "patatas", amount: null, unit: "", note: "cut into chunks" },
      { name: "carrots", amount: null, unit: "", note: "cut into chunks" },
      { name: "green peas", amount: null, unit: "", note: "" },
      { name: "bell pepper", amount: null, unit: "", note: "sliced" },
      {
        name: "Reno liver spread",
        amount: null,
        unit: "",
        note: "kaunti lang",
      },
      { name: "tubig", amount: null, unit: "", note: "" },
      { name: "palapot", amount: null, unit: "", note: "optional" },
    ],

    steps: [
      {
        title: "Marinate muna natin, bebe.",
        text: "Bebe, ilagay mo muna yung chicken, pork, or beef sa isang bowl. Lagyan mo ng toyo, pineapple juice, vetsin, paminta, at konting asin. Haluin mo nang mabuti para kumapit yung mga seasoning sa meat. Tapos i-marinate natin for around 30 minutes.",
      },
      {
        title: "Gisa na tayo.",
        text: "Kapag marinated na yung meat, magpainit ka ng kawali o pot. Gisa muna tayo ng bawang at sibuyas hanggang mabango.",
      },
      {
        title: "Tomato sauce na.",
        text: "Bebe, ilagay mo na yung 250 grams na tomato sauce. Sakto na yan para sa 1 kilo ng ulam. Haluin mo muna kasama ng bawang at sibuyas.",
      },
      {
        title: "Isunod yung marinated meat.",
        text: "Ilagay mo na yung meat kasama yung pinagmarinade natin. Haluin mo nang mabuti para maghalo yung flavors. Takpan mo muna ng ilang minuto. Magtutubig naman yan habang niluluto, kaya hayaan mo lang muna.",
      },
      {
        title: "Check natin yung sabaw.",
        text: "After ilang minutes, buksan mo na at haluin. Tingnan mo kung sapat yung sabaw. Kung kakaunti yung sabaw at hindi pa malambot yung meat, dagdagan mo lang ng tubig. Takpan ulit at palambutin natin yung meat.",
      },
      {
        title: "Patatas at carrots na.",
        text: "Kapag malambot na yung meat, bebe, ilagay na natin yung patatas at carrots. Haluin mo nang maayos tapos hayaan mong maluto hanggang lumambot yung patatas at carrots.",
      },
      {
        title: "Green peas at bell pepper naman.",
        text: "Kapag malambot na yung patatas at carrots, ilagay na natin yung green peas at bell pepper. Haluin mo nang mabuti at hayaan silang maluto nang ilang minuto. Huwag masyadong matagal para hindi maging sobrang lambot yung bell pepper.",
      },
      {
        title: "Lagyan natin ng Reno.",
        text: "Tikman muna natin yung afritada, bebe. I-adjust mo yung lasa depende sa panlasa mo. Tapos lagyan natin ng kaunting Reno liver spread. Konti lang muna para hindi matabunan yung ibang flavors. Haluin mo nang mabuti para mag-blend yung Reno sa sauce.",
      },
      {
        title: "Palapot time.",
        text: "Kung kulang pa sa lapot yung sauce, lagyan mo ng palapot. Unti-unti lang habang hinahalo hanggang makuha natin yung lapot na gusto mo.",
      },
      {
        title: "Final taste test.",
        text: "Tikman mo ulit, bebe. Adjust mo na lang yung seasoning depende sa panlasa mo. Kapag okay na yung lasa at lapot, pwede na natin patayin yung apoy.",
      },
      {
        title: "Serve na.",
        text: "Pwede na yan, bebe. I-serve mo na habang mainit at syempre, dapat may kanin. Tapos kapag masarap, sabihin mo sa akin na magaling akong nagturo. Hahaha.",
      },
    ],
  },
  {
    id: "bicol-express",
    title: "Bicol Express",
    description:
      "Maanghang at malasang ulam na baboy sa gata na may bagoong alamang. Sarap kainin kapag maulan.",
    category: "Ulam",
    tags: ["bicol express", "baboy", "gata", "maanghang", "bagoong"],
    image: "",
    cookTime: 45,
    servings: 4,
    difficulty: "Madali",

    ingredients: [
      { name: "pork", amount: 1, unit: "kilo", note: "cut into small pieces" },
      { name: "bawang", amount: null, unit: "", note: "minced" },
      { name: "sibuyas", amount: null, unit: "", note: "chopped" },
      { name: "siling haba", amount: null, unit: "", note: "sliced" },
      {
        name: "siling labuyo",
        amount: null,
        unit: "",
        note: "optional kung gusto mas maanghang",
      },
      { name: "bagoong alamang", amount: null, unit: "", note: "" },
      { name: "coconut milk", amount: 1, unit: "can", note: "" },
      { name: "paminta", amount: null, unit: "", note: "" },
      { name: "asin", amount: null, unit: "", note: "depende sa panlasa" },
      { name: "tubig", amount: null, unit: "", note: "kung kinakailangan" },
      { name: "cooking oil", amount: null, unit: "", note: "" },
    ],

    steps: [
      {
        title: "Ihanda muna natin yung pork, bebe.",
        text: "Bebe, hiwain mo muna yung pork into small pieces para mas madali siyang maluto at mas kumapit yung sauce.",
      },
      {
        title: "Gisa na tayo.",
        text: "Magpainit ka ng kawali o pot, tapos lagyan ng konting mantika. Gisa muna natin yung bawang at sibuyas hanggang mabango.",
      },
      {
        title: "Isunod yung pork.",
        text: "Ilagay mo na yung pork at haluin nang mabuti. Lutuin muna natin hanggang mag-brown nang konti yung meat at lumabas yung sariling mantika niya.",
      },
      {
        title: "Bagoong time.",
        text: "Bebe, lagyan mo na ng bagoong alamang. Haluin mong mabuti para kumapit yung bagoong sa pork. Dahan-dahan lang sa bagoong ha, kasi maalat yan. Mas madali pang magdagdag kaysa magtama ng sobrang alat. Hahaha.",
      },
      {
        title: "Coconut milk na.",
        text: "Ibuhos mo na yung coconut milk tapos haluin. Takpan natin at hayaan mong kumulo hanggang lumambot yung pork. Kung kinakailangan at natutuyo agad, dagdagan mo lang ng kaunting tubig.",
      },
      {
        title: "Siling haba na tayo.",
        text: "Kapag malambot na yung pork, ilagay mo na yung siling haba. Kung gusto mo ng mas maanghang, bebe, pwede ka ring maglagay ng siling labuyo. Haluin mo nang mabuti para kumalat yung anghang sa sauce.",
      },
      {
        title: "Palaputin natin.",
        text: "Hayaan mo lang siyang kumulo sa low heat hanggang maging creamy at lumapot yung sauce. Kung gusto mo pang mas malapot, pakuluan mo lang nang kaunti para mabawasan yung sauce.",
      },
      {
        title: "Tikman muna natin.",
        text: "Bebe, taste test muna tayo. Kung kulang sa alat, dagdagan mo nang kaunti. Kung gusto mo ng mas maanghang, dagdagan mo rin ng sili. Adjust mo lang yung lasa depende sa panlasa mo.",
      },
      {
        title: "Serve na.",
        text: "Kapag malambot na yung pork, malapot na yung sauce, at sakto na yung lasa, pwede na nating patayin yung apoy. I-serve mo na habang mainit, bebe. Tapos syempre, maraming kanin dapat. Hahaha.",
      },
    ],
  },
  {
    id: "sisig",
    title: "Sisig",
    description:
      "Sizzling na ulam na baboy na may mayonnaise at calamansi. Perfect pulutan o pang-ulam.",
    category: "Ulam",
    tags: ["sisig", "baboy", "pulutan", "mayonnaise"],
    image: "",
    cookTime: 60,
    servings: 4,
    difficulty: "Katamtaman",

    ingredients: [
      { name: "pork face or liempo", amount: 1, unit: "kilo", note: "" },
      { name: "margarine", amount: null, unit: "", note: "" },
      { name: "bawang", amount: null, unit: "", note: "minced" },
      { name: "sibuyas", amount: null, unit: "", note: "chopped" },
      { name: "siling haba", amount: null, unit: "", note: "sliced" },
      { name: "siling labuyo", amount: null, unit: "", note: "optional" },
      { name: "mayonnaise", amount: null, unit: "", note: "" },
      { name: "calamansi", amount: null, unit: "", note: "" },
      { name: "toyo", amount: null, unit: "", note: "" },
      { name: "paminta", amount: null, unit: "", note: "" },
      { name: "asin", amount: null, unit: "", note: "depende sa panlasa" },
    ],

    steps: [
      {
        title: "Lutuin muna natin yung pork, bebe.",
        text: "Bebe, pakuluan muna natin yung pork hanggang lumambot. Kapag malambot na, hanguin mo at patuyuin nang kaunti.",
      },
      {
        title: "Iprito o ihawin natin.",
        text: "Kapag tuyo na yung pork, iprito o ihawin mo hanggang maging browned at medyo crispy yung labas.",
      },
      {
        title: "Hiwain na natin.",
        text: "Kapag okay na yung pork, palamigin mo nang kaunti tapos hiwain o chop nang maliliit.",
      },
      {
        title: "Margarine muna tayo.",
        text: "Bebe, magpainit ka ng kawali tapos lagyan mo ng margarine. Gisa muna natin yung bawang at sibuyas hanggang mabango.",
      },
      {
        title: "Isunod yung pork.",
        text: "Ilagay mo na yung chopped pork at haluin nang mabuti. Lutuin natin hanggang medyo crispy ulit yung pork.",
      },
      {
        title: "Lagyan ng seasoning.",
        text: "Lagyan mo ng konting toyo at paminta. Haluin nang mabuti. Konti-konti lang sa toyo ha, bebe. Tikman muna bago dagdagan para hindi maging maalat.",
      },
      {
        title: "Sili time.",
        text: "Ilagay na natin yung siling haba. Kung gusto mo ng mas maanghang, pwede kang magdagdag ng siling labuyo.",
      },
      {
        title: "Mayo at calamansi.",
        text: "Patayin muna natin yung apoy bago ilagay ang mayonnaise. Lagyan mo ng mayo depende sa gusto mong creaminess. Tapos pigaan natin ng calamansi para may konting asim at mas balanced yung lasa.",
      },
      {
        title: "Final taste test.",
        text: "Tikman mo na, bebe. Adjust mo yung toyo, calamansi, paminta, or mayo depende sa panlasa mo.",
      },
      {
        title: "Serve na.",
        text: "Kapag sakto na yung lasa at texture, pwede na nating i-serve. Tapos ayan na, bebe. Sisig na. Magtabi ka naman para sa akin ha. Hahaha.",
      },
    ],
  },
  {
    id: "pampanga-style-sisig",
    title: "Pampanga-Style Sisig",
    description:
      "Sisig na walang mayonnaise at walang suka. Grilled pork face at chicken liver na may calamansi lang. Simple pero malasa.",
    category: "Ulam",
    tags: ["sisig", "pampanga", "baboy", "atay", "pulutan"],
    image: "",
    cookTime: 75,
    servings: 4,
    difficulty: "Katamtaman",

    ingredients: [
      { name: "pork face/maskara", amount: 1, unit: "kilo", note: "" },
      {
        name: "pork ears",
        amount: null,
        unit: "",
        note: "optional kung kasama sa maskara",
      },
      { name: "chicken liver", amount: null, unit: "", note: "" },
      { name: "luya", amount: null, unit: "", note: "minced" },
      { name: "bawang", amount: null, unit: "", note: "minced" },
      { name: "sibuyas", amount: null, unit: "", note: "finely chopped" },
      { name: "siling labuyo", amount: null, unit: "", note: "minced" },
      { name: "siling haba", amount: null, unit: "", note: "chopped" },
      { name: "calamansi", amount: null, unit: "", note: "" },
      { name: "toyo", amount: null, unit: "", note: "kaunti lang" },
      { name: "paminta", amount: null, unit: "", note: "" },
      { name: "asin", amount: null, unit: "", note: "depende sa panlasa" },
      { name: "margarine", amount: null, unit: "", note: "optional" },
    ],

    steps: [
      {
        title: "Pakuluan muna natin yung pork, bebe.",
        text: "Bebe, ilagay mo muna yung pork face at tenga sa malaking pot. Lagyan ng tubig at pakuluan hanggang lumambot. Kapag malambot na, hanguin mo at patuyuin muna nang maayos.",
      },
      {
        title: "I-grill natin.",
        text: "Kapag medyo tuyo na yung pork, i-grill o ihawin natin hanggang magkaroon ng magandang toasted at smoky na flavor. Bebe, dapat may konting sunog-sunog sa gilid. Yun yung nagpapasarap.",
      },
      {
        title: "Hiwain na natin.",
        text: "Kapag okay na yung pagkaka-grill, palamigin mo nang kaunti tapos tadtarin natin nang maliliit yung pork.",
      },
      {
        title: "Lutuin naman natin yung liver.",
        text: "I-grill o lutuin muna yung chicken liver hanggang maluto. Tapos tadtarin din natin nang maliliit. Huwag sobrang pino, bebe. Mas masarap kapag may konting texture pa.",
      },
      {
        title: "Gisa tayo.",
        text: "Magpainit ka ng kawali. Kung gusto mo, lagyan mo ng konting margarine. Gisa muna natin yung minced ginger at bawang hanggang mabango. Tapos ilagay yung sibuyas at haluin nang kaunti.",
      },
      {
        title: "Isunod yung pork at liver.",
        text: "Ilagay na natin yung chopped pork at chicken liver. Haluin mo nang mabuti para maghalo yung flavors. Lutuin mo hanggang medyo crispy yung ibang parts.",
      },
      {
        title: "Lagyan ng sili.",
        text: "Ilagay mo na yung siling labuyo at siling haba. Haluin mo nang mabuti. Bebe, ikaw bahala sa dami ng sili. Alam ko naman kung gaano mo kayang tiisin yung anghang. Hahaha.",
      },
      {
        title: "Seasoning na.",
        text: "Lagyan ng kaunting toyo, paminta, at asin kung kinakailangan. Konti lang muna yung toyo, bebe. Tikman natin bago dagdagan.",
      },
      {
        title: "Calamansi na.",
        text: "Patayin muna natin yung apoy tapos pigaan ng calamansi. Walang suka dito ha. Calamansi lang para magkaroon ng konting asim at ma-balance yung alat at taba ng sisig.",
      },
      {
        title: "Final taste test.",
        text: "Tikman mo na, bebe. Adjust mo yung asin, paminta, toyo, sili, at calamansi depende sa panlasa mo. Kapag sakto na yung lasa at crispy na yung ibang parts, pwede na.",
      },
      {
        title: "Serve na.",
        text: "Ihain mo na habang mainit. Kung gusto mo, pwede mo siyang ilagay sa sizzling plate para mas masarap kainin. Ayan bebe, Pampanga-style na sisig na walang mayonnaise at walang suka. Simple lang pero malasa. At syempre, magtabi ka para sa akin. Hahaha.",
      },
    ],
  },
  {
    id: "fish-fillet",
    title: "Fish Fillet",
    description:
      "Crispy na breaded cream dory na may creamy garlic white sauce. Panalo pang baon o pang-almusal.",
    category: "Ulam",
    tags: ["fish fillet", "cream dory", "white sauce", "pritong isda"],
    image: "",
    cookTime: 60,
    servings: 4,
    difficulty: "Katamtaman",

    ingredients: [
      { name: "cream dory", amount: null, unit: "", note: "para sa fish" },
      { name: "paminta", amount: null, unit: "", note: "para sa fish" },
      { name: "Magic Sarap", amount: null, unit: "", note: "para sa fish" },
      { name: "patis", amount: null, unit: "", note: "para sa fish" },
      { name: "minced garlic", amount: null, unit: "", note: "para sa fish" },
      { name: "vetsin", amount: null, unit: "", note: "para sa fish" },
      { name: "harina", amount: null, unit: "", note: "para sa breading" },
      {
        name: "Magic Sarap",
        amount: null,
        unit: "",
        note: "para sa breading",
      },
      { name: "asin", amount: null, unit: "", note: "para sa breading" },
      { name: "paminta", amount: null, unit: "", note: "para sa breading" },
      { name: "itlog", amount: null, unit: "", note: "para sa breading" },
      {
        name: "bread crumbs",
        amount: null,
        unit: "",
        note: "para sa breading",
      },
      { name: "mantika", amount: null, unit: "", note: "pangprito" },
      {
        name: "Lady's Choice mayonnaise",
        amount: null,
        unit: "",
        note: "para sa white sauce",
      },
      {
        name: "calamansi",
        amount: null,
        unit: "",
        note: "para sa white sauce",
      },
      { name: "paminta", amount: null, unit: "", note: "para sa white sauce" },
      { name: "asin", amount: null, unit: "", note: "para sa white sauce" },
      {
        name: "tubig",
        amount: null,
        unit: "",
        note: "konti, para sa white sauce",
      },
      {
        name: "asukal",
        amount: null,
        unit: "",
        note: "kaunti, para sa white sauce",
      },
      {
        name: "minced garlic",
        amount: null,
        unit: "",
        note: "para sa white sauce",
      },
    ],

    steps: [
      {
        title: "Hiwain muna natin yung fish, bebe.",
        text: "Bebe, hiwain mo muna yung Cream Dory into finger-size pieces. Huwag masyadong malaki para madaling maluto at sakto sa isang kagat.",
      },
      {
        title: "Marinate natin.",
        text: "Ilagay mo yung sliced fish sa isang bowl. Lagyan ng paminta, Magic Sarap, patis, minced garlic, at vetsin. Haluin mo nang mabuti para malagyan lahat ng fish ng seasoning. Tapos i-marinate natin for around 30 minutes.",
      },
      {
        title: "Ihanda na natin yung breading.",
        text: "Sa isang bowl, ilagay yung harina. Lagyan ng Magic Sarap, konting asin, at paminta. Haluin nang mabuti. Maghanda rin ng isang bowl para sa beaten egg at isang bowl para sa bread crumbs.",
      },
      {
        title: "I-bread na natin yung fish.",
        text: "Bebe, kunin mo yung marinated fish tapos unang isawsaw sa harina. Pagkatapos, isawsaw sa itlog. Tapos balutin naman ng bread crumbs. Siguraduhin mong kumapit nang maayos yung bread crumbs para crispy siya pagprito.",
      },
      {
        title: "Iprito na natin.",
        text: "Painitin ang mantika sa kawali. Kapag mainit na, ilagay na yung breaded fish. Iprito hanggang maging golden brown at crispy yung labas. Huwag masyadong malakas ang apoy para maluto rin yung loob. Kapag luto na, hanguin at patuluin yung excess oil.",
      },
      {
        title: "White sauce naman tayo.",
        text: "Bebe, sa isang bowl ilagay yung Lady's Choice mayonnaise. Lagyan mo ng calamansi depende sa gusto mong asim, tapos paminta, konting asin, kaunting tubig, at konting asukal. Idagdag mo rin yung minced garlic.",
      },
      {
        title: "Haluin natin.",
        text: "Haluin mo nang mabuti yung white sauce hanggang maging smooth at maghalo lahat ng ingredients. Tikman mo, bebe. Kung gusto mo ng mas maasim, dagdagan ng calamansi. Kung kulang sa alat, dagdagan nang kaunti. Kung gusto mo ng mas matamis, dagdagan lang ng konting asukal.",
      },
      {
        title: "Serve na.",
        text: "Kapag crispy na yung fish fillet at sakto na yung lasa ng white sauce, pwede na natin i-serve. Ilagay mo yung white sauce sa tabi o ibuhos mo nang kaunti sa ibabaw. Ayan bebe, crispy fish fillet na may creamy garlic white sauce. Huwag mong ubusin lahat ha, magtatabi ka sakin.",
      },
    ],
  },
  {
    id: "chicken-fingers",
    title: "Chicken Fingers",
    description:
      "Crispy na breaded chicken strips na may creamy garlic white sauce. Panalong baon o pulutan.",
    category: "Ulam",
    tags: ["chicken fingers", "manok", "white sauce", "pritong manok"],
    image: "",
    cookTime: 60,
    servings: 4,
    difficulty: "Katamtaman",

    ingredients: [
      {
        name: "chicken breast",
        amount: 1,
        unit: "kg",
        note: "para sa chicken",
      },
      { name: "pepper", amount: null, unit: "", note: "para sa chicken" },
      { name: "Magic Sarap", amount: null, unit: "", note: "para sa chicken" },
      { name: "patis", amount: null, unit: "", note: "para sa chicken" },
      {
        name: "minced garlic",
        amount: null,
        unit: "",
        note: "para sa chicken",
      },
      { name: "vetsin", amount: null, unit: "", note: "para sa chicken" },
      { name: "flour", amount: null, unit: "", note: "para sa breading" },
      { name: "Magic Sarap", amount: null, unit: "", note: "para sa breading" },
      { name: "salt", amount: null, unit: "", note: "para sa breading" },
      { name: "pepper", amount: null, unit: "", note: "para sa breading" },
      { name: "eggs", amount: 2, unit: "pcs", note: "1-2, para sa breading" },
      {
        name: "bread crumbs",
        amount: null,
        unit: "",
        note: "para sa breading",
      },
      { name: "cooking oil", amount: null, unit: "", note: "pangprito" },
      {
        name: "Lady's Choice mayonnaise",
        amount: null,
        unit: "",
        note: "para sa white sauce",
      },
      {
        name: "calamansi",
        amount: null,
        unit: "",
        note: "para sa white sauce",
      },
      { name: "pepper", amount: null, unit: "", note: "para sa white sauce" },
      {
        name: "salt",
        amount: null,
        unit: "",
        note: "kaunti, para sa white sauce",
      },
      {
        name: "water",
        amount: null,
        unit: "",
        note: "kaunti, para sa white sauce",
      },
      {
        name: "sugar",
        amount: null,
        unit: "",
        note: "kaunti, para sa white sauce",
      },
      {
        name: "minced garlic",
        amount: null,
        unit: "",
        note: "para sa white sauce",
      },
    ],

    steps: [
      {
        title: "Hiwain muna natin yung chicken, bebe.",
        text: "Bebe, hiwain muna yung chicken breast into finger-size strips. Gawin mong pantay-pantay yung laki para sabay-sabay maluto.",
      },
      {
        title: "Marinate natin.",
        text: "I-marinate yung chicken gamit ang pepper, Magic Sarap, patis, minced garlic, at vetsin. Haluin nang mabuti para kumapit yung lasa. Kahit around 30 minutes, okay na.",
      },
      {
        title: "Gawa tayo ng breading.",
        text: "Sa isang lalagyan, ilagay yung flour, Magic Sarap, salt, at pepper. Haluin nang maayos.",
      },
      {
        title: "Ihanda yung egg at bread crumbs.",
        text: "Sa isang separate na bowl, batihin yung itlog. Tapos maghanda rin ng bread crumbs sa ibang lalagyan.",
      },
      {
        title: "I-bread na natin yung chicken.",
        text: "Isa-isahin na natin yung chicken. I-dip muna sa flour mixture, pagkatapos sa egg, tapos i-coat nang maayos sa bread crumbs. Dapat balot na balot para crispy.",
      },
      {
        title: "Iprito na natin.",
        text: "Painitin yung mantika sa kawali. Kapag mainit na, ilagay yung chicken fingers. I-fry hanggang golden brown at fully cooked yung loob. Huwag sobrang lakas ng apoy para hindi sunog sa labas pero hilaw sa loob.",
      },
      {
        title: "Serve na.",
        text: "Kapag luto na, hanguin at patuluin yung excess oil. Ayan, crispy na yung chicken fingers natin.",
      },
    ],
  },
  {
    id: "spaghetti",
    title: "Spaghetti",
    description:
      "Matamis at malasang Pinoy-style spaghetti na may giniling, hotdog, at corned beef.",
    category: "Merienda",
    tags: ["spaghetti", "pasta", "giniling", "hotdog", "matamis"],
    image: "",
    cookTime: 60,
    servings: 6,
    difficulty: "Katamtaman",

    ingredients: [
      { name: "spaghetti noodles", amount: 1, unit: "kg", note: "" },
      { name: "giniling", amount: null, unit: "", note: "½–1 kilo" },
      { name: "hotdog", amount: null, unit: "", note: "hiniwa" },
      { name: "corned beef", amount: 1, unit: "can", note: "" },
      { name: "spaghetti sauce", amount: 1, unit: "can", note: "" },
      { name: "tomato paste", amount: 1, unit: "can", note: "" },
      { name: "condensed milk", amount: 1, unit: "can", note: "" },
      { name: "Reno liver spread", amount: 1, unit: "maliit", note: "" },
      { name: "Knorr Beef Cube", amount: 1, unit: "pc", note: "" },
      { name: "butter", amount: null, unit: "", note: "" },
      { name: "garlic", amount: null, unit: "", note: "minced" },
      { name: "onion", amount: null, unit: "", note: "chopped" },
      { name: "pepper", amount: null, unit: "", note: "" },
      {
        name: "salt",
        amount: null,
        unit: "",
        note: "kaunti lang kung kailangan",
      },
      { name: "tubig", amount: null, unit: "", note: "kaunti" },
      { name: "cheese", amount: null, unit: "", note: "optional" },
    ],

    steps: [
      {
        title: "Lutuin muna natin yung noodles.",
        text: "Bebe, lutuin muna yung spaghetti noodles. Pakuluan sa tubig na may konting salt hanggang sakto lang yung lambot. Huwag sobrang luto para hindi malata.",
      },
      {
        title: "Gisa na tayo.",
        text: "Tunawin yung butter sa malaking kawali. Igisa yung minced garlic at onion hanggang mabango.",
      },
      {
        title: "Isunod yung giniling.",
        text: "Ilagay yung giniling. Haluin at lutuin hanggang mag-brown at fully cooked.",
      },
      {
        title: "Hotdog time.",
        text: "Idagdag yung hotdog at lutuin nang ilang minuto hanggang medyo browned.",
      },
      {
        title: "Corned beef na.",
        text: "Ilagay yung Corned Beef. Haluin nang mabuti at lutuin muna sandali para kumapit yung lasa.",
      },
      {
        title: "Sauce na tayo.",
        text: "Idagdag yung tomato paste at spaghetti sauce. Haluin nang mabuti. Lagyan ng kaunting tubig para hindi sobrang lapot.",
      },
      {
        title: "Beef cube na.",
        text: "Ilagay yung Knorr Beef Cube. Durugin o tunawin habang hinahalo para pantay yung lasa sa sauce.",
      },
      {
        title: "Pakuluan natin.",
        text: "Takpan at pakuluan nang ilang minuto. Haluin paminsan-minsan para hindi dumikit sa ilalim.",
      },
      {
        title: "Reno na.",
        text: "Kapag kumulo na, ilagay yung maliit na Reno liver spread. Haluin hanggang tuluyang mag-combine sa sauce.",
      },
      {
        title: "Tikman muna bago mag-asin.",
        text: "Tikman muna bago maglagay ng asin. May alat na kasi yung Beef Cube, Corned Beef, at Reno. Lagyan na lang ng pepper kung kailangan.",
      },
      {
        title: "Condensed milk na.",
        text: "Last na yung condensed milk. Ilagay paunti-unti habang hinahalo. Tikman mo habang nilalagay hanggang makuha yung tamis na gusto mo.",
      },
      {
        title: "Palaputin natin.",
        text: "Pakuluan pa nang kaunti hanggang maging thick at malasa yung sauce. Kung sobrang lapot, dagdagan lang ng kaunting tubig.",
      },
      {
        title: "Ihalo sa noodles.",
        text: "Ilagay yung sauce sa spaghetti noodles, haluin nang maayos, tapos lagyan ng cheese sa ibabaw kung gusto.",
      },
    ],
  },
  {
    id: "pancit-miki",
    title: "Pancit Miki",
    description:
      "Malasang pancit na gawa sa miki noodles na may pork, gulay, at repolyo.",
    category: "Merienda",
    tags: ["pancit", "miki", "noodles", "gulay"],
    image: "",
    cookTime: 45,
    servings: 4,
    difficulty: "Madali",

    ingredients: [
      { name: "miki noodles", amount: null, unit: "", note: "" },
      { name: "pork", amount: null, unit: "", note: "hiniwa nang maliliit" },
      { name: "kikiam", amount: null, unit: "", note: "optional" },
      { name: "squid ball", amount: null, unit: "", note: "optional" },
      { name: "bawang", amount: null, unit: "", note: "minced" },
      { name: "sibuyas", amount: null, unit: "", note: "chopped" },
      { name: "mga gulay", amount: null, unit: "", note: "hiniwa" },
      { name: "repolyo", amount: null, unit: "", note: "hiniwa" },
      { name: "toyo", amount: null, unit: "", note: "" },
      { name: "oyster sauce", amount: null, unit: "", note: "" },
      { name: "paminta", amount: null, unit: "", note: "" },
      { name: "Magic Sarap", amount: null, unit: "", note: "" },
      { name: "vetsin", amount: null, unit: "", note: "" },
      { name: "Knorr Pork Cube", amount: 1, unit: "pc", note: "" },
      { name: "tubig", amount: null, unit: "", note: "" },
      { name: "cooking oil", amount: null, unit: "", note: "" },
    ],

    steps: [
      {
        title: "Gisa muna tayo.",
        text: "Bebe, gisa muna tayo. Lagyan ng kaunting mantika yung kawali, tapos igisa yung bawang at sibuyas hanggang mabango.",
      },
      {
        title: "Isunod yung sahog.",
        text: "Ilagay yung pork na hiniwa nang maliliit. Kung walang pork, pwede naman kikiam o squid ball, depende kung ano yung available. Lutuin muna hanggang okay na yung sahog.",
      },
      {
        title: "Gulay na tayo.",
        text: "Ilagay yung mga gulay. Unahin muna yung mga matitigas para lumambot muna. Huwag muna yung repolyo kasi huli natin yun ilalagay.",
      },
      {
        title: "Timplahan na natin.",
        text: "Lagyan ng toyo, oyster sauce, paminta, Magic Sarap, vetsin, at Knorr Pork Cube. Haluin nang mabuti.",
      },
      {
        title: "Lagyan ng tubig.",
        text: "Lagyan ng tubig. Katamtaman lang, bebe, depende sa dami ng Miki. Huwag sobra para hindi maging sabaw.",
      },
      {
        title: "Pakuluan at tikman.",
        text: "Pakuluan muna at tikman. I-adjust yung timpla depende sa panlasa mo.",
      },
      {
        title: "Isunod yung Miki.",
        text: "Kapag kumulo na at okay na yung lasa, ilagay na yung Miki. Haluin nang maayos para ma-absorb ng noodles yung sauce.",
      },
      {
        title: "Repolyo na sa huli.",
        text: "Huli yung repolyo. Ilagay kapag malapit nang maluto yung Miki para hindi sobrang lambot.",
      },
      {
        title: "Serve na.",
        text: "Haluin hanggang maluto at ma-absorb ng Miki yung sauce. Tikman ulit bago patayin yung apoy.",
      },
    ],
  },
  {
    id: "pancit-bihon",
    title: "Pancit Bihon",
    description:
      "Classic na pancit gamit ang bihon noodles, may pork at gulay na may masarap na timpla.",
    category: "Merienda",
    tags: ["pancit", "bihon", "noodles", "gulay"],
    image: "",
    cookTime: 45,
    servings: 4,
    difficulty: "Madali",

    ingredients: [
      { name: "bihon noodles", amount: null, unit: "", note: "" },
      { name: "pork", amount: null, unit: "", note: "hiniwa nang maliliit" },
      { name: "kikiam", amount: null, unit: "", note: "optional" },
      { name: "squid ball", amount: null, unit: "", note: "optional" },
      { name: "bawang", amount: null, unit: "", note: "minced" },
      { name: "sibuyas", amount: null, unit: "", note: "chopped" },
      { name: "mga gulay", amount: null, unit: "", note: "hiniwa" },
      { name: "repolyo", amount: null, unit: "", note: "hiniwa" },
      { name: "toyo", amount: null, unit: "", note: "" },
      { name: "oyster sauce", amount: null, unit: "", note: "" },
      { name: "paminta", amount: null, unit: "", note: "" },
      { name: "Magic Sarap", amount: null, unit: "", note: "" },
      { name: "vetsin", amount: null, unit: "", note: "" },
      { name: "Knorr Pork Cube", amount: 1, unit: "pc", note: "" },
      { name: "tubig", amount: null, unit: "", note: "" },
      { name: "cooking oil", amount: null, unit: "", note: "" },
    ],

    steps: [
      {
        title: "Gisa muna tayo.",
        text: "Bebe, gisa muna yung bawang at sibuyas sa kaunting mantika hanggang mabango.",
      },
      {
        title: "Isunod yung sahog.",
        text: "Ilagay yung pork na maliliit. Kung walang pork, pwede kikiam o squid ball. Lutuin hanggang okay na.",
      },
      {
        title: "Gulay na tayo.",
        text: "Ilagay yung mga gulay, unahin yung mga matitigas. Huwag muna yung repolyo.",
      },
      {
        title: "Timplahan na natin.",
        text: "Timplahan ng toyo, oyster sauce, paminta, Magic Sarap, vetsin, at Knorr Pork Cube. Haluin nang mabuti.",
      },
      {
        title: "Lagyan ng tubig at pakuluan.",
        text: "Lagyan ng katamtamang tubig, depende sa dami ng bihon. Pakuluan muna.",
      },
      {
        title: "Tikman at i-adjust.",
        text: "Tikman yung sabaw, bebe. Dito mo na i-adjust yung timpla para sakto sa panlasa mo.",
      },
      {
        title: "Isunod yung bihon.",
        text: "Kapag kumulo na at okay na yung lasa, ilagay yung bihon. Haluin nang maingat habang niluluto para ma-absorb niya yung sauce.",
      },
      {
        title: "Repolyo na sa huli.",
        text: "Huli yung repolyo para hindi malata.",
      },
      {
        title: "Serve na.",
        text: "Haluin hanggang maluto yung bihon at ma-absorb yung sauce. Ayan na, pancit na!",
      },
    ],
  },
  {
    id: "pancit-bihon-at-canton",
    title: "Pancit Bihon at Canton",
    description:
      "Kombinasyon ng bihon at canton noodles na may pork at gulay, mas malaman at masarap.",
    category: "Merienda",
    tags: ["pancit", "bihon", "canton", "noodles", "gulay"],
    image: "",
    cookTime: 45,
    servings: 6,
    difficulty: "Madali",

    ingredients: [
      { name: "bihon noodles", amount: null, unit: "", note: "" },
      { name: "canton noodles", amount: null, unit: "", note: "" },
      { name: "pork", amount: null, unit: "", note: "hiniwa nang maliliit" },
      { name: "kikiam", amount: null, unit: "", note: "optional" },
      { name: "squid ball", amount: null, unit: "", note: "optional" },
      { name: "bawang", amount: null, unit: "", note: "minced" },
      { name: "sibuyas", amount: null, unit: "", note: "chopped" },
      { name: "mga gulay", amount: null, unit: "", note: "hiniwa" },
      { name: "repolyo", amount: null, unit: "", note: "hiniwa" },
      { name: "toyo", amount: null, unit: "", note: "" },
      { name: "oyster sauce", amount: null, unit: "", note: "" },
      { name: "paminta", amount: null, unit: "", note: "" },
      { name: "Magic Sarap", amount: null, unit: "", note: "" },
      { name: "vetsin", amount: null, unit: "", note: "" },
      { name: "Knorr Pork Cube", amount: 1, unit: "pc", note: "" },
      { name: "tubig", amount: null, unit: "", note: "" },
      { name: "cooking oil", amount: null, unit: "", note: "" },
    ],

    steps: [
      {
        title: "Gisa muna tayo.",
        text: "Bebe, gisa muna tayo. Lagyan ng kaunting mantika yung kawali, tapos igisa yung bawang at sibuyas hanggang mabango.",
      },
      {
        title: "Isunod yung sahog.",
        text: "Ilagay yung pork na hiniwa nang maliliit. Kung walang pork, pwede naman kikiam o squid ball, depende kung ano yung available. Lutuin muna hanggang okay na yung sahog.",
      },
      {
        title: "Gulay na tayo.",
        text: "Ilagay yung mga gulay. Unahin muna yung mga matitigas para lumambot muna. Huwag muna yung repolyo kasi huli natin yun ilalagay.",
      },
      {
        title: "Timplahan na natin.",
        text: "Lagyan ng toyo, oyster sauce, paminta, Magic Sarap, vetsin, at Knorr Pork Cube. Haluin nang mabuti para kumapit yung lasa.",
      },
      {
        title: "Lagyan ng tubig.",
        text: "Lagyan ng tubig. Katamtaman lang, bebe, depende sa dami ng Bihon at Canton. Huwag sobra para hindi maging sabaw.",
      },
      {
        title: "Pakuluan at tikman.",
        text: "Pakuluan muna yung sauce tapos tikman. I-adjust yung timpla depende sa panlasa mo.",
      },
      {
        title: "Isunod yung noodles.",
        text: "Kapag kumulo na at okay na yung lasa, ilagay na yung Canton at Bihon. Haluin nang maingat para parehong ma-absorb ng noodles yung sauce.",
      },
      {
        title: "Repolyo na sa huli.",
        text: "Huli yung repolyo. Ilagay kapag malapit nang maluto yung noodles para hindi sobrang lambot.",
      },
      {
        title: "Serve na.",
        text: "Haluin hanggang maluto yung Bihon at Canton at ma-absorb nila yung sauce. Tikman ulit, bebe, tapos adjust kung kailangan.",
      },
    ],
  },
  {
    id: "tuna-pasta",
    title: "Tuna Pasta",
    description:
      "Simpleng garlic-olive oil pasta na may Century Tuna. Mabilis lutuin at panalo sa dami ng garlic.",
    category: "Merienda",
    tags: ["tuna pasta", "pasta", "tuna", "olive oil", "garlic"],
    image: "",
    cookTime: 30,
    servings: 8,
    difficulty: "Madali",

    ingredients: [
      { name: "pasta", amount: 900, unit: "g", note: "" },
      { name: "olive oil", amount: 1, unit: "bote", note: "" },
      { name: "Century Tuna", amount: 5, unit: "cans", note: "" },
      { name: "minced garlic", amount: null, unit: "", note: "marami" },
      { name: "Magic Sarap", amount: null, unit: "", note: "" },
      { name: "paminta", amount: null, unit: "", note: "" },
      { name: "cheese", amount: null, unit: "", note: "optional" },
    ],

    steps: [
      {
        title: "Lutuin muna natin yung pasta.",
        text: "Bebe, lutuin muna yung pasta. Pakuluan yung pasta hanggang sakto lang yung lambot. Pag luto na, itabi muna.",
      },
      {
        title: "Olive oil na.",
        text: "Sa malaking kawali, ilagay yung isang buong bote ng olive oil. Since 900 g yung pasta, okay na yung isang bote na nabibili sa dali para enough yung oil at hindi dry yung pasta.",
      },
      {
        title: "Igisa yung garlic.",
        text: "Igisa yung maraming minced garlic. Haluin hanggang mabango at medyo golden lang. Huwag sunugin, bebe, sayang yung garlic.",
      },
      {
        title: "Isunod yung tuna.",
        text: "Ilagay na yung 5 lata ng Century Tuna. Haluin nang mabuti para kumalat yung tuna sa olive oil at garlic.",
      },
      {
        title: "Timplahan na natin.",
        text: "Timplahan ng Magic Sarap. Pwede magsimula sa 1 sachet, tapos tikman. Kung kulang pa yung lasa, dagdagan mo paunti-unti.",
      },
      {
        title: "Paminta na rin.",
        text: "Lagyan ng paminta depende sa panlasa mo. Haluin ulit para pantay yung timpla.",
      },
      {
        title: "Ihalo sa pasta.",
        text: "Ilagay na yung cooked pasta. Haluin nang mabuti hanggang coated lahat ng pasta sa garlic, tuna, at olive oil.",
      },
      {
        title: "Tikman at i-adjust.",
        text: "Tikman at i-adjust yung lasa. Kung kulang, pwede dagdagan ng Magic Sarap o paminta.",
      },
      {
        title: "Serve na.",
        text: "Pwede ring lagyan ng cheese kung gusto mo. Haluin habang mainit para medyo matunaw at kumapit sa pasta.",
      },
    ],
  },
  {
    id: "nilagang-baboy",
    title: "Nilagang Baboy",
    description:
      "Malinaw at malinamnam na sabaw na may baboy, pechay, at green sili. Simple pero nakakabusog.",
    category: "Sabaw",
    tags: ["baboy", "sabaw", "nilaga", "pechay"],
    image: "",
    cookTime: 60,
    servings: 4,
    difficulty: "Madali",

    ingredients: [
      { name: "baboy", amount: null, unit: "", note: "hiniwa sa serving size" },
      { name: "asin", amount: null, unit: "", note: "" },
      { name: "bawang", amount: null, unit: "", note: "minced" },
      { name: "sibuyas", amount: null, unit: "", note: "hiniwa" },
      {
        name: "green sili",
        amount: null,
        unit: "",
        note: "yung pang-sinigang",
      },
      { name: "paminta", amount: null, unit: "", note: "" },
      { name: "vetsin", amount: null, unit: "", note: "" },
      { name: "pechay o repolyo", amount: null, unit: "", note: "" },
      { name: "tubig", amount: null, unit: "", note: "" },
    ],

    steps: [
      {
        title: "Lamasin muna natin yung baboy.",
        text: "Bebe, lamasin muna natin yung baboy sa asin. Haluin at kuskusin nang maayos para may lasa na yung karne.",
      },
      {
        title: "Pakuluan hanggang lumambot.",
        text: "Ilagay yung baboy sa kaserola, lagyan ng tubig, tapos pakuluan hanggang lumambot. Dagdagan lang ng tubig kung kinakailangan.",
      },
      {
        title: "Bawang at sibuyas na.",
        text: "Kapag malambot na yung baboy, saka ilagay yung bawang at sibuyas. Pakuluan ulit para lumabas yung lasa nila sa sabaw.",
      },
      {
        title: "Timplahan na natin.",
        text: "Timplahan ng paminta at vetsin. Haluin nang mabuti.",
      },
      {
        title: "Tikman at i-adjust.",
        text: "Tikman muna yung sabaw, bebe. I-adjust yung lasa depende sa panlasa mo. Dagdagan ng asin kung kailangan.",
      },
      {
        title: "Isunod ang pechay at sili.",
        text: "Kapag okay na yung lasa, saka ilagay sabay yung pechay at green sili. Yung green sili, yung pang-sinigang na sili.",
      },
      {
        title: "Serve na.",
        text: "Lutuin lang hanggang maluto yung pechay at sili. Huwag sobra para hindi malata yung gulay. Ayan, bebe. Sabay yung pechay at green sili sa huli para fresh pa yung gulay at may bango at konting anghang yung sabaw.",
      },
    ],
  },
  {
    id: "nilagang-baka",
    title: "Nilagang Baka",
    description:
      "Malasa at masustansyang sabaw na may baka, mais, at patatas. Comfort food na sakto sa maulan na araw.",
    category: "Sabaw",
    tags: ["baka", "sabaw", "nilaga", "mais", "patatas"],
    image: "",
    cookTime: 90,
    servings: 4,
    difficulty: "Madali",

    ingredients: [
      { name: "baka", amount: null, unit: "", note: "hiniwa sa serving size" },
      { name: "mais", amount: null, unit: "", note: "hinati sa ilang piraso" },
      { name: "sibuyas", amount: null, unit: "", note: "hiniwa" },
      { name: "bawang", amount: null, unit: "", note: "minced" },
      { name: "patatas", amount: null, unit: "", note: "hiniwa" },
      { name: "pechay", amount: null, unit: "", note: "" },
      { name: "asin", amount: null, unit: "", note: "" },
      { name: "vetsin", amount: null, unit: "", note: "" },
      { name: "paminta", amount: null, unit: "", note: "" },
      { name: "tubig", amount: null, unit: "", note: "" },
    ],

    steps: [
      {
        title: "Pakuluan muna natin yung baka.",
        text: "Bebe, pakuluan muna natin yung baka. Ilagay yung baka sa kaserola, lagyan ng sapat na tubig, tapos pakuluan hanggang lumambot.",
      },
      {
        title: "Isunod yung mais.",
        text: "Kapag malambot na yung baka, ilagay na yung mais na hinati sa mga piraso. Pakuluan ulit hanggang lumambot yung mais at lumabas yung tamis niya sa sabaw.",
      },
      {
        title: "Bawang at sibuyas na.",
        text: "Kapag malambot na yung mais, saka ilagay yung sibuyas at bawang. Haluin at pakuluan para lumabas yung lasa.",
      },
      {
        title: "Patatas na.",
        text: "Ilagay yung patatas at hayaan itong maluto hanggang lumambot.",
      },
      {
        title: "Timplahan na natin.",
        text: "Timplahan na natin, bebe. Lagyan ng asin, vetsin, at paminta. Tikman yung sabaw at i-adjust depende sa panlasa mo.",
      },
      {
        title: "Dagdagan ng tubig kung kailangan.",
        text: "Kung kulang yung sabaw, dagdagan lang ng tubig. Tapos tikman ulit para ma-adjust din yung timpla kung kinakailangan.",
      },
      {
        title: "Serve na.",
        text: "Kapag okay na yung lasa at malambot na lahat, huli nating ilagay yung pechay. Lutuin lang hanggang maluto yung pechay. Huwag sobra para hindi malata.",
      },
    ],
  },
  {
    id: "crispy-kare-kare",
    title: "Crispy Kare-Kare",
    description:
      "Crispy fried pork na may malapot at malasang peanut sauce, sinamahan ng gulay at bagoong.",
    category: "Ulam",
    tags: ["kare-kare", "baboy", "peanut sauce", "bagoong", "crispy"],
    image: "",
    cookTime: 90,
    servings: 4,
    difficulty: "Katamtaman",

    ingredients: [
      { name: "pork belly o liempo", amount: 1, unit: "kg", note: "" },
      { name: "bawang", amount: null, unit: "", note: "minced" },
      { name: "sibuyas", amount: null, unit: "", note: "chopped" },
      { name: "atsuete", amount: null, unit: "", note: "" },
      { name: "tubig", amount: null, unit: "", note: "" },
      { name: "peanut butter", amount: null, unit: "", note: "" },
      { name: "Mama Sita's Kare-Kare Mix", amount: null, unit: "", note: "" },
      { name: "patis", amount: null, unit: "", note: "" },
      { name: "paminta", amount: null, unit: "", note: "" },
      { name: "Magic Sarap", amount: null, unit: "", note: "" },
      { name: "vetsin", amount: null, unit: "", note: "" },
      { name: "sitaw", amount: null, unit: "", note: "hiniwa" },
      { name: "talong", amount: null, unit: "", note: "hiniwa" },
      { name: "pechay", amount: null, unit: "", note: "" },
      { name: "okra", amount: null, unit: "", note: "optional" },
      { name: "cooking oil", amount: null, unit: "", note: "" },
      { name: "bagoong", amount: null, unit: "", note: "" },
    ],

    steps: [
      {
        title: "Pakuluan muna natin yung pork.",
        text: "Bebe, pakuluan muna yung pork sa tubig hanggang lumambot. Kapag malambot na, hanguin at patuyuin nang mabuti.",
      },
      {
        title: "Iprito hanggang crispy.",
        text: "Iprito yung pork sa mainit na mantika hanggang maging golden brown at crispy. Kapag crispy na, itabi muna.",
      },
      {
        title: "Ihanda yung gulay.",
        text: "Para sa gulay, pwede nating pakuluan o blanch nang hiwalay yung sitaw, talong, okra, at pechay. Huwag sobrang lutuin para hindi malata. Itabi muna pagkatapos.",
      },
      {
        title: "Tunawin yung atsuete.",
        text: "Para naman sa sauce, tunawin muna yung atsuete sa kaunting tubig para lumabas yung kulay. Haluin nang mabuti.",
      },
      {
        title: "Gisa na tayo.",
        text: "Sa kawali, igisa yung bawang at sibuyas hanggang mabango.",
      },
      {
        title: "Isunod yung atsuete.",
        text: "Ilagay yung tinunaw na atsuete kasama yung tubig nito. Haluin.",
      },
      {
        title: "Peanut butter na.",
        text: "Idagdag yung peanut butter at haluin habang unti-unting nilalagyan ng tubig hanggang maging smooth yung sauce.",
      },
      {
        title: "Kare-Kare mix na.",
        text: "Ilagay yung Mama Sita's Kare-Kare Mix. Haluin nang mabuti hanggang matunaw at lumapot yung sauce.",
      },
      {
        title: "Timplahan na natin.",
        text: "Timplahan ng patis, paminta, Magic Sarap, at vetsin. Tikman muna bago dagdagan dahil may alat at lasa na yung Kare-Kare Mix.",
      },
      {
        title: "Palaputin natin.",
        text: "Pakuluan yung sauce hanggang lumapot at maging malinamnam. Kung masyadong malapot, dagdagan lang ng kaunting tubig.",
      },
      {
        title: "Final taste test.",
        text: "Tikman ulit, bebe, tapos i-adjust yung patis, paminta, o Magic Sarap depende sa panlasa mo.",
      },
      {
        title: "I-arrange sa plato.",
        text: "I-arrange na natin sa serving plate: ilagay yung crispy pork, tapos yung sitaw, talong, okra, at pechay sa gilid.",
      },
      {
        title: "Ihain ang sauce nang hiwalay.",
        text: "Ibuhos o ihain nang hiwalay yung kare-kare sauce para manatiling crispy yung pork.",
      },
      {
        title: "Serve na.",
        text: "At syempre, bagoong sa tabi. Ayan bebe, kumpleto na talaga ang Crispy Kare-Kare natin.",
      },
    ],
  },
];

// Helpers para sa UI
export const getRecipeById = (id) => recipes.find((r) => r.id === id);

export const searchRecipes = (query = "") => {
  const q = query.trim().toLowerCase();
  if (!q) return recipes;
  return recipes.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q)) ||
      r.ingredients.some((i) => i.name.toLowerCase().includes(q)),
  );
};
