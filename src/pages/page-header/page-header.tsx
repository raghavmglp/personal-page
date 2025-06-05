import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/mode-toggle";
import useStore from "@/store/store";

function PageHeader() {
  const selectedTab = useStore((s) => s.selectedTab);
  const setSelectedTab = useStore((s) => s.setSelectedTab);

  const headerTabs = ["about", "cv", "projects", "blog"];

  return (
    <div className="px-4 sm:px-6 lg:px-8 mx-4 my-4  max-w-5xl w-full">
      <div className="flex items-center h-6 text-sm space-x-4">
        {headerTabs.map((item, index) => (
          <div
            key={item}
            className="flex h-5 items-center space-x-4 text-sm sticky"
          >
            <div
              onClick={() => setSelectedTab(item)}
              className="cursor-pointer"
            >
              <span
                className={
                  selectedTab === item ? "text-blue-600 font-semibold": undefined
                }
              >
                {item}
              </span>
            </div>
            {index < headerTabs.length - 1 && (
              <Separator orientation="vertical" />
            )}
          </div>
        ))}
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
