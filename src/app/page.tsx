import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Button variant="slack" className=" font-helix-bold text-2xl">
                Click Me
            </Button>
        </div>
    );
}
