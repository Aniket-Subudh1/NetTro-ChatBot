
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessfulCreation() {
  return (
    <div className="flex flex-col items-center justify-center  bg-background py-12 sm:px-6 ">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="bg-primary rounded-full p-4 inline-flex items-center justify-center">
          <RocketIcon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Congratulations!</h1>
        <p className="text-muted-foreground">
          Your chatbot has been successfully deployed. You can now share the following links with your customers:
        </p>
        <div className="bg-muted rounded-lg p-4 text-left space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">Chatbot URL:</span>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                defaultValue="https://chatbot.example.com"
                className="w-full bg-background shadow-none appearance-none"
              />
              <Button variant="ghost" size="icon">
                <CopyIcon className="w-4 h-4" />
                <span className="sr-only">Copy URL</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Backend URL:</span>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                defaultValue="https://api.example.com?apiKey=abc123&apiSecret=def456"
                className="w-full bg-background shadow-none appearance-none"
              />
              <Button variant="ghost" size="icon">
                <CopyIcon className="w-4 h-4" />
                <span className="sr-only">Copy URL</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">API Key:</span>
            <div className="flex items-center gap-2">
              <Input type="text" defaultValue="abc123" className="w-full bg-background shadow-none appearance-none" />
              <Button variant="ghost" size="icon">
                <CopyIcon className="w-4 h-4" />
                <span className="sr-only">Copy API Key</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">API Secret:</span>
            <div className="flex items-center gap-2">
              <Input type="text" defaultValue="def456" className="w-full bg-background shadow-none appearance-none" />
              <Button variant="ghost" size="icon">
                <CopyIcon className="w-4 h-4" />
                <span className="sr-only">Copy API Secret</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center justify-center gap-4">
          
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-[#CB3837] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#A30000] focus:outline-none focus:ring-2 focus:ring-[#CB3837] focus:ring-offset-2"
            prefetch={false}
          >
            <PackageIcon className="w-5 h-5 mr-2" />
            npm
          </Link>
        </div>
      </div>
    </div>
  )
}

function CopyIcon(props:any) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function InstagramIcon(props:any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function PackageIcon(props:any) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function PhoneIcon(props:any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function RocketIcon(props:any) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function TextIcon(props:any) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}