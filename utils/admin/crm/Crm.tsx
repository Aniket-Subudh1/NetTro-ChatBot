
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Crm() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-background">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Integrate Your CRM for Seamless Chatbot Experiences
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Connect your CRM platform like HubSpot to send promotional notifications, emails, and generate
                  discount offers directly from your chatbot.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button className="w-full sm:w-auto">Integrate CRM</Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="/crm.jpg"
                  width={600}
                  height={400}
                  alt="Chatbot CRM Integration"
                  className="mx-auto"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/not.jpg"
                  width={600}
                  height={400}
                  alt="Notification Settings"
                  className="mx-auto  object-contain"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Customize Notification Settings</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Tailor your chatbot's notification preferences to suit your business needs. Choose when and how your
                  customers receive updates, promotions, and more.
                </p>
                <div className="mt-6">
                  <Button className="w-full sm:w-auto">Manage Notifications</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Generate Discount Offers with Ease</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Create and manage personalized discount offers for your customers directly from your chatbot. Boost
                  engagement and drive sales with targeted promotions.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Button className="w-full sm:w-auto">Offer Generator</Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    View Offers
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="/disc.jpg"
                  width={600}
                  height={400}
                  alt="Discount Offers"
                  className="mx-auto"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    
    </div>
  )
}