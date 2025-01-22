interface Blog {
  id: number;
  link: string;
  heading: string;
  paragraph: string;
  img: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    link: "https://www.facebook.com/watch/?v=205730272448446#_=_",
    heading: "MIRËMBAJTJA E DHËMBËVE 🔴 INTERVISTË ME DR. SPEC. ARIF ARIFI",
    paragraph:
      "📌 Çfarë duhet të kemi parasysh kur flasim për higjienën orale, Sa kemi vetëdije për mirëmbajtjen e dhëmbëve, Rregullimi i dhëmbëve te fëmijët",
    img: "/blog1.jpg",
  },
  {
    id: 2,
    link: "https://doktori.mk/2018/10/09/kako-stresot-se-odrazuva-na-oralnoto-zdravje/",
    heading: "Како стресот се одразува на оралното здравје",
    paragraph:
      "Заради преголем стрес може да се појават главоболки, анксиозоност, дигестивни промени, нарушување на општото здравје и др.",
    img: "/blog2.jpg",
  },
  {
    id: 3,
    link: "https://doktori.mk/2018/10/09/dentalni-interventsii-i-soveti-za-podobro-oralno-i-opshto-zdravje-pri-bremenost/",
    heading:
      "Дентални интервенции и совети за подобро орално и општо здравје при бременост",
    paragraph:
      "Грижата за оралната хигиена во текот на бременоста е императив за мајката, поради тоа што оралното здравје на мајката може да има влијание врз здравјето на детето. ",
    img: "/blog3.png",
  },
  {
    id: 4,
    link: "https://doktori.mk/2018/10/09/kako-do-zdravi-zabi-pri-nosene-na-ortodontski-aparati/",
    heading: "Како до здрави заби при носење на ортодонтски апарати",
    paragraph:
      "Сите сакаат да имаат убаво подредени бели заби и убава насмевка, затоа сè почесто пациентите се одлучуваат на ортодонтски третман. ",
    img: "/blog4.jpg",
  },
  {
    id: 5,
    link: "https://doktori.mk/2018/12/31/belene-na-zabite-so-aktiven-jaglen-kako-funktsionira-i-kako-da-go-pravite-toa/",
    heading:
      "Белење на забите со активен јаглен – како функционира и како да го правите тоа",
    paragraph:
      "Во последно време постои тренд во социјалните мрежи и пошироко како луѓето прават белење на забите со јаглен во активна форма (activated charocoal).",
    img: "/blog5.jpg",
  },
  {
    id: 6,
    link: "https://nistori.com/shendetesi/si-ti-mbash-dhembet-e-drejte-pas-aparateve-ortodontike/",
    heading: "ROLI I PROTEZAVE TE DHËMBËT",
    paragraph:
      "Pas drejtimit të dhëmbëve me aparate ortodontike, për fat të keq, ato nuk qëndrojnë përjetësisht në atë pozicion, por kërkojnë dhe një sforco të fundit nga ana jote.",
    img: "/blog6.jpg",
  },
  {
    id: 7,
    link: "https://doktori.mk/2018/10/09/zaben-kamen-zoshto-i-kako-nastanuva/",
    heading: "Забен камен – зошто и како настанува",
    paragraph:
      "И покрај сите напори за имање на здрав орален медиум, кај голем број луѓе се забележува создавање на тврди забни наслаги.",
    img: "/blog7.jpg",
  },
];

export default blogs;
