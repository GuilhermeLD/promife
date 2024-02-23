function Structure() {
  return (
    <div className="bg-red-200 text-text h-auto w-full">
      <div className="flex flex-col items-center text-center px-72">
        <span className="uppercase text-title text-4xl font-semibold py-9">
          Estrutura
        </span>
        <p className="pb-4 font-light">
          O Promifé recebe cristãos evangélicos de diversas idades, regiões e
          filiações eclesiásticas, desde que seja batizado, membro ativo na
          igreja e tenha uma recomendação pastoral por escrito. Não há
          restrições entre os que tenham a mesma visão pautada em Cristo e na
          Palavra.
        </p>
        <p className="pb-4 font-light ">
          O discipulado ocorre através das igrejas locais que conhecem a
          realidade da cidade e da população, podendo haver auxílio do projeto
          na capacitação quanto a este discipulado.
        </p>
      </div>
      <div className="flex flex-col pt-14">
        <div className="flex relative left-1/2 -translate-x-28">
          <img
            src="./public/img/evangelismo.jpg"
            alt=""
            className="size-52 object-cover rounded-full"
          />
          <div className="flex flex-col gap-5 pl-12 pt-7">
            <span className="text-title font-semibold text-2xl">
              Evangelismo na Comunidade
            </span>
            <p className="pr-28 text-left font-light hidden">
              O evangelismo na comunidade é a maior ação do projeto. Durante a
              tarde os jovens são divididos em grupos de dois ou três e visitam
              casas oferecendo aos moradores da região um encontro para que
              possam ouvir mais sobre o evangelho.
            </p>
          </div>
        </div>

        <div className="flex relative left-1/2 -translate-x-28 ">
          <img
            src="./public/img/criancas.jpg"
            alt=""
            className="size-52 object-cover rounded-full"
          />

          <div className="flex flex-col gap-5 -translate-x-full pr-[300px] text-end pl-[300px]">
            <span className="text-title font-semibold text-2xl">
              Trabalho com Crianças
            </span>
            <p className="font-light hidden">
              Ainda durante a tarde uma equipe do projeto se responsabiliza pelo
              trabalho com crianças, oferecendo entretenimento e aprendizado
              bíblico . Os encontros são realizados em lugares seguros e
              acessíveis dentro ou próximo da própria comunidade que está sendo
              trabalhada.
            </p>
          </div>
        </div>

        <div className="flex relative left-1/2 -translate-x-28">
          <img
            src="./public/img/panto.jpg"
            alt=""
            className="size-52 object-cover rounded-full"
          />
          <div className="flex flex-col gap-5 pl-12 pt-7">
            <span className="text-title font-semibold text-2xl">
              Artes e Multimídia
            </span>
            <p className="pr-28 text-light font-light line-clamp-3 hidden">
              Durante a noite todos promifeístas se juntam com a sua equipe e
              são realizadas ações em praças e em espaços públicos no meio da
              comunidade que ofereçam bastante visibilidade.
            </p>
          </div>
        </div>

        <div className="">
          <div className="size-52 bg-primary rounded-full flex relative left-1/2 -translate-x-28 pt-20 pb-10">
            <a className="text-white font-bold text-2xl text-center">
              Faça parte também
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex relative left-1/2">
        <ul className="">
          <li>
            <img
              src="./public/img/evangelismo.jpg"
              alt=""
              className="rounded-full size-52 left-1/2"
            />
            <div className="">
              <span className="text-title text-2xl">Evangelismo</span>
              <p className="font-light px-60">
                O evangelismo na comunidade é a maior ação do projeto. Durante a
                tarde os jovens são divididos em grupos de dois ou três e
                visitam casas oferecendo aos moradores da região um encontro
                para que possam ouvir mais sobre o evangelho.
              </p>
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  )
}

export default Structure
