import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "./ui/button"
import Link from "next/link"

  
type Props = {}
const FAQs = (props: Props) => {
  return (
    <section id="faqs" className="my-10 max-w-4xl px-5 mx-auto">
            <section  >
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Will everything be shared to me during the process?</AccordionTrigger>
    <AccordionContent>
      Yes ofcourse. We believe in 100% transparency and hence will not only get you involved in each step and process but also document the entire journey which will be given to you along with other documents at the end.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Can I view some of your work?</AccordionTrigger>
    <AccordionContent>
      Sure thing. Please explore the <a href="https://devraj-jhala.vercel.app" className="underline" target="_blank" rel="noopener noreferrer">portfolio</a> to get the idea of the work we do and we improve our standards every day.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger> What if I have different requirements</AccordionTrigger>
    <AccordionContent>
      We understand that every project, every business is different and hence we will customize everything according to the negotiations and final accepted requirements which will be shared to you in a document form.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>What if I am not satisfied with the work?</AccordionTrigger>
    <AccordionContent>
      We promise this won&apos;t happen but in case you are not satisfied with the service agreed upon, you will not have to pay a single dime and your codebase will be given back to you untouched guranteeing non disclosure. 
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-5">
    <AccordionTrigger>What if I just want mentoring service?</AccordionTrigger>
    <AccordionContent>
      Still you can send us the mail by clicking on book now and we will negotiate the price, dates etc. to your needs based on your inputs. 
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </section>
    </section>
  )
}
export default FAQs