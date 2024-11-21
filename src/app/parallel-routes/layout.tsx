export default function DashboardLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="col-span-2">{children}</div>
          <div>{analytics}</div>
          <div>{team}</div>
        </div>
      </div>
    </div>
  )
}

