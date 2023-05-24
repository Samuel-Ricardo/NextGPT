import { LOGO } from "@/config/const"
import Image from "next/image"

export function ChatItemError({ children }: { children: any }) {
  return (
    <li className="w-full text-gray-100 bg-gray-800">
      <div className="md:max-w-2xl lg:max-w-xl xl:max-w-3xl py-6 m-auto flex flex-row items-start space-x-4">
        <Image
          src={LOGO.FULL_CYCLE}
          width={30}
          height={30}
          alt="Full Cycle logo, is a circle made with 2 yellow arrows"
        />

        <div className="relative w-[calc(100%-115px)] flex flex-col">
          <span className="text-red-500">
            Ops! An Error Has Ocurred: {children}
          </span>
        </div>
      </div>
    </li>
  )
}
