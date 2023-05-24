import { UserIcon } from "@/app/assets/icons"
import { LOGO } from "@/config/const"
import { IChatItemProps } from "@Types"
import { Loading } from ".."
import Image from "next/image"

export const ChatItem = ({ is_from_bot, content, loading }: IChatItemProps) => {
  const background = is_from_bot ? "bg-gray-800" : "bg-gray-600"

  return (
    <li>
      <div>
        <div>
          {is_from_bot ? (
            <Image
              src={LOGO.FULL_CYCLE}
              alt="bot avatar image, full cycle logo"
              width={30}
              height={30}
            />
          ) : (
            <UserIcon className="" />
          )}

          <div />
        </div>

        {loading && (
          <div>
            <Loading />
          </div>
        )}
      </div>
    </li>
  )
}
