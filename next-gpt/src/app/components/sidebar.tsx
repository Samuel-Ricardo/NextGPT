export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 w-[300px] flex h-full flex-col p-2">
      {children}
    </div>
  )
}
