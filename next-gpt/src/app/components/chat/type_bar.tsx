import { ArrowRightIcon } from "@/app/assets/icons"
import { ITypeBarProps } from "@Types"
import { ELEMETNS } from "@config/const"

export function TypeBar({
  onSubmit,
  defaultMessage,
  messageLoading,
}: ITypeBarProps) {
  const defaultValue =
    defaultMessage ?? "Gere uma classe de produto em JavaScript"

  return (
    <div className="absolute bottom-0 w-full !bg-transparent bg-gradient-to-b from-gray-800 to-gray-950">
      <div className="mb-6 mx-auto max-w-3xl">
        <form id={ELEMETNS.ID.FORM} onSubmit={onSubmit}>
          <div className="flex flex-col py-3 pl-4 relative text-white bg-gray-700 rounded-2xl opacity-80">
            <textarea
              id={ELEMETNS.ID.MESSAGE}
              data-testid={ELEMETNS.ID.MESSAGE}
              tabIndex={0}
              rows={1}
              placeholder="Type your message..."
              className="resize-none pr-14 bg-transparent pl-0 outline-none"
              defaultValue={defaultValue}
            ></textarea>

            <button
              id={ELEMETNS.ID.SUBMIT}
              data-testid={ELEMETNS.ID.SUBMIT}
              type="submit"
              className="absolute top-1 text-gray-400 bottom-2.5 rounded hover:text-gray-400 hover:bg-gray-900 md:right-4"
              disabled={messageLoading}
            >
              <ArrowRightIcon className="text-white-500 w-8" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
