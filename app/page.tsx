import Home from "@/contents/home.mdx";
import PapernotesFont from "next/font/local";
import { SiInstagram, SiGithub } from "@icons-pack/react-simple-icons";

const Papernotes = PapernotesFont({
  src: "../assets/fonts/Papernotes.woff2"
});

export default function Main() {
  return (
    <div className={Papernotes.className}>
      <Home className="text-lg" />
      <div className="flex flex-row py-6 justify-start">
        <a href="https://instagram.com/nyzr.al" target="_blank" rel="noopener noreferrer">
          <SiInstagram size={24} className="ml-4" />
        </a>
        <a href="https://github.com/nizaralghifary" target="_blank" rel="noopener noreferrer">
          <SiGithub size={24} className="ml-4" />
        </a>
      </div>
    </div>
  );
}