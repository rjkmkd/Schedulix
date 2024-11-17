"use client"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Manager",
    content:
      "This scheduling app has completely transformed the way I set up meetings. It saves me hours every week and helps avoid scheduling conflicts!",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Maya Patel",
    role: "Freelancer",
    content:
      "I love the simplicity and ease of use. It’s perfect for coordinating with clients across different time zones. Highly recommend!",
    image: "https://i.pravatar.cc/150?img=26 ",
  },
  {
    name: "Samuel Lee",
    role: "Team Lead",
    content:
      "Our team’s productivity has significantly increased since we started using this scheduling app. The automated reminders are a game changer!",
    image: "https://i.pravatar.cc/150?img=38",
  },
  {
    name: "Emily Clark",
    role: "HR Specialist",
    content:
      "Managing interviews has never been this easy. The app’s integration with our calendar makes scheduling seamless and stress-free.",
    image: "https://i.pravatar.cc/150?img=25",
  },
  {
    name: "Daniel Martinez",
    role: "Sales Executive",
    content:
      "This app helps me connect with clients efficiently. It’s user-friendly and integrates well with my existing tools. A must-have for anyone in sales!",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Sophia Green",
    role: "Consultant",
    content:
      "A fantastic tool for scheduling meetings without any back-and-forth emails. It has streamlined my workflow and made my client interactions smoother.",
    image: "https://i.pravatar.cc/150?img=67",
  },
];


const TestimonialCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full mx-auto"
    >
      <CarouselContent >
        {testimonials.map(({ name, role, content, image}, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col h-full
               justify-center p-6">
                <p className="text-gray-600 mb-4">&quot;{content}&quot;</p>
                <div className='flex items-center mt-4'>
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={image}
                      alt="usersImage"
                    />
                    <AvatarFallback>{name.split(" ").map((n)=>n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-semibold'>{name}</p>
                    <p className='text-sm text-gray-500'>{role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonialCarousel;
