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
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Link from "next/link"
import { set } from "date-fns";
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mainmenu,setMainment] = useState(false);
  const [loading1,setLoading1] = useState(false);
  const [openTicket,setOpenTicket] =useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [tickets, setTickets] = useState("");
  const [openConfirmation,setOpenConfirmation] = useState(false);
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
          { name: "NXT-AI", type: "bot", message: result.response.text() },
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
//start chat with ai 
const StartChat = ()=>{
    setLoading1(true);
    setMainment(false);
    setOpenTicket(false);
    setTimeout(()=>{
        setLoading1(false);
        //@ts-ignore
        setChat([...chat,   {
            name: "radsb",
            type: "bot",
            message:
              "Hello! I'm a ChatBot created by Radsab. How can I help you today?",
          },])
    },1000)
   

}
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
    // setUserMessage("");
    console.log(usermessage);
    toast.success(usermessage);
  };

//   const chatEndRef = useRef(null);
//   useEffect(() => {
//     scrollToBottom();
//   }, [chat]);

//   const scrollToBottom = () => {
//     if (chatEndRef.current) {
//       chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
// ;
const BookTicket=()=>{
setMainment(false);
setLoading1(true);
setTimeout(()=>{
    setOpenTicket(true);
    setLoading1(false);
},1000)

}
//ticket book logic here
const handleTicketBook=(e:any)=>{
  e.preventDefault();
  const formData = { name, email, date, tickets };
  console.log("Form Data Submitted: ", formData);
  if(name==""||email==""||date==null||tickets==""){
 toast.error("Please enter all the details correctly .")
 return;
  }
 setLoading(true);
 setOpenTicket(false);
 setTimeout(()=>{
setOpenConfirmation(true);
setLoading(false);
 },500)
}

const PaymentDo = async(e:any)=>{
  setLoading(true);
  let amount = 99;
  const data = { amount,email,name};
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/precheckout`,
    {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const r = await response.json();
  setLoading(false);
  if(r.success){
  var options =  {
    key: `${process.env.NEXT_PUBLIC_KEY_ID}`,
     // Enter the Key ID generated from the Dashboard
    amount: r.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: `RadSab TicketBooking For Museum`, //your business name
    description: `RadSab ticket booking for museum book your ticket now ."`,
    image: "/logo.png",
    order_id: r.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: `${process.env.NEXT_PUBLIC_HOST}/api/postcheckout`,
    prefill: {
      //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
      name: name, //your customer's name
      email: email,
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#FD0872",
    },
  };
  //@ts-ignore
  var rzp1 = new window.Razorpay(options);
  await rzp1.open();
  e.preventDefault();
}
else{
    toast.error('Error in Payment');
}
}

  return (
    <div>
        <Toaster position="top-center"/>
      {/* Button to open/close chatbot */}
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

      {/* Chatbot window with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }} // Start position
            animate={{ opacity: 1, y: 0 }} // End position
            exit={{ opacity: 0, y: 800 }} // Exit position
            transition={{ duration: 0.5}} // Animation duration
            style={{ boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)" }}
            className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-full sm:w-[440px] lg:max-h-[83vh]  md:max-h-[83vh] max-h-[80vh] overflow-hidden"
          >
            {/* Heading */}
            <div className="flex flex-col space-y-1.5 pb-6">
              <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
              <p className="text-sm text-[#6b7280] leading-3">Powered by Radsab Bot</p>
            </div>

            {/* Chat Container */}
            <div className="overflow-y-auto pr-4 lg:h-[474px] md:h-[474px] h-[380px]"  >
         {   mainmenu&& <Card className="">
      <CardHeader className="flex flex-col items-center gap-4 bg-muted/50 px-6 py-8">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder-user.jpg" alt="Museum Avatar" />
          <AvatarFallback>MAI</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome to the Museum</h2>
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
            <CompassIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium">Explore the Museum</p>
            <p className="text-sm text-muted-foreground">Discover our exhibits and collections.</p>
          </div>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-4 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
          prefetch={false}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <CalendarIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium">View Exhibitions</p>
            <p className="text-sm text-muted-foreground">Check out our current and upcoming exhibitions.</p>
          </div>
        </Link>
        <Link
        onClick={BookTicket}
          href="#"
          className="flex items-center gap-4 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
          prefetch={false}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <TicketIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium">Book Tickets</p>
            <p className="text-sm text-muted-foreground">Purchase tickets for your visit.</p>
          </div>
        </Link>
        <Link
          onClick={StartChat}
          href={"#"}
          className="flex items-center gap-4 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
          prefetch={false}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <InfoIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-medium">Get Information</p>
            <p className="text-sm text-muted-foreground">Find answers to your questions.</p>
          </div>
        </Link>
      </CardContent>
    </Card>}

    {loading1&&<>
                    <div className="w-full max-w-md mx-auto animate-pulse p-9">
    <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
</div>
                  </>}
                  {
                 openTicket&& ( <div className="max-w-md mx-auto p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col items-center gap-4 mb-8">
                    <h1 className="text-3xl font-bold">Book Your Museum Visit</h1>
                    <p className="text-muted-foreground">Reserve your tickets for an unforgettable experience.</p>
                  </div>
                  <form className="space-y-4" onSubmit={handleTicketBook}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" value={name} onChange={handleNameChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date of Visit</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                              {/* @ts-ignore */}
                              <span>{date ? date.toLocaleDateString()  : "Select a date"}</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0">
                          {/* @ts-ignore */}
                            <Calendar mode="single" selectedy={date} onSelect={handleDateChange} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tickets">Number of Tickets</Label>
                        <Select value={tickets} onValueChange={handleTicketsChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select number" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Book Tickets
                    </Button>
                  </form>
                  <div className="mt-8 text-center">
                    <p className="text-muted-foreground">Or, chat with our virtual assistant to book your tickets:</p>
                    <Button variant="outline" className="mt-2 flex items-center gap-2 text-muted-foreground hover:text-primary" onClick={StartChat}>
                      <MessageCircleDashedIcon className="h-5 w-5" />
                      <span>Chat with us</span>
                    </Button>
                  </div>
                </div>)
             }
             {/* booking confirmation page */}
             {openConfirmation&&<div className="max-w-md mx-auto p-6 sm:p-8 md:p-10">
              <div className="flex flex-col items-center gap-4 mb-8">
                <h1 className="text-3xl font-bold">Confirm Your Booking</h1>
                <p className="text-muted-foreground">Review your booking details and complete your payment.</p>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <div className="font-medium">{name&&name}</div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="font-medium">{email&&email}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date of Visit</Label>
                     {/* @ts-ignore */}
                    <div className="font-medium">{date&&date.toLocaleDateString()}</div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tickets">Number of Tickets</Label>
                    <div className="font-medium">{tickets&&tickets}</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-muted-foreground">Total</div>
                  <div className="font-medium text-2xl">₹99.00</div>
                </div>
                <Button onClick={PaymentDo} className="w-full" disabled={loading}>
                  Complete Payment
                </Button>
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">Or, chat with our virtual assistant to complete your booking:</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Button variant="outline" className="flex items-center gap-2 text-muted-foreground hover:text-primary" onClick={StartChat}>
                    <MessageCircleDashedIcon className="h-5 w-5" />
                    <span>Chat with us</span>
                  </Button>
                </div>
              </div>
            </div>
             }
       { chat.map((item,index)=>(    <div  key={index}>
              {/* Chat Message AI */}
             {/* @ts-ignore */}
             { item.type=="bot" &&(<div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
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
             { item.type=="user"&&(<div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
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
{loading&&<>
                    <div className="w-full max-w-md mx-auto animate-pulse p-9">
    <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
</div>
                  </>}
   
</div>
            {/* Input Field for User Message */}
            <div className="flex relative bottom-2 w-full">
          
  <div className="w-full">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <GiArtificialIntelligence className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
    </div>
    <input
      type="text"
      id="voice-search"
      onChange={handleChange}
      value={usermessage}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Enter Your Query ? "
      onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
    />

  </div>
  <button
    onClick={handleSubmit}
    className="flex py-2.5 px-3 ms-2 text-sm font-medium text-white  border focus:ring-4 focus:outline-none focus:ring-blue-300 absolute right-0 justify-center items-center bg-white"
  >
     <TbSend className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"/>
    
    
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