import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function TeamPage() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve({})
    }, 5000)
  })
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Here you can manage your team members.</p>
      </CardContent>
    </Card>
  )
}

