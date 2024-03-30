import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card";

type Props = {};
const ProcessCardComponent = (props: Props) => {
  return (
    <section id="process" className="my-10 max-w-4xl mx-auto">
      <Card>
        <CardHeader>The Process</CardHeader>
        <CardContent>
          <ol className="relative border-s border-muted-foreground/50">
            <li className="mb-5 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <p className="text-xl font-semibold">
                Send an email by clicking on book now{" "}
              </p>
              <p className="text-muted-foreground text-sm">
                You are assured to get a reply within 24 hours wherein a free
                call of unspecified duration is alloted to understand your
                needs.
              </p>
            </li>

            <li className="mb-5 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <p className="text-xl font-semibold">We send you offer </p>
              <p className="text-muted-foreground text-sm">
                Based on your inputs, we tailor you personalized response along
                with relevant documents and timeline
              </p>
            </li>

            <li className="mb-5 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

              <p className="text-xl font-semibold">We sign the NDA </p>
              <p className="text-muted-foreground text-sm">
                After you agree to go ahead, we sign a Non Disclosure Agreement
                and we gurantee you to complete the work strictly within
                specified timeline.
              </p>
            </li>

            <li className=" mb-5 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <p className="text-xl font-semibold">
                We also do quality controls{" "}
              </p>
              <p className="text-muted-foreground text-sm">
                Even after the upgradation is complete, we offer tutoring
                services and lesson modules to the development team to make sure that code quality
                maintains. Your code will also be given to you back untouched in
                relevant documents.
              </p>
            </li>
          </ol>
        </CardContent>
        <CardFooter>
            <CardDescription className="text-base">We believe in 100% transparency and hence you will be involved in each and every step and your old artifacts will be given to you as it is.</CardDescription>
        </CardFooter>
      </Card>
    </section>
  );
};
export default ProcessCardComponent;
