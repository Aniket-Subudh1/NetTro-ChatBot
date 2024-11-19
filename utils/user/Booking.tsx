
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Booking() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <CircleCheckIcon className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Booking Confirmed</h1>
        <p className="mt-4 text-muted-foreground">
          Thank you for your purchase. Your ticket has been booked successfully.
        </p>
        <div className="mt-6 bg-muted rounded-lg p-6 text-left">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-foreground">Event</h3>
              <p className="text-muted-foreground">Impressionist Art Exhibit</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Date</h3>
              <p className="text-muted-foreground">Sept 15, 2024</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Time</h3>
              <p className="text-muted-foreground">2:00 PM - 6:00 PM</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Tickets</h3>
              <p className="text-muted-foreground">2 Adult</p>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-foreground">Total</h3>
              <p className="text-muted-foreground">₹99.00</p>
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                Download Ticket
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

function CircleCheckIcon(props:any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}