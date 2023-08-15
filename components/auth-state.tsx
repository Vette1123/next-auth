import { SiteHeader } from './site-header'

export default async function AuthStatus() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="mt-8 flex flex-col items-center space-y-6">
        <div className="text-2xl font-bold">Welcome to</div>
        <div className="text-4xl font-bold">NextAuth.js</div>
        <div className="text-2xl font-bold">with</div>
        <div className="text-4xl font-bold">Tailwind CSS</div>
        <div className="text-2xl font-bold">By</div>
        <div className="text-4xl font-bold">Sadge</div>
      </div>
    </div>
  )
}
