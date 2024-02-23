'use client'

import { useEffect, useRef } from 'react'
import Button from './Button'
import { gsap } from 'gsap'

function Hero() {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const areaBtnRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.7 } })
    const title = titleRef.current
    const description = descriptionRef.current
    const areaBtn = areaBtnRef.current

    tl.fromTo(
      title,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
      },
    )
    tl.fromTo(
      description,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
      },
    )
    tl.fromTo(
      areaBtn,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
      },
    )
  }, [])
  return (
    <>
      <div className=" text-center text-white bg-home bg-no-repeat bg-scroll bg-center bg-cover h-screen">
        <div className="bg-blur h-screen">
          <div className="container my-0 mx-auto px-4">
            <div className="intro-text pt-80 pb-40">
              <div className="font-bold text-8xl uppercase mb-5" ref={titleRef}>
                <span>Promifé</span>
              </div>
              <div
                className="text-xl mb-24 font-light italic"
                ref={descriptionRef}
              >
                <span>Sendo Luz, mostrando amor</span>
              </div>
              <div className="button-saiba-mais" ref={areaBtnRef}>
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
