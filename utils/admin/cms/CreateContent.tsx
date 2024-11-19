
import Link from "next/link"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function CreateContent() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
     
      <main className="flex-1 px-4 lg:px-6 py-8 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Explore Our Museum CMS </h1>
            <div className="flex items-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Create Content</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create New Content</DialogTitle>
                    <DialogDescription>Fill out this form to create new content for the museum.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="title" className="text-right">
                        Title
                      </Label>
                      <Input id="title" placeholder="Enter the title" className="col-span-3" />
                    </div>
                    <div className="grid items-start grid-cols-4 gap-4">
                      <Label htmlFor="description" className="text-right">
                        Description
                      </Label>
                      <Textarea id="description" placeholder="Enter the description" className="col-span-3 h-32" />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="image" className="text-right">
                        Image
                      </Label>
                      <Input id="image" type="file" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Create</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Featured Exhibits</CardTitle>
              <CardDescription>Discover our most popular and captivating exhibits.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg w-12 h-12 bg-[#9b59b6] text-3xl flex items-center justify-center text-white">
                    <PaintbrushIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1 items-start">
                    <div className="font-bold">Impressionist Masterpieces</div>
                    <div>
                      <p>
                        Explore our collection of stunning Impressionist paintings, including works by Monet, Renoir,
                        and Cézanne.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Button size="sm" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg w-12 h-12 bg-[#2980b9] text-3xl flex items-center justify-center text-white">
                    <ScissorsIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1 items-start">
                    <div className="font-bold">Ancient Sculptures</div>
                    <div>
                      <p>
                        Discover our remarkable collection of ancient sculptures, including Greek and Roman
                        masterpieces.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Button size="sm" variant="outline">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg w-12 h-12 bg-[#f1c40f] text-3xl flex items-center justify-center text-[#1a1a1a]">
                    <AnvilIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1 items-start">
                    <div className="font-bold">Archeological Artifacts</div>
                    <div>
                      <p>
                        Explore our extensive collection of archeological artifacts, including rare and ancient relics.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Button size="sm" variant="outline">
                        Discover
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function AnvilIcon(props:any) {
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
      <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
      <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
      <path d="M9 12v5" />
      <path d="M15 12v5" />
      <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
    </svg>
  )
}


function LibraryIcon(props:any) {
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
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  )
}


function PaintbrushIcon(props:any) {
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
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  )
}


function ScissorsIcon(props:any) {
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
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  )
}