import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

function Testimonials() {
  return (
    <Dialog.Root>
      <div className="flex align-center justify-center">
        <span className="text-title text-5xl pt-32 font-semibold uppercase">
          Testemunhos
        </span>
      </div>
      <div className="flex align-center justify-center">
        <div className="grid grid-cols-3 p-24 gap-20">
          <Dialog.Trigger className="hover:bg-secondary z-20">
            <img
              src="./public/img/criancas.jpg"
              alt=""
              className="size-96 object-cover rounded-full z-10"
            />
          </Dialog.Trigger>
          {/* <img
            src="./public/img/criancas.jpg"
            alt=""
            className="size-96 object-cover rounded-full "
          />
          <img
            src="./public/img/criancas.jpg"
            alt=""
            className="size-96 object-cover rounded-full "
          /> */}
        </div>
      </div>
      <Dialog.DialogPortal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="z-20 fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md outline-none w-full p-40 mt-40">
          <div className="w-full bg-white text-text lex flex-col px-56 py-24 flex justify-center gap-2">
            <div className="">
              <Dialog.Close className="flex left-0 top-0 bg-slate-800 p-1.5 text-slate-200 hover:text-slate-200">
                <X className="size-5" />
              </Dialog.Close>
            </div>

            <h3 className="text-title uppercase font-semibold text-3xl">
              Pamela Moreira
            </h3>
            <span className="text-text font-thin">28 anos, São Paulo</span>
            <img
              src="/img/panto.jpg"
              alt=""
              className="size-[400px] object-cover flex justify-center"
            />
            <p className="text-center text-pretty whitespace-pre pt-4">
              "Eu sou a Pamela e vou contar um pouco do que aconteceu comigo no
              Promifé. Ele nos perdoa, e deseja nos usar, apesar de nós. A
              maioria das pessoas que deixam de ir ao Promifé, dizem que não
              vão, por não se sentirem preparadas ou dignas de serem usadas por
              Deus: "não sei falar", "tenho vergonha", "meu relacionamento com
              Deus está frio"! Ouço essas frases com frequência e já disse
              coisas como essas também. Em todas as vezes que fui ao Promi, eu
              vivia fases da vida em que estava dando muito menos pra Deus do
              que Ele merecia, eram dias em que minha dedicação à nossa amizade,
              nosso tempo de qualidade juntos no secreto do meu quarto,
              praticamente não existiam e meus problemas familiares e falta de
              esperança drenavam todas as minhas forças. Ainda assim, em TODAS
              as vezes, Ele proveu recursos financeiros e falou claramente
              através de diversas circunstâncias que eu tinha algo a fazer
              nessas cidades. Culpa, impotência, vergonha, insegurança. Após o
              meu sim para me deixar ser usada como um instrumento nas mãos
              d’Ele, todas essas muralhas que me impediam de tomar posse do
              perdão de Jesus e da identidade de filha amada, e discípula em
              constante aprendizado, ruíram. Nesses dias, eu fui lembrada que
              não há nada que possamos fazer que nos torne merecedores do perdão
              de Deus ou dignos de ser usados por Ele. Mas é aqui que sua
              incrível glória entra em cena, Ele nos quer mesmo assim, todos os
              dias há novas porções de misericórdia (graça imerecida) para nós,
              todos os dias Ele está pronto a nos ensinar algo através de Sua
              Palavra e do seu Espírito que habita em nós, para que possamos
              passar isso adiante. Via de regra, em todos os projetos que pude
              servir, tive a oportunidade de encontrar pessoas que passavam por
              problemas semelhantes aos meus e, pra minha surpresa e honra Dele,
              eu tive algo a dizer pra essas pessoas sobre paciência,
              resiliência e Fé na soberania do Senhor sobre todas as coisas. E
              foram nos dias de Promifé também, que eu pude entender que meu
              ministério é "cuidar de pessoas", ouvindo, aconselhando-as e
              oferecendo ferramentas para que elas possam lidar com suas
              emoções. Continua nos comentários."
            </p>
          </div>
        </Dialog.Content>
      </Dialog.DialogPortal>
    </Dialog.Root>
  )
}

export default Testimonials
