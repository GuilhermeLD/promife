import Button from './Button'

function Hero() {
  return (
    <>
      <div className=" text-center text-white bg-home bg-no-repeat bg-scroll bg-center bg-cover">
        <div className="bg-blur">
          <div className="container my-0 mx-auto px-4">
            <div className="intro-text pt-80 pb-40">
              <div className="font-bold text-8xl uppercase mb-5">
                <span>Promifé</span>
              </div>
              <div className="text-xl mb-24 font-light italic">
                <span>Sendo Luz, mostrando amor</span>
              </div>
              <div className="button-saiba-mais">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
