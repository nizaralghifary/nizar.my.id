import Home from "@/contents/home.mdx";
import PapernotesFont from "next/font/local";

const Papernotes = PapernotesFont({
  src: "../assets/fonts/Papernotes.woff2"
});

export default function Main() {
  return (
    <div className={Papernotes.className}>
      <Home className="text-lg" />
    </div>
  );
}