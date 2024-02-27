import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsTelegram,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 rounded-lg text-white">
                News
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://tengrinews.kz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  News
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  News Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/MirasAmangeldiuly" target="_blank" rel="noopener noreferrer">
                  Github
                </Footer.Link>
                <Footer.Link href="https://t.me/sarymiras" target="_blank" rel="noopener noreferrer">Telegram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Social Network" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.instagram.com/sarymiras/" target="_blank" rel="noopener noreferrer">Instagram</Footer.Link>
                <Footer.Link href="https://wa.me/7002707724" target="_blank" rel="noopener noreferrer">Whatsapp </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Miras amangeldiuly se-2202            "
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://www.instagram.com/sarymiras/" icon={BsInstagram} />
            <Footer.Icon href="https://github.com/MirasAmangeldiuly" icon={BsGithub} />
            <Footer.Icon href="https://t.me/sarymiras" icon={BsTelegram} />

          </div>
        </div>
      </div>
    </Footer>
  );
}
