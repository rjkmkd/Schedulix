import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight, CalendarCheck, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TestimonialCarousel from "@/components/Testimonels";


const features = [
  {
    icon: CalendarCheck,
    title: "Automated Scheduling",
    description:
      "Easily find the best time for meetings without back-and-forth emails. Let participants pick slots based on your availability and preferences.",
  },
  {
    icon: Clock,
    title: "Time Zone Detection",
    description:
      "No need to worry about different time zones. Our app automatically detects and adjusts meeting times according to participants' locations.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Invite team members and external participants effortlessly. Manage group meetings, send invites, and track attendance in one place.",
  },
];

const howItWorks = [
  {
    step: "SignUp or LogIn",
    description:
      "Create an account or log in using your email or social media. This helps you manage your meetings and sync your calendar effortlessly.",
  },
  {
    step: "Set Your Availability",
    description:
      "Define your available time slots for meetings. You can set preferences like meeting duration, buffer times, and blackout dates to streamline scheduling.",
  },
  {
    step: "Share Your Link",
    description:
      "Generate a unique scheduling link and share it with participants. They can pick a suitable time based on your availability without any hassle.",
  },
  {
    step: "Get Notified",
    description:
      "Receive instant notifications when someone books a meeting. The event is automatically added to your calendar with details and reminders.",
  },
];



export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className=" text-5xl md:text-7xl font-extrabold pb-6 gradient-title">
            Simplify Your Scheduling
          </h1>
          <p className="text-xl text-gray-500 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            aspernatur laborum! Cum itaque, at necessitatibus architecto
            adipisci explicabo exercitationem quos.
          </p>
          <Link href="/dashboard">
            <Button size={"lg"} className="text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          {/* poster */}
          <div className="relative w-full max-w-md aspect-square ">
            <Image
              src="/videocall.svg"
              alt="Banner"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                  <CardTitle className="text-center text-lg text-blue-600">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-500">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          What Our users say
        </h2>
        <TestimonialCarousel />
      </div>
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map(({ step, description }, index) => {
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-xl text-blue-600 font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-xl mb-2">{step}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-lg p-8 text-center shadow">
        <h2 className="text-3xl font-bold mb-4">
          Ready To Simplify Your Scheduling?
        </h2>
        <p className="text-xl mb-6">
          Join thousands of professionals who trust{" "}
          <span className="text-2xl font-extrabold">Schedulix</span> for
          efficient time management{" "}
        </p>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Start for free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
