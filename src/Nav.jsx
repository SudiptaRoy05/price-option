import Link from "./Link";

export default function Nav() {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile/:username', name: 'Profile' },
      ];
      
      

  return (
    <div>
        <ul className="flex gap-6">
            {
                routes.map((route)=> <Link key={route.id} route={route}></Link>)
            }
        </ul>
    </div>
  )
}
