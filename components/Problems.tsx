import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { IoMdMail } from "react-icons/io";

type Props = {}
const Problems = (props: Props) => {
  return (
    <section id="problems" className="my-5">
        <section className="flex items-center space-x-10 justify-center">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Problems with old code</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc text-sm">
                        <li>Legacy PHP Code often suffer from slow performance which could translate to a 30-40% increase in bounce rates and a 15-25% drop in conversion rates.</li>
                        <li> Legacy codebases may struggle to handle increased traffic and user demands, resulting in potential downtime and a loss of 20-30% in revenue during peak periods.</li>
                        <li>Suboptimal User Experience can lead to a 25-35% decrease in user engagement and a 15-20% decrease in customer retention rates.</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <CardDescription>
                        Overall, legacy codes are neither good for businesses nor their customers.
                    </CardDescription>
                </CardFooter>
            </Card>
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Solutions we offer</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc text-sm">
                        <li>We convert your entire code to javascript framework of your choice thereby decreasing load times by 50%-60% and thereby increasing user engagement by 30%-40%.</li>
                        <li> We will optimize your application's performance, resulting in a 40-50% reduction in bounce rates and a 20-30% increase in page views per session,leading to higher engagement.</li>
                        <li>Our migration process will refactor your codebase into a modular, scalable architecture, reducing downtime by 30-40% during peak traffic periods.</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <CardDescription>
                        We also offer tutoring to your development team, at your time at your pace.
                    </CardDescription>
                </CardFooter>
            </Card>
        </section>

        <section className="flex mt-5 space-y-2 items-center flex-col justify-center">
            <p className="italic text-muted-foreground">Hence, you need someone to do the ugly work for you</p>
            <Button variant={"default"} size={"lg"} asChild>
                <Link href={"#pricing"}>
                <span className="flex items-center space-x-2">
                <p>Let&apos;s meet to discuss </p><IoMdMail />
                </span>
                </Link>
            </Button>
        </section>
    </section>
  )
}
export default Problems