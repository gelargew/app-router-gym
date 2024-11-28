import { Suspense } from 'react'
import { ErrorBoundary } from './error-boundary'
import { UserListSkeleton } from './user-list-skeleton'
import { UserList } from './user-list'


export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Suspense Boundary Example</h1>
      <ErrorBoundary>
        <Suspense fallback={<UserListSkeleton />}>
          <UserList />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<UserListSkeleton />}>
          <UserList />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<UserListSkeleton />}>
          <UserList />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<UserListSkeleton />}>
          <UserList />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<UserListSkeleton />}>
          <UserList />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}

