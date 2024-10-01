function Contact() {
  return (
    <div className=" bg-slate-800 py-12 bg-mapImage ">
      <h2 className="flex justify-center uppercase font-semibold text-white text-4xl">
        Contato
      </h2>
      <form className="flex justify-center gap-10">
        <div className="grid gap-4 py-4 ">
          <input
            type="text"
            name="Name"
            id=""
            placeholder="Seu nome"
            className="p-3 rounded-md placeholder:text-title outline-none"
          />
          <input
            type="email"
            name="Email"
            id=""
            placeholder="Seu E-mail"
            className="p-3 rounded-md placeholder:text-title outline-none"
          />
          <input
            type="tel"
            name="TelephoneNumber"
            id=""
            placeholder="Seu Numero de Telefone"
            className="p-3 rounded-md placeholder:text-title outline-none"
          />
        </div>
        <div className="flex">
          <textarea
            placeholder="Diga aqui oq tu queres meu amor"
            className="p-2 rounded-md placeholder:text-title outline-none min-h-4 max-h-44 mt-4 w-80"
          />
        </div>
      </form>
    </div>
  )
}
export default Contact
