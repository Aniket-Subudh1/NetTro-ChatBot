import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function CreateContent() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 px-4 lg:px-6 py-8 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">NetTro Chatbot Dashboard</h1>
            <div className="flex items-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Create Chat Content</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create New Chatbot Content</DialogTitle>
                    <DialogDescription>
                      Fill out this form to add new content or responses for the NetTro Chatbot.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="intent" className="text-right">
                        Intent
                      </Label>
                      <Input
                        id="intent"
                        placeholder="Enter the chatbot intent (e.g., 'Network Issue')"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid items-start grid-cols-4 gap-4">
                      <Label htmlFor="response" className="text-right">
                        Response
                      </Label>
                      <Textarea
                        id="response"
                        placeholder="Enter the chatbot response"
                        className="col-span-3 h-32"
                      />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                      <Label htmlFor="tags" className="text-right">
                        Tags
                      </Label>
                      <Input
                        id="tags"
                        placeholder="Enter tags for the intent (comma-separated)"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save Content</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {/* Content Display */}
          <Card>
            <CardHeader>
              <CardTitle>Chatbot Features</CardTitle>
              <CardDescription>
                Explore the key functionalities and content of the NetTro Chatbot.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {/* Feature: Network Analysis */}
                <div className="flex items-start gap-4">
                  <div className="rounded-lg w-12 h-12 bg-[#9b59b6] text-3xl flex items-center justify-center text-white">
                    <NetworkIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1 items-start">
                    <div className="font-bold">Network Analysis</div>
                    <div>
                      <p>
                        The chatbot can analyze your network status, including ping, download, and upload speeds.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Button size="sm" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Feature: Security Support */}
                <div className="flex items-start gap-4">
                  <div className="rounded-lg w-12 h-12 bg-[#2980b9] text-3xl flex items-center justify-center text-white">
                    <ShieldIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1 items-start">
                    <div className="font-bold">Security Assistance</div>
                    <div>
                      <p>
                        Get guidance and suggestions for resolving common security issues in your network.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Button size="sm" variant="outline">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Feature: User Feedback */}
                <div className="flex items-start gap-4">
                  <div className="rounded-lg w-12 h-12 bg-[#f1c40f] text-3xl flex items-center justify-center text-[#1a1a1a]">
                    <FeedbackIcon className="h-6 w-6" />
                  </div>
                  <div className="grid gap-1 items-start">
                    <div className="font-bold">User Feedback</div>
                    <div>
                      <p>
                        Provide feedback directly to improve the chatbot and report any issues you encounter.
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
  );
}

/* Icons for Features */
function NetworkIcon(props: any) {
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
      <path d="M8 20h8" />
      <path d="M12 4v16" />
      <path d="M6 12h12" />
    </svg>
  );
}

function ShieldIcon(props: any) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function FeedbackIcon(props: any) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
    </svg>
  );
}
