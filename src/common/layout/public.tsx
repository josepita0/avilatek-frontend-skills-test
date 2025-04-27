import Head from "next/head";
import { ReactNode, } from "react";
import { cn } from "@/common/lib/utils/tailwind-utils";
import { TopBar } from "../components/top-bar";

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({
  children,
}: AuthenticatedLayoutProps) => {

  return (
    <>
      <Head>
        <title>Untitle UI</title>
      </Head>

      <div className="p-1 h-screen w-full flex">
        
          <div
            className={cn(
              "h-full w-full  relative flex flex-col ",
            )}
          >
            <div className="sticky top-0 z-50 ">
              <div className="px-10 py-4 dark:bg-card  dark:text-white   xl:rounded-br-lg xl:rounded-tr-lg  xl:rounded-tl-none  rounded-lg ">
               <TopBar/>
              </div>

             
            </div>
            <main
              className={cn(
                " rounded-md relative flex overflow-y-auto overflow-x-hidden p-1")}
            >
              {children}
            </main>
          </div>

      </div>
    </>
  );
};
