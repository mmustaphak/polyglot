import franceFlag from "/fr-flag.png";
import spainFlag from "/sp-flag.png";
import japaneseFlag from "/jpn-flag.png";

type LangOps = {
  id: number;
  img: string;
  value: string;
};

const langOptions: LangOps[] = [
  {
    id: 1,
    img: franceFlag,
    value: "French",
  },
  {
    id: 2,
    img: spainFlag,
    value: "Spanish",
  },
  {
    id: 3,
    img: japaneseFlag,
    value: "Japanese",
  },
];

export default langOptions