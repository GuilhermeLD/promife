function nextEvent() {
  return (
    <div className="h-auto flex flex-col items-center py-20 px-52 bg-date">
      <div className="font-semibold uppercase text-white  flex flex-col content-center">
        <span className="text-4xl pb-4">Proximo Promifé</span>
        <p className="flex justify-center text-2xl pb-4">Franca - SP</p>
      </div>
      <div className="flex gap-4 text-white font-semibold text-2xl uppercase grid-rows-3 pb-20">
        <p className="flex items-center justify-center text-center rounded-tl-lg rounded-br-lg bg-primary h-11 w-60">
          13 a 20
        </p>
        <p className="flex items-center justify-center text-center rounded-tl-lg rounded-br-lg bg-primary h-11 w-60">
          julho
        </p>
        <p className="flex items-center justify-center text-center rounded-tl-lg rounded-br-lg bg-primary h-11 w-60">
          2024
        </p>
      </div>
      <div className="">
        <img src="./public/img/promi-bg2.jpg" alt="" />
      </div>
    </div>
  )
}

export default nextEvent
