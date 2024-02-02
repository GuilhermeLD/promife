import ButtonLogin from './ButtonLogin'

function Header() {
  return (
    <header className="h-18 w-full flex fixed top-0 px-[100] py-5 bg-zinc-700 justify-center">
      <div className="flex-1 px-12 text-white uppercase pt-1">
        <h1>Promife</h1>
      </div>
      <div className="flex flex-1 text-white gap-4 py-2 ">
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
      <div className="flex flex-1 pl-[180px]">
        <ButtonLogin />
      </div>
    </header>
  )
}

export default Header
