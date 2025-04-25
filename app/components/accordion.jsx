import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function AccordionLandingPage() {
  return (
    <div className="p-4 mt-10 mb-10 bg-white rounded-lg shadow-md">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Habitat Finder?</AccordionTrigger>
          <AccordionContent>Habitat Finder is an online platform that helps people find rental places such as apartments, condos, or houses in various cities.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I find a rental place?</AccordionTrigger>
          <AccordionContent>
            Simply use the search bar on our homepage to filter listings by location, budget, or amenities. Browse the results and contact the owner or agent directly..
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do I need to create an account?</AccordionTrigger>
          <AccordionContent>Currently, you can browse listings without an account. However, creating one allows you to save your favorites, set alerts, and contact property owners.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is it free to use Habitat Finder?</AccordionTrigger>
          <AccordionContent>Yes, browsing and searching for rental listings is completely free for users</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>How often are listings updated?</AccordionTrigger>
          <AccordionContent>Listings are updated regularly by property owners or agents. We encourage them to keep information accurate and up-to-date.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>How do I report a suspicious listing?</AccordionTrigger>
          <AccordionContent>You can click the "Report Listing" button on the property page or email us directly with the details.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Can I list my own property?</AccordionTrigger>
          <AccordionContent>Yes! If you're a landlord or agent, you can register and submit your property for listing on Habitat Finder..</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>Does Habitat Finder handle payments?</AccordionTrigger>
          <AccordionContent>No. We are only a listing platform. Any rental agreements and payments are made directly between the renter and the property owner/agent.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionLandingPage;
