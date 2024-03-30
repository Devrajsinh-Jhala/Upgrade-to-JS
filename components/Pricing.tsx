import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { IoMdMail } from "react-icons/io"


type Props = {}
const Pricing = (props: Props) => {
  return (
    <section id="pricing" className="my-10">
        <section className="flex md:flex-row flex-col items-center space-y-10 md:space-y-0 md:space-x-10 justify-center">
            
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Codebase Upgrade</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl mb-3 font-extrabold"><del className="text-muted-foreground">₹8999</del>{" "}₹6999</p>
                    <ul className="list-disc ">
                        <li>Upgrading entire codebase</li>
                        <li>Additional modifications decided upon negotiations</li>
                        <li>No Design included</li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Rebranding</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-3xl mb-3 font-extrabold"><del className="text-muted-foreground">₹16999</del>{" "}₹13999</p>
                    <ul className="list-disc ">
                        <li>Redesign of web application</li>
                    <li>Upgrading entire codebase</li>
                    <li>Constant feedback loop on design</li>
                    <li>Free mentoring included</li>
                        
                    </ul>
                </CardContent>

            </Card>

        </section>

        <section className="flex mt-5 space-y-2 items-center flex-col justify-center">
            <p className="italic text-muted-foreground">Contact by clicking below, assured reply within 12 hours.</p>
            <Button variant={"default"} size={"lg"} asChild>
                <Link target="_blank" href={"mailto:jhaladevrajsinh11@gmail.com"}>
                <span className="flex items-center space-x-2">
                <p>Book Now 🤝</p>
                </span>
                </Link>
            </Button>
        </section>
    </section>
  )
}
export default Pricing