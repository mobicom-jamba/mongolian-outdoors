import one from "@/public/images/news/post-1.jpg";
import two from "@/public/images/news/post-2.jpg";
import three from "@/public/images/news/post-3.jpg";

const NewsListData = [
  {
    id: 0,
    image: one,
    title: "Монголын тал нутагт морь унаж адал явдал хийх нь",
    date: "2025 оны 3-р сарын 24",
    comments: 23,
    description:
      "Монголын өргөн уудам тал нутагт морь унаж аялах нь жуулчдад мартагдашгүй туршлага хангадаг. Уламжлалт морь унах аргыг сурч, байгалийн үзэсгэлэнгээр хөөрөх боломжтой.",
    destination: "/news-details",
  },
  {
    id: 1,
    image: two,
    title: "Говийн бүс нутагт аялж байх 10 шалтгаан",
    date: "2025 оны 3-р сарын 24",
    comments: 35,
    description:
      "Говийн элсэн мандал, хадан уулс, эртний динозаврын олдворын газрууд нь говийн бүсийг аялал жуулчлалын хамгийн сонирхолтой газруудын нэг болгодог.",
    destination: "/news-details",
  },
  {
    id: 2,
    image: three,
    title: "Хөвсгөл нуурын байгалийн үзэсгэлэнг нээхүү",
    date: "2025 оны 3-р сарын 24",
    comments: 43,
    description:
      "Хөвсгөл нуур бол Азийн хамгийн гүн цэнхэр нуур бөгөөд тайгын ой, уулс хүрээлэн буй байгаль нь жуулчдад амар амгалан, адал явдал хоёуланг нь хангадаг.",
    destination: "/news-details",
  },
];

export default NewsListData;
