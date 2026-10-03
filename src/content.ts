import "@fontsource/khand/600.css";
import "@fontsource/khand/700.css";
import type { Site } from "./lib";

export const SITE: Site = {
  name: "Lazeez Restaurant",
  sub: { en: "North Indian & handi specials · Durga Colony, Sohna", hi: "नॉर्थ इंडियन और हांडी स्पेशल · दुर्गा कॉलोनी, सोहना" },
  banner: { en: "Handi chicken with khameeri roti, every day from 11am", hi: "हांडी चिकन और ख़मीरी रोटी, रोज़ सुबह 11 बजे से" },
  phone: "918396894583",
  phoneDisplay: "+91 83968 94583",
  lat: 28.2376165,
  lon: 77.0696545,
  hours: [[11, 23], [11, 23], [11, 23], [11, 23], [11, 23], [11, 23], [11, 23]],
  theme: {
    dark: true,
    bg: "#14080b",
    bg2: "#200d12",
    panel: "#281218",
    ink: "#f8ece6",
    ink2: "#d4bdb4",
    ink3: "#987f78",
    line: "#3c1c23",
    accent: "#e08a4f",
    onAccent: "#2b1003",
    display: "Khand",
    weight: 700,
    upper: true,
  },
  scene: "handi",
  align: "right",
  hero: {
    title: [
      { en: "Slow-cooked in the handi,", hi: "हांडी में धीमी आंच पर," },
      { en: "served with a smile.", hi: "मुस्कान के साथ परोसा।" },
    ],
    proof: {
      en: "4.0 on Google from 297 reviews. Handi chicken, tikka, rara and rogan josh near the Sohna bus stand.",
      hi: "गूगल पर 297 रिव्यू से 4.0। हांडी चिकन, टिक्का, रारा और रोगन जोश, सोहना बस स्टैंड के पास।",
    },
    fallback: "/img/p11.jpg",
  },
  marquee: ["Handi Chicken", "Khameeri Roti", "Chicken Lollipop", "Chicken Tikka", "Chicken Rara", "Masala Chicken", "Butter Paneer", "Rogan Josh"],
  dishes: {
    title: { en: "", hi: "" },
    body: { en: "", hi: "" },
    layout: "list",
    items: [],
  },
  gallery: {
    title: { en: "Inside Lazeez", hi: "लज़ीज़ के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p11.jpg", alt: "Dining room at Lazeez Restaurant", wide: true },
      { src: "/img/p3.jpg", alt: "Plate of chowmein" },
      { src: "/img/p2.jpg", alt: "At Lazeez Restaurant" },
      { src: "/img/p5.jpg", alt: "The Lazeez menu", wide: true },
    ],
  },
  feature: {
    kind: "thali",
    title: { en: "The handi menu, reviewed", hi: "हांडी मेन्यू, रिव्यू के साथ" },
    body: { en: "Six dishes, six Google reviewers, their exact words.", hi: "छह डिश, छह गूगल रिव्यू, उन्हीं के शब्द।" },
    img: "/img/p11.jpg",
    items: [
      { label: { en: "Handi Chicken & Khameeri Roti", hi: "हांडी चिकन और ख़मीरी रोटी" }, quote: "Handi chicken with Khameeri Roti was just amazing." },
      { label: { en: "Lollipop & Tikka", hi: "लॉलीपॉप और टिक्का" }, quote: "You must try chicken lollipop and chicken tikka there." },
      { label: { en: "Chicken Rara", hi: "चिकन रारा" }, quote: "i suggest here to try chicken Rara, awesome taste." },
      { label: { en: "Masala Chicken", hi: "मसाला चिकन" }, quote: "Specially the masala chicken" },
      { label: { en: "Butter Paneer Masala", hi: "बटर पनीर मसाला" }, quote: "Butter paneer masal is delicious" },
      { label: { en: "Rogan Josh", hi: "रोगन जोश" }, quote: "Chicken Rogan Josh - This as expected was subtle and had ghee in it." },
    ],
  },
  reviews: {
    title: { en: "Polite staff, calm service", hi: "विनम्र स्टाफ़, शांत सर्विस" },
    rating: 4.0,
    dist: [185, 33, 24, 13, 42],
    quotes: [
      { quote: "Loved this place for the quality of food they serve and you will be invited with a smile", stars: 5 },
      { quote: "Food is awesome and also the behaviour of staff is so polite and calm…", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Near the Sohna bus stand", hi: "सोहना बस स्टैंड के पास" },
    img: "/img/p1.jpg",
    alt: "Lazeez Restaurant neon sign",
    address: { en: "Near Vishwakarma Glass House, Durga Colony, Sohna", hi: "विश्वकर्मा ग्लास हाउस के पास, दुर्गा कॉलोनी, सोहना" },
    note: { en: "A reviewer’s directions: “It's located near the Sohna Bus Stand on the Sohna Road.”", hi: "एक रिव्यू के मुताबिक: सोहना रोड पर, सोहना बस स्टैंड के पास।" },
  },
  waHello: {
    en: "Hi Lazeez, I'd like to order / book a table. Items or people: , time: ",
    hi: "नमस्ते लज़ीज़, मुझे ऑर्डर करना है / टेबल बुक करनी है। आइटम या लोग: , समय: ",
  },
  order: ["feature", "reviews", "gallery", "visit"],
};
