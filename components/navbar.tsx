import Link from "next/link";
import { BiArchive } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const navLinks = [
  {
    name: "Home",
    icon: <BiArchive size={16} />,
    link: "/",
  },
  {
    name: "transactions",
    icon: <FaListUl size={16} />,
    link: "/transactions",
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline size={16} />,
    link: "/settings",
  },
];
export default function NavBar() {
  return (
    <div className='max-w-lg  fixed bottom-0'>
      <div className='max-w-lg bg-[#F5F4F6] flex items-center justify-around py-5 w-full '>
        {navLinks.map((link) => (
          <div key={link.name}>
            <Link href={link.link}>{link.icon}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
