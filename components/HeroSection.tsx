import Link from "next/link";
import TypeWriterEffect from "./TypeWriterEffect";
import { Button } from "./ui/button";

type Props = {};
const HeroSection = (props: Props) => {
  return (
    <section
      id="#"
      className="h-[85vh] px-5 md:px-0 flex flex-col text-center items-center justify-center"
    >
      <div className="bg-secondary px-4 py-1 rounded-full text-xs sm:text-sm">
        <p>Upgrade your old code! Make it modern, clean and performant 💯🚀</p>
      </div>

      <div className=" text-2xl md:text-5xl mt-2 flex items-center justify-center font-extrabold">
        <TypeWriterEffect />
        Codebase
      </div>

      <div className="max-w-3xl text-sm sm:text-base  mx-auto">
        <p className="mt-3">
          We offer code upgrades and JavaScript ecosystem training to enhance
          website and app performance, efficiency, and cleanliness, while also
          providing remote and quick employee training.
        </p>
      </div>

      <div className="flex items-center mt-5 justify-center space-x-5">
        <Button asChild size={"lg"}>
          <Link href={"#pricing"}>Book Now</Link>
        </Button>
        <Button asChild variant={"secondary"} size={"lg"}>
          <Link href={"#problems"}>Learn More</Link>
        </Button>
      </div>
    </section>
  );
};
export default HeroSection;
