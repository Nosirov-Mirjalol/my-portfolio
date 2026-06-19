import { CircleCheckBig } from "lucide-react"
import SectionTitle from "../SectionTitle"

const highlights = ["Production dashboards with real APIs","Strong TypeScript & React patterns","Multi-role auth and RBAC flows","Clean, reusable design systems"]
const About = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-auto lg:h-[70vh] gap-4 bg-[#090611] px-4 py-8 text-center md:px-8 md:py-16 lg:px-16 lg:py-24">
      <SectionTitle floor={1} title="About me" />
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 md:gap-5 py-2 text-white">
        <div className="w-full lg:w-[50%]">
            <h3 className="text-xl font-medium text-white/80 text-start tracking-wider">
                15-year-old Frontend Developer with 2 years of experience. I build fast, pixel-honest web interfaces and React-based dashboards. Moving beyond basic React, I focus on typed code, smart state management, and leveraging AI tools to optimize my development workflow.
            </h3>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center flex-col items-center gap-2">
            <h2>HIGHLIGHTS</h2>
            <ul className="flex flex-col gap-2 py-2">
                {highlights.map((highlight, index) => (
                    <li key={index} className="text-lg font-medium text-white text-start tracking-wider">
                        <CircleCheckBig className="inline-block mr-2" />
                        {highlight}
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
