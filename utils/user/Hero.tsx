"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { FaSignal } from "react-icons/fa"; 
import Link from "next/link";

function cn(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  const [ping, setPing] = useState<number | null>(null);
  const [uploadSpeed, setUploadSpeed] = useState<string>("-");
  const [downloadSpeed, setDownloadSpeed] = useState<string>("-");
  const [networkStatus, setNetworkStatus] = useState<string>("Checking...");

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
      setIsDialogOpen(true);
      setTimeout(() => {
        setIsDialogOpen(false);
      }, 10000); 
    };

    showDialog(); 
    const interval = setInterval(showDialog, 5*60000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-gray-50">
        <header className="bg-gradient-to-r from-[#283048] to-[#859398] bg-opacity-90 sticky top-0 backdrop-blur-lg">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
         
              <div className="flex-shrink-0">
                <a href="#" title="NetTro Logo" className="flex">
                  <img
                    className="w-32 h-auto max-h-16 object-contain"
                    src="/logo.png"
                    alt="NetTro Logo"
                  />
                </a>
              </div>

           
              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  href="#features"
                  title="Features"
                  className="text-base text-white transition-all duration-200 hover:text-gray-300 font-semibold"
                >
                  Features
                </a>
                <a
                  href="#about"
                  title="About"
                  className="text-base text-white transition-all duration-200 hover:text-gray-300 font-semibold"
                >
                  About
                </a>
                <a
                  href="#solutions"
                  title="Solutions"
                  className="text-base text-white transition-all duration-200 hover:text-gray-300 font-semibold"
                >
                  Solutions
                </a>
                <a
                  href="#contact"
                  title="Contact Us"
                  className="text-base text-white transition-all duration-200 hover:text-gray-300 font-semibold"
                >
                  Contact Us
                </a>
              </div>

           
              <Link
               href="/admin"
               title="Get Started"
               className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-[#1F2739] focus:bg-[#1F2739] font-semibold text-white bg-gray-800 rounded-full"
               role="button"
               >
               Admin Perspective
              </Link>
            </div>
          </div>
        </header>

     
        <section className="bg-gradient-to-r from-[#f4f9f9] to-[#ddeefa] py-10 sm:py-16 lg:py-12">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
             
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <p className="text-base font-semibold tracking-wider text-gray-600 uppercase">
                  AI-Driven Chatbot for Network Solutions
                </p>
                <h1 className="mt-4 text-4xl font-bold text-gray-800 lg:mt-8 sm:text-6xl xl:text-7xl">
                  Revolutionize Your Network Operations
                </h1>
                <p className="mt-4 text-base text-gray-600 lg:mt-8 sm:text-xl">
                  Automate network troubleshooting, enhance security assessments, and optimize
                  incident responses with NetTro Chatbot.
                </p>
                <a
                  href="#get-started"
                  title="Get Started"
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#283048] rounded-full lg:mt-16 hover:bg-[#1f2739] focus:bg-[#1f2739]"
                  role="button"
                >
                  Get Started
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </motion.div>

           
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <img
                  className="w-full rounded-lg shadow-lg"
                  src="/hero.jpeg"
                  alt="NetTro Chatbot"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>

 
      <DialogPrimitive.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black bg-opacity-30 z-50" />
        <DialogPrimitive.Content
          className="fixed inset-0 flex items-center justify-center z-50"
          aria-label="Network Status"
        >
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
            <div className="flex items-center space-x-4">
             
              <FaSignal
                className={cn(
                  "w-12 h-12",
                  networkStatus === "Excellent" && "text-green-500",
                  networkStatus === "Good" && "text-yellow-500",
                  networkStatus === "Poor" && "text-red-500",
                  networkStatus === "Error" && "text-gray-500"
                )}
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Network Status
                </h2>
                <div className="flex flex-col space-y-1 mt-2">
                  <div className="flex justify-between">
                    <span>Ping:</span>
                    <span className="font-medium">
                      {ping !== null ? `${ping} ms` : "Loading..."}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Upload Speed:</span>
                    <span className="font-medium">{uploadSpeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Download Speed:</span>
                    <span className="font-medium">{downloadSpeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span
                      className={cn(
                        "font-medium",
                        networkStatus === "Excellent" && "text-green-500",
                        networkStatus === "Good" && "text-yellow-500",
                        networkStatus === "Poor" && "text-red-500",
                        networkStatus === "Error" && "text-gray-500"
                      )}
                    >
                      {networkStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Root>
    </div>
  );
};

export default Hero;
