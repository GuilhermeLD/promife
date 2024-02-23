function Header() {
  return (
    <header className=" flex items-center justify-between fixed top-7 left-1/2 -translate-x-1/2 rounded-full bg-zinc-900 py-3 pl-3 pr-4 z-10">
      <div>
        <img
          src="./public/img/logo-white.png"
          alt="Logo"
          className="w-12"
        ></img>
      </div>
      <div className="flex text-white gap-3 ml-32">
        <a href="" className="hover:text-primary hover:border-">
          about us
        </a>
        <a href="" className="hover:text-primary">
          structure
        </a>
        <a href="" className="hover:text-primary">
          testimonials
        </a>
        <a href="" className="hover:text-primary">
          our team
        </a>
        <a href="" className="hover:text-primary">
          contact
        </a>
      </div>
      <div className="h-10 w-px mx-8 bg-white"></div>
      <div>
        <a href="" className="text-white hover:text-primary">
          login
        </a>
      </div>
    </header>
  )
}

export default Header
