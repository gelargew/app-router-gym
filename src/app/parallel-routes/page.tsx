import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard Overview</CardTitle>
        <CardDescription>Welcome to your dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main dashboard content. Use the sidebar to navigate to different sections.</p>
      </CardContent>
    </Card>
  )
}

