
import ErrorBoundaryDemo from './error-boundary-demo'
import FormDemo from './form-demo'


export default function Home() {
  // throw new Error
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Next.js 15 Error Handling Demo (with useActionState)</h1>
      <div className="space-y-8">
        <FormDemo />
        <ErrorBoundaryDemo />
      </div>
    </main>
  )
}

