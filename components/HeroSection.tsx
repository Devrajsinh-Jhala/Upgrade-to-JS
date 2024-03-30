import Link from "next/link";
import TypeWriterEffect from "./TypeWriterEffect";
import { Button } from "./ui/button";

type Props = {};
const HeroSection = (props: Props) => {
  return (
    <section
      id="#"
      className="h-[85vh] flex flex-col text-center items-center justify-center"
    >
      <div className="bg-secondary p-2 rounded-full text-sm">
        <p>Upgrade your old code! Make it modern, clean and performant 💯</p>
      </div>

      <div className="text-5xl mt-1 flex items-center justify-center font-extrabold">
        <TypeWriterEffect />
        Codebase
      </div>

      <div className="max-w-3xl mx-auto">
        <p className="mt-4">
          We offer code upgrades and JavaScript ecosystem training to enhance
          website and app performance, efficiency, and cleanliness, while also
          providing remote and quick employee training.
        </p>
      </div>

      <div className="flex items-center mt-5 justify-center space-x-5">
        <Button asChild>
          <Link href={"#pricing"}>Book Now</Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link href={"#problems"}>Learn More</Link>
        </Button>
      </div>
    </section>
  );
};
export default HeroSection;
