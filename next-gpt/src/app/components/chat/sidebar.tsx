import { IChatSidebarProps } from "@Types"
import { Sidebar } from ".."
import { LogoutIcon, PlusIcon } from "@/app/assets/icons"
import { ChatList } from "./list"

export function ChatSidebar({
  chats,
  onNewChatButtonClick,
  onListItemClick,
  onLogoutButtonClick,
}: IChatSidebarProps) {
  return (
    <Sidebar>
      <button
        className="flex- p-3 gap-3 rounded hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-1 border border-white/20"
        onClick={onNewChatButtonClick}
      >
        <PlusIcon className="w-5 h-5" />
        New Chat :D
      </button>

      <ChatList chats={chats} onItemClick={onListItemClick} />

      <button
        className="flax p3 mt-1 gap3 rounded hover:bg-gray-500/10 text-sm text-white"
        onClick={onLogoutButtonClick}
      >
        <LogoutIcon className="h-5 w-5" />
        Log out
      </button>
    </Sidebar>
  )
}
