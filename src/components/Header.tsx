function Header() {
  return (
    <header className="h-20 w-full flex py-6 px-4 fixed top-0 pl-40 pr-40 bg-zinc-700">
      <h1 className="text-left flex-auto py-25 pl-10 text-white text-4xl uppercase">
        {/* <img src="" alt="logo" /> */}
        <a href="#">Promifé</a>
      </h1>
      <nav className="space-x-8 text-right flex-auto text-white py-2 pr-7 text-lg uppercase ">
        <a href="" className=" font-light hover:text-Primary/95">
          <span>home</span>
        </a>
        <a href="" className="hover:text-Primary">
          <span>past</span>
        </a>
        <a href="" className="hover:text-Primary">
          <span>now</span>
        </a>
        <a href="" className="hover:text-Primary">
          <span>future</span>
        </a>
        <a href="" className="hover:text-Primary">
          <span>contact</span>
        </a>
      </nav>
    </header>
  )
}

export default Header
