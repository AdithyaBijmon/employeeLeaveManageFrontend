import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/userDashboard/leaveHistory')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>You have'nt applied any leave</div>
}
