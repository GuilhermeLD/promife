import { Check, Target, BookHeart } from 'lucide-react'

function Project() {
  return (
    <div className="flex flex-col items-center bg-slate-200 py-16 px-72 text-center">
      <h2 className="uppercase text-title font-semibold text-4xl pb-8">
        O Projeto
      </h2>
      <span className="text-text font-light px-20">
        Nascido na década de 70 tendo como idealizador Pr. Conrado Pfannnemuller
        e posteriormente, como mentor, Pr. Kenneth Flurr, o Promifé é um projeto
        missionário cristão de raízes batistas com participação
        interdenominacional que nasceu com o intuito de reunir jovens ativos de
        igrejas evangélicas do Brasil e de outros países durante uma semana dos
        meses de Janeiro e Julho para agir em comunidades do nosso país levando
        o evangelho e estimulando o discípulado em parceria com Igrejas Locais.
      </span>
      <span className="text-text font-light py-4 px-20">
        Durante os oito dias do projeto os participantes são submetidos a
        treinamento e estudo bíblico que focam na formação de caráter e
        missionária durante a manhã. No período da tarde e da noite vamos ao
        campo missionário, usando nossas habilidades com artes, entretenimento,
        multimídia e palavra para falar do amor de Cristo nas casas, em praças
        públicas e para as crianças.
      </span>
      <div className="flex justify-center  pt-10 px-20 gap-7">
        <div className="flex flex-col items-center gap-4">
          <Check className="text-white bg-primary size-32 p-4 rounded-full" />
          <span className="text-title text-3xl font-semibold">Missão</span>
          <p className="text-text font-light text-sm text-center">
            “Ser luz, levando salvação em Cristo Jesus, edificando, discipulando
            e servindo pessoas, mostrando amor prático através do evangelismo e
            da plantação de igreja”.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Target className="text-white bg-primary size-32 p-4 rounded-full" />
          <span className="text-title text-3xl font-semibold">Objetivo </span>
          <p className="text-text font-light text-sm text-center">
            “Estabelecer o Reino de Deus sobre os lugares em que o Promifé
            passar e transformar a vida de todos os envolvidos no projeto”.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <BookHeart className="text-white bg-primary size-32 p-4 rounded-full" />
          <span className="text-title text-3xl font-semibold">
            Base Bíblica
          </span>
          <p className="text-text font-light text-sm text-center">
            “Assim brilhe a luz de vocês diante dos homens, para que vejam as
            suas boas obras e glorifiquem ao Pai de vocês, que está nos céus”.
            Mateus 5:16
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project
