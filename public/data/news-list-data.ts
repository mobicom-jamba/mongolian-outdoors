import one from "@/public/images/news/post-1.jpg";
import two from "@/public/images/news/post-2.jpg";
import three from "@/public/images/news/post-3.jpg";

const NewsListData = [
  {
    id: 0,
    image: one,
    title: "Horseback Adventure Across Mongolia's Great Steppe",
    date: "24th March 2025",
    comments: 23,
    description:
      "Riding horses across Mongolia's vast open steppe offers travelers an unforgettable experience. Learn traditional riding techniques and marvel at the breathtaking natural scenery.",
    destination: "/news-details",
  },
  {
    id: 1,
    image: two,
    title: "10 Reasons to Explore the Gobi Desert Region",
    date: "24th March 2025",
    comments: 35,
    description:
      "The Gobi's sand dunes, rocky mountains, and ancient dinosaur fossil sites make it one of the most fascinating travel destinations for adventure seekers.",
    destination: "/news-details",
  },
  {
    id: 2,
    image: three,
    title: "Discovering the Natural Beauty of Khuvsgul Lake",
    date: "24th March 2025",
    comments: 43,
    description:
      "Khuvsgul Lake is Asia's deepest blue lake, surrounded by taiga forest and mountains, offering travelers both serenity and adventure in equal measure.",
    destination: "/news-details",
  },
];

export default NewsListData;
