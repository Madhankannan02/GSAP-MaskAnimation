import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {

  return (
    <main className="min-h-screen w-full flex justify-center items-center overflow-hidden bg-[#222222]">

        <div className="og">

          <p className="w-150
          text-2xl
          text-[rgba(255,255,255,0.4)]
          font-semibold
          leading-snug
          ">
            Writing <span className="
            text-[#ddfc3e]
            "> 
            beautiful code
            </span> 
            means thinking Like an artist and debugging like a detective. Every function is a story, every variable a character. Master your craft through practice, patience, and endless curiosity about how things work.
            </p>
        </div>

        <div className="
        mask
        min-h-screen
        w-full
        flex
        justify-center
        items-center
        overflow-hidden
        absolute
        bg-[#ddfc3e]
        mask-[url('./Images/Yellow_Circle.png')]
        [mask-size:theme(size.mask-regular)]
        mask-no-repeat
        pointer-events-none
        ">
          <p className="w-150
          text-2xl
          text-black
          font-semibold
          leading-snug
          ">Building 
          <span className="
          text-[#ff0000]
          ">great software</span> requires seang beyond syntax into architecture and design. Test early, refactor often, document clearly. Success comes from collaboration, continuous learning, and caring deeply about user experience.</p>
        </div>

    </main>
  )
}

export default App
