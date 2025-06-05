import useStore from "@/store/store";
import About from "./about";

function PageBody() {
  const selectedTab = useStore((s) => s.selectedTab);

  return (
    <div className="px-4 sm:px-6 lg:px-8 my-4 max-w-5xl w-full">
      <div className="flex items-center h-6 text-lg space-x-4 justify-center">
        {selectedTab == "about" && <About/>}
        {selectedTab == "cv" && <>cv</>}
        {selectedTab == "projects" && <>projects</>}
        {selectedTab == "blog" && <>blog</>}
      </div>
    </div>
  );
}

export default PageBody;
