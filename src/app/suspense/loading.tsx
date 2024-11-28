import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-[250px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-[300px] mb-2" />
        <Skeleton className="h-4 w-[250px]" />
      </CardContent>
    </Card>
  )
}

