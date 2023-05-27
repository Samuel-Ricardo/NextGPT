import { UserIcon } from "@/app/assets/icons"
import { LOGO } from "@config/const"
import { IChatItemProps } from "@Types"
import { Loading, MarkDownRender } from ".."
import Image from "next/image"

export const ChatItem = ({ is_from_bot, content, loading }: IChatItemProps) => {
  const background = is_from_bot ? "bg-gray-800" : "bg-gray-600"

  return (
    <li className={`w-full text-gray-100 ${background}`}>
      <div className="flex-col">
        <div className="md:max-w-2xl lg:max-w-xl xl:max-w-3xl py-6 m-auto flax flex-row items-start space-x-4">
          {is_from_bot ? (
            <Image
              src={LOGO.FULL_CYCLE}
              alt="bot avatar image, full cycle logo"
              width={30}
              height={30}
            />
          ) : (
            <UserIcon className="w-[30px] flex flex-col relative start" />
          )}

          <MarkDownRender content={content} />
        </div>

        {loading && (
          <div className="flex items-center justify-center pb-2">
            <Loading />
          </div>
        )}
      </div>
    </li>
  )
}
