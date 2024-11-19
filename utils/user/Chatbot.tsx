"use client";
/* eslint-disable @next/next/no-sync-scripts */
import React, { useState ,useEffect,useRef} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbSend } from "react-icons/tb";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Toaster, toast } from "sonner";
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { FaSignal } from "react-icons/fa";
import { set } from "date-fns";
const Chatbot = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const [mainmenu,setMainment] = useState(false);
  const [loading1,setLoading1] = useState(false);
  const [openTicket,setOpenTicket] =useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  
  const [ping, setPing] = useState<number | null>(null);
  const [uploadSpeed, setUploadSpeed] = useState<string>("-");
  const [downloadSpeed, setDownloadSpeed] = useState<string>("-");
  const [networkStatus, setNetworkStatus] = useState<string>("Checking...");

  //@ts-ignore
  const handleNameChange = (e) => setName(e.target.value);
  //@ts-ignore
  const handleEmailChange = (e) => setEmail(e.target.value);
  //@ts-ignore
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };
  //@ts-ignore
  const handleTicketsChange = (value) => setTickets(value);


  const toggleChatbot = () => {
    if(chat.length==0){
        setLoading1(true);
    }
    
    setTimeout(()=>{
        if(chat.length==0){
            setMainment(true);
        }
        setLoading1(false);
    },1000)
    setIsOpen(!isOpen);
  };
  const [usermessage, setUserMessage] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([
  
  ]);
  const apiKey:string = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  async function run() {
    try {
      setLoading(true);
      const chatSession = model.startChat({
        generationConfig,
        history: history,
      });
      const result = await chatSession.sendMessage(usermessage);
      setUserMessage("");
      setLoading(false);


      if (result.response.text().length > 0) {
        //@ts-ignore

        const updatedChat = [
          ...chat,
          { name: "You", type: "user", message: usermessage },
          { name: "NetTro-AI", type: "bot", message: result.response.text() },
        ];
//@ts-ignore
        setChat(updatedChat);
      } else {
        toast.error("I'm sorry, I didn't understand that. Please try again!");
      }
    } catch (err) {
      toast.error("Too many requests, please try again later!" + err);
      console.log(err);
    }
  }
  type InputEvent = React.ChangeEvent<HTMLInputElement>

  const handleChange = (e:InputEvent) => {
    setUserMessage(e.target.value);
  };

const StartChat = ()=>{
    setLoading1(true);
    setMainment(false);
    setOpenTicket(false);
    setTimeout(()=>{
        setLoading1(false);
        //@ts-ignore
        setChat([...chat,   {
            name: "NetTro",
            type: "bot",
            message:
              "Hello! I'm a ChatBot created by NetTro. How can I help you today?",
          },])
    },1000)
   

}




const calculateNetworkMetrics = async () => {
  try {
    const measuredPing = await measurePing();
    setPing(measuredPing);

    const downloadSpeedMbps = await measureDownloadSpeed();
    setDownloadSpeed(`${downloadSpeedMbps} Mbps`);

    const simulatedUploadSpeed = simulateUploadSpeed();
    setUploadSpeed(`${simulatedUploadSpeed} Mbps`);

    let measuredStatus = "Excellent";
    if (measuredPing > 100 || parseFloat(downloadSpeedMbps) < 2) {
      measuredStatus = "Poor";
    } else if (measuredPing > 50 || parseFloat(downloadSpeedMbps) < 5) {
      measuredStatus = "Good";
    }
    setNetworkStatus(measuredStatus);
  } catch (error) {
    console.error("Error measuring network metrics:", error);
    setNetworkStatus("Error");
  }
};

const measurePing = async () => {
  const startPing = performance.now();
  await fetch("/ping", { cache: "no-store" });
  const endPing = performance.now();
  return Math.round(endPing - startPing);
};

const measureDownloadSpeed = async () => {
  const downloadSizeInBytes = 1024 * 1024;
  const downloadStartTime = performance.now();
  await fetch("/1MB.test", { cache: "no-store" });
  const downloadEndTime = performance.now();
  const downloadTime = (downloadEndTime - downloadStartTime) / 1000;
  const speedMbps = (
    (downloadSizeInBytes * 8) /
    (downloadTime * 1000000)
  ).toFixed(2);
  return speedMbps;
};

const simulateUploadSpeed = () => {
  return (Math.random() * 10 + 1).toFixed(2);
};

useEffect(() => {
  const showDialog = () => {
    calculateNetworkMetrics();
   
  };

  showDialog();
  const interval = setInterval(showDialog, 5 * 60000); 

  return () => clearInterval(interval);
}, []);



  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (usermessage.trim() === "") return;
    if(usermessage.toLowerCase()=="menu"){
        setMainment(true);
        //@ts-ignore
        setChat([{}]);
        setUserMessage("");
        return;
    }
    //@ts-ignore
    setHistory([...history, { role: "user", parts: [{ text: `${usermessage}\n` }] }]);
    //@ts-ignore
    setChat([...chat, { name: "You", type: "user", message: usermessage }])
    console.log(chat)
    run();
  
    console.log(usermessage);
    toast.success(usermessage);
  };





  return (
    <div>
        <Toaster position="top-center"/>
      
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={toggleChatbot}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={40}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            className="border-gray-200"
          ></path>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
         <motion.div
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 800 }}
         transition={{ duration: 0.5 }}
         className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4  bg-white p-6 rounded-lg border border-[#e5e7eb] w-full sm:w-[440px] lg:max-h-[83vh] md:max-h-[83vh] max-h-[80vh] flex flex-col"
       >
       
            {/* Heading */}
            <div className="flex flex-col space-y-1.5 pb-6">
              <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
              <p className="text-sm text-[#6b7280] leading-3">Powered by NetTro</p>
            </div>
            <div className="p-6">
      <div className="mb-4 p-4 bg-gray-100 rounded-lg flex items-center">
        {/* Tower Icon */}
        <FaSignal
          className={cn(
            "mr-2 w-6 h-6",
            networkStatus === "Excellent" && "text-green-500",
            networkStatus === "Good" && "text-yellow-500",
            networkStatus === "Poor" && "text-red-500",
            networkStatus === "Error" && "text-gray-500"
          )}
        />
        <div>
          <h3 className="text-sm font-semibold text-gray-600">Network Status</h3>
          <p className="text-sm">
            Ping: {ping !== null ? `${ping} ms` : "Loading..."}
          </p>
          <p className="text-sm">Upload Speed: {uploadSpeed}</p>
          <p className="text-sm">Download Speed: {downloadSpeed}</p>
          <p
            className={cn(
              "text-sm font-medium",
              networkStatus === "Excellent" && "text-green-500",
              networkStatus === "Good" && "text-yellow-500",
              networkStatus === "Poor" && "text-red-500",
              networkStatus === "Error" && "text-gray-500"
            )}
          >
            Status: {networkStatus}
          </p>
        </div>
      </div>
    </div>
            

           
            <div className="overflow-y-auto pr-4 lg:h-[400px]  md:h-[474px] h-[380px]"  >
         {   mainmenu&& <Card className="">
      <CardHeader className="flex flex-col items-center gap-4 bg-muted/50 px-6 py-8">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder-user.jpg" alt="Museum Avatar" />
          <AvatarFallback>NT</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome to the NetTro</h2>
          <p className="text-muted-foreground">How can we assist you today?</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 p-6">
       
        <Link
        
          href="#"
          className="flex items-center gap-4 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
          prefetch={false}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <TicketIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium">Analyze Network and Security Issues</p>
            <p className="text-sm text-muted-foreground">Click Here to see the problems.</p>
          </div>
        </Link>
      </CardContent>
    </Card>}

   
                 
       { chat.map((item,index)=>(    <div className="mt-3" key={index}>
              {/* Chat Message AI */}
             {/* @ts-ignore */}
             { item.type=="bot" &&(<div className="flex gap-3 my-4  text-gray-600 text-sm flex-1">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    <svg
                      stroke="none"
                      fill="black"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      height={20}
                      width={20}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      ></path>
                    </svg>
                  </div>
                </span>
                <p className="leading-relaxed">
                   {/* @ts-ignore */}
                  <span className="block font-bold text-gray-700">AI </span>{item.message.replace(/\*/g, '')}
                </p>
               
              </div>)}
            

              {/* User Chat Message */}
              {/* @ts-ignore */}
             { item.type=="user"&&(<div className="flex gap-3  text-gray-600 text-sm flex-1">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    <svg
                      stroke="none"
                      fill="black"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height={20}
                      width={20}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                    </svg>
                  </div>
                </span>
                <p className="leading-relaxed">
                   {/* @ts-ignore */}
                  <span className="block font-bold text-gray-700">You </span>{item.message}
                </p>
              </div>)}
              
              
           
            </div>
          
))}

   
</div>
           
<div className="flex relative top-3 w-full">
  <div className="w-full">
    <div className="absolute inset-y-0 left-0 flex items-center  pl-3 pointer-events-none">
      <GiArtificialIntelligence className="w-4 h-4 text-gray-500 dark:text-gray-400" />
    </div>
    <input
      type="text"
      id="voice-search"
      onChange={handleChange}
      value={usermessage}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Enter Your Query..."
      onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
    />
  </div>
  <button
    onClick={handleSubmit}
    className="flex py-2.5 px-3 ml-2 text-sm font-medium  text-white border
               focus:ring-4 focus:outline-none focus:ring-blue-300
               justify-center items-center bg-white"
  >
    <TbSend className="w-5 h-5 text-gray-500  dark:text-gray-400
                      hover:text-gray-900 dark:hover:text-white" />
  </button>
</div>


          </motion.div>
        )}
      </AnimatePresence>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  );
};

export default Chatbot;
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
  
  
  function CompassIcon(props:any) {
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
        <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  }
  
  
  function InfoIcon(props:any) {
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
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    )
  }
  
  
  function TicketIcon(props:any) {
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
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </svg>
    )
  }
  function MessageCircleDashedIcon(props:any) {
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
        <path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" />
        <path d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" />
        <path d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" />
        <path d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" />
        <path d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" />
        <path d="M3.5 17.5 2 22l4.5-1.5" />
        <path d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" />
        <path d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" />
      </svg>
    )
  }
  function CalendarDaysIcon(props:any) {
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
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
    )
  }