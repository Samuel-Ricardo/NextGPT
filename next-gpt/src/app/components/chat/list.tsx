import { MessageIcon } from "@/app/assets/icons"
import { IChatListProps } from "@Types/props/chat_list"
import { useRouter } from "next/router"

export function ChatList({ chats, onItemClick }: IChatListProps) {
  const router = useRouter()

  return (
    <div className="flex-grow overflow-y-auto -mr-2 overflow-hidden">
      {chats.map((chat, key) => (
        <div className="pb-2 text-gray-100 text-sm mr-2" key={key}>
          <button
            className="flex p-3 gap-3 rounded hover:bg-[#3f4679] cursor-pointer hover:pr-4 group w-full transition-all"
            onClick={
              onItemClick
                ? () => onItemClick(chat)
                : () => router.push(`/?id=${chat.id}`)
            }
          >
            <MessageIcon className="h-5 w-5" />

            <div className="max-h-5 overflow-hidden break-all relative w-full text-left">
              {chat.messages![0].content}
              <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#3f4679]"></div>
            </div>
          </button>
        </div>
      ))}
    </div>
  )
}
