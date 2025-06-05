import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileHeader } from "@/assets";

function About() {
  return (
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarImage src={ProfileHeader} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        
      </div>
  );
}

export default About;
