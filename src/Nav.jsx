import { useState } from "react";
import Link from "./Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:username", name: "Profile" },
  ];

  return (
    <div>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {
            open === true ? <RxCross2 className="text-3xl"></RxCross2> : <GiHamburgerMenu className="text-3xl"></GiHamburgerMenu> 
        }
        
      </div>
      <ul className="flex gap-6">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </div>
  );
}
