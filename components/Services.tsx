/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AG1St0F8tl8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Services() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-background hover:bg-muted group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                <CodeIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>
            <p className="text-muted-foreground mt-2">
              Unleash the power of the web with our expert web development services.
            </p>
          </div>
          <div className="bg-background hover:bg-muted group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                <SmartphoneIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Mobile Development</h3>
            </div>
            <p className="text-muted-foreground mt-2">
              Craft exceptional mobile experiences with our mobile development expertise.
            </p>
          </div>
          <div className="bg-background hover:bg-muted group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                <DatabaseIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Database Management</h3>
            </div>
            <p className="text-muted-foreground mt-2">
              Optimize your data infrastructure with our expert database management services.
            </p>
          </div>
          <div className="bg-background hover:bg-muted group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                <CloudIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Cloud Services</h3>
            </div>
            <p className="text-muted-foreground mt-2">
              Leverage the power of the cloud with our comprehensive cloud services.
            </p>
          </div>
          <div className="bg-background hover:bg-muted group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Consulting</h3>
            </div>
            <p className="text-muted-foreground mt-2">
              Benefit from our expert consulting services to achieve your business goals.
            </p>
          </div>
          <div className="bg-background hover:bg-muted group rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-4">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                <CpuIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">IT Support</h3>
            </div>
            <p className="text-muted-foreground mt-2">
              Rely on our comprehensive IT support services to keep your systems running smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}

function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}

function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}

function Trash2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
