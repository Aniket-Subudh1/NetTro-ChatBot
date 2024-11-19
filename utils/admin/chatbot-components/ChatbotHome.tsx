
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card,CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter ,DialogTrigger} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import  {LayoutTemplate} from "lucide-react"
import { useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
export default function ChatbotHome() {
    const router = useRouter();
  const [showModal, setShowModal] = useState(false)
  const [fileType, setFileType] = useState(null)
  const [selectedTemplate, setSelectedTemplate] = useState<String>("")
  const [selectedTheme, setSelectedTheme] = useState<String>("")
  const [loader ,setLoader] = useState(false)
  const handleTemplateSelect = (template:string) => {
  
    setSelectedTemplate(template)
  }
  const handleThemeSelect = (template:string) => {
  
   setSelectedTheme(template)
  }
  //open modal
  const [openEditModal, setOpenEditModal] = useState(false)
  const handleSubmit = () => {
    setLoader(true)
    setTimeout(()=>{
    setLoader(false);
    setOpenEditModal(true)
    },2000)
    

  }
  const handleSubmitConfirmation = () => {
    
    setLoader(true)
    setTimeout(()=>{
        setLoader(false);
        setOpenEditModal(false)
        setShowModal(false)
        router.push("/admin/chatbot/success")
        },3000)
  }


  //more code

  const [activeTab, setActiveTab] = useState("view")
  
  const questions = [
    {
      id: "name",
      question: "What is your name?",
      defaultValue: "John Doe",
      type: "text"
    },
    {
      id: "email",
      question: "What is your email address?",
      defaultValue: "john@example.com",
      type: "email"
    },
    {
      id: "phone",
      question: "What is your phone number?",
      defaultValue: "+1 (555) 555-5555",
      type: "text"
    },
    {
      id: "date",
      question: "What date would you like to visit?",
      defaultValue: "2024-09-01",
      type: "date"
    },
    {
      id: "tickets",
      question: "How many tickets would you like to book?",
      defaultValue: "1",
      type: "number"
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="grid gap-12">
    
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Chatbots</h2>
            <Button variant="outline" onClick={() => setShowModal(true)}>
              <PlusIcon className="w-4 h-4 mr-2" />
              Create New
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-muted rounded-lg hover:bg-muted-foreground/5 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Network Troubleshooter Support</h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <FilePenIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-full p-2 text-primary-foreground">
                  <HeadphonesIcon className="w-5 h-5" />
                </div>
                <p className="text-muted-foreground">Automated customer support chatbot to handle common inquiries.</p>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Created 2 days ago</span>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-muted rounded-lg hover:bg-muted-foreground/5 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Security Issue</h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <FilePenIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary rounded-full p-2 text-secondary-foreground">
                  <ShoppingCartIcon className="w-5 h-5" />
                </div>
                <p className="text-muted-foreground">Chatbot to assist with product inquiries and sales.</p>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Created 5 days ago</span>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-muted rounded-lg hover:bg-muted-foreground/5 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Website DOM Bot</h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <FilePenIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-muted-foreground rounded-full p-2 text-muted">
                  <UsersIcon className="w-5 h-5" />
                </div>
                <p className="text-muted-foreground">Chatbot to handle HR-related inquiries and tasks.</p>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Created 10 days ago</span>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-muted rounded-lg hover:bg-muted-foreground/5 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Chatbot</h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <FilePenIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-full p-2 text-primary-foreground">
                  <LibraryIcon className="w-5 h-5" />
                </div>
                <p className="text-muted-foreground">Chatbot to assist visitors with museum information and tours.</p>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Created 3 days ago</span>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-muted rounded-lg hover:bg-muted-foreground/5 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold"> Chatbot</h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <FilePenIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-secondary rounded-full p-2 text-secondary-foreground">
                  <CameraIcon className="w-5 h-5" />
                </div>
                <p className="text-muted-foreground">
                  Chatbot to assist with movie information, showtimes, and ticketing.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Created 7 days ago</span>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-muted rounded-lg hover:bg-muted-foreground/5 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Restaurant Chatbot</h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <FilePenIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-muted-foreground rounded-full p-2 text-muted">
                  <MenuIcon className="w-5 h-5" />
                </div>
                <p className="text-muted-foreground">
                  Chatbot to assist with restaurant reservations, menus, and customer service.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Created 14 days ago</span>
                </div>
              </div>
            </Card>
          </div>
        </section>
        <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Create New Chatbot</DialogTitle>
          <DialogDescription>Fill out the details to create a new chatbot.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-1 w-full">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter chatbot name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter chatbot description" />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="file">Training Data</Label>
            <div className="flex items-center gap-2">
            <div className="w-full">
              <Label htmlFor="name"></Label>
              <Input id="name" placeholder="Enter chatbot name" type="file" />
            </div>
             </div>
            <p className="text-xs text-muted-foreground">
              {fileType ? `File type: ${fileType}` : "Only .txt and .pdf files are allowed."}
            </p>
          </div>
        
        </div>
       
        <div className="grid gap-4 py-4">
          <h3 className="text-lg font-medium">Chatbot Themes</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center gap-2">
                <div
                  className={`border cursor-pointer rounded-md p-2 flex flex-col items-center gap-2 ${
                    selectedTemplate === "Network Trouble Shooter" ? "bg-muted" : "hover:bg-muted/30 transition-colors"
                  }`}
                  onClick={() => handleTemplateSelect("Network Trouble Shooter")}
                >
                  <BotIcon className="w-10 h-10" />
                  <div className="font-medium">Network Trouble Shooter Chatbot</div>
                  <div className="text-sm text-muted-foreground">$9.99/month</div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleTemplateSelect("Network Trouble Shooter")}>
                  Use Theme
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-2">
                <div
                  className={`border cursor-pointer rounded-md p-2 flex flex-col items-center gap-2 ${
                    selectedTemplate === "Security Issue" ? "bg-muted" : "hover:bg-muted/30 transition-colors"
                  }`}
                  onClick={() => handleTemplateSelect("Security Issue")}
                >
                  <BotIcon className="w-10 h-10" />
                  <div className="font-medium">Security Issue Chatbot</div>
                  <div className="text-sm text-muted-foreground">$12.99/month</div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleTemplateSelect("Security Issue")}>
                Use Theme
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-2">
                <div
                  className={`border cursor-pointer rounded-md p-2 flex flex-col items-center gap-2 ${
                    selectedTemplate === "Security Threat" ? "bg-muted" : "hover:bg-muted/30 transition-colors"
                  }`}
                  onClick={() => handleTemplateSelect("Security Threat")}
                >
                  <BotIcon className="w-10 h-10" />
                  <div className="font-medium">Security Threat Chatbot</div>
                  <div className="text-sm text-muted-foreground">$14.99/month</div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleTemplateSelect("Security Threat")}>
                Use Theme
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-2">
                <div
                  className={`border cursor-pointer rounded-md p-2 flex flex-col items-center gap-2 ${
                    selectedTemplate === "custom" ? "bg-muted" : "hover:bg-muted/30 transition-colors"
                  }`}
                  onClick={() => handleTemplateSelect("custom")}
                >
                  <BotIcon className="w-10 h-10" />
                  <div className="font-medium">Custom Chatbot</div>
                  <div className="text-sm text-muted-foreground">$19.99/month</div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleTemplateSelect("custom")}>
                Use Theme
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <h3 className="text-lg font-medium">Chatbot Template</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center gap-2">
                <div
                  className={`border cursor-pointer rounded-md p-2 flex flex-col items-center gap-2 ${
                    selectedTheme === "Chatbot for F&Q" ? "bg-muted" : "hover:bg-muted/30 transition-colors"
                  }`}
                  onClick={() => handleThemeSelect("Chatbot for F&Q")}
                >
                  <LayoutTemplate className="w-10 h-10" />
                  <div className="font-medium">{selectedTemplate} Chatbot for F&Q</div>
                  <div className="text-sm text-muted-foreground">Simple & Customizable</div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleThemeSelect("Chatbot for F&Q")}>
                  Use Template
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-2">
                <div
                  className={`border cursor-pointer rounded-md p-2 flex flex-col items-center gap-2 ${
                    selectedTheme === "Chatbot for F&Q & support" ? "bg-muted" : "hover:bg-muted/30 transition-colors"
                  }`}
                  onClick={() => handleThemeSelect("Chatbot for F&Q & support")}
                >
                 <LayoutTemplate className="w-10 h-10" />
                  <div className="font-medium">{selectedTemplate} Chatbot for F&Q & support</div>
                  <div className="text-sm text-muted-foreground">Medium & Customizable</div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleThemeSelect("Chatbot for F&Q & support")}>
                  Use Template
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-2">
                <div
                  className={`border cursor-pointer rounded-md p-2 flex flex-col items-center gap-2 ${
                    selectedTheme === "Chatbot for F&Q and ticket booking" ? "bg-muted" : "hover:bg-muted/30 transition-colors"
                  }`}
                  onClick={() => handleThemeSelect("Chatbot for F&Q and ticket booking")}
                >
                  <LayoutTemplate className="w-10 h-10" />
                  <div className="font-medium">{selectedTemplate} Chatbot for F&Q and Problem Solving</div>
                  <div className="text-sm text-muted-foreground">Advanced & Customizable</div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleThemeSelect("Chatbot for F&Q and ticket booking")}>
                  Use Template
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-2">
                <div
                  className={`border cursor-pointer rounded-md p-2 flex flex-col items-center gap-2 ${
                    selectedTheme === "Chatbot for F&Q , ticket booking and support" ? "bg-muted" : "hover:bg-muted/30 transition-colors"
                  }`}
                  onClick={() => handleThemeSelect("Chatbot for F&Q , ticket booking and support")}
                >
                 <LayoutTemplate className="w-10 h-10" />
                 <div className="font-medium">{selectedTemplate} Chatbot for F&Q , Problem Solving and support</div>
                  <div className="text-sm text-muted-foreground">Advanced & Customizable</div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleThemeSelect("Chatbot for F&Q , ticket booking and support")}>
                  Use Template
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
          <div className="space-y-1">
            <Label htmlFor="theme">Select a Payment Provider</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a Payment Provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="RazorPay">RazorPay</SelectItem>
                <SelectItem value="CashFree">CashFree</SelectItem>
                <SelectItem value="Payu">Payu</SelectItem>
                <SelectItem value="Strapi">Strapi</SelectItem>
                <SelectItem value="Payzapp">Payzapp</SelectItem>
                <SelectItem value="Paytm">Paytm</SelectItem>
                <SelectItem value="Phonepe">Phonepe</SelectItem>
                <SelectItem value="BharatPe">BharatPe</SelectItem>
                <SelectItem value="BharatPe">Instamojo</SelectItem>

              </SelectContent>
            </Select>
          </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Create Chatbot</Button>
        </DialogFooter>
      </DialogContent>
    
        </Dialog>
        <Dialog open={openEditModal} >
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Network Trouble Shooter</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex">
                <TabsTrigger value="view">View</TabsTrigger>
                <TabsTrigger value="edit">Edit</TabsTrigger>
              </TabsList>
              <TabsContent value="view">
                <div className="space-y-4">
                  {questions.map((q) => (
                    <div key={q.id}>
                      <h3 className="text-lg font-medium">{q.question}</h3>
                      <Input className="mt-1" defaultValue={q.defaultValue} disabled />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="edit">
                <div className="space-y-4">
                  {questions.map((q) => (
                    <div key={q.id}>
                      <h3 className="text-lg font-medium">{q.question}</h3>
                      <div className="mt-1 grid grid-cols-[1fr_auto] items-center gap-2">
                        <Input defaultValue={q.defaultValue} type={q.type} />
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder={q.type.charAt(0).toUpperCase() + q.type.slice(1)} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="text">Text</SelectItem>
                            <SelectItem value="number">Number</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="date">Date</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="space-y-4 sm:border-l sm:pl-6">
            <div>
              <h3 className="text-lg font-medium">Preview</h3>
              <div className="mt-4 rounded-md border p-4">
                <div className="space-y-4">
                  {questions.map((q) => (
                    <div key={q.id}>
                      <h4 className="text-base font-medium">{q.question}</h4>
                      <Input className="mt-1" defaultValue={q.defaultValue} disabled />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <div>
            <Button onClick={handleSubmitConfirmation}>Submit & Deploy </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <Dialog open={loader}>
     
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Loading ......</DialogTitle>
          <DialogDescription>
            Please wait while we create your chatbot.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="w-full max-w-md mx-auto animate-pulse p-9">
    <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
</div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
    </div>
  )
}

function CalendarIcon(props:any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CameraIcon(props:any) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function FilePenIcon(props:any) {
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


function HeadphonesIcon(props:any) {
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
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


function MenuIcon(props:any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlusIcon(props:any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function ShoppingCartIcon(props:any) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function TrashIcon(props:any) {
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
    </svg>
  )
}


function UsersIcon(props:any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function BotIcon(props:any) {
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
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    )
  }
  