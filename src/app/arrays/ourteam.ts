interface OurTeam {
  id: number;
  name: string;
  heading: string;
  paragraph: string;
  imgSrc: string;
  paragraph2?: string;
  href: string;
}

const ourteam: OurTeam[] = [
  {
    id: 1,
    name: "doc1name",
    heading: "doc1heading",
    paragraph: "doc1p",
    imgSrc: "/doc2.jpg",
    paragraph2: "doc1p2",
    href: "/en/ourteam/arif",
  },
  {
    id: 2,
    name: "doc2name",
    heading: "doc2heading",
    paragraph: "doc2p",
    imgSrc: "/doc1.jpg",
    paragraph2: "doc2p2",
    href: "/en/ourteam/bardhyl",
  },
  {
    id: 3,
    name: "doc3name",
    heading: "doc3heading",
    paragraph: "doc3p",
    imgSrc: "/doc3.jpg",
    paragraph2: "doc3p2",
    href: "/en/ourteam/agron",
  },
];

export default ourteam;
