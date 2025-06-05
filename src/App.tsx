import { ThemeProvider } from "@/components/theme-provider";
import PageHeader from "./pages/page-header/page-header";
import PageBody from "./pages/page-body/page-body";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-full min-h-screen flex flex-col items-center">
        <div className="w-full sticky top-0 z-10 bg-background shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader />
          </div>
          <div className="w-full">
            <Progress value={scrollProgress} className="h-0.5" />
          </div>
        </div>

        <div className="w-full flex flex-col items-center flex-grow mt-[HEADER_HEIGHT]">
          <PageBody />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
