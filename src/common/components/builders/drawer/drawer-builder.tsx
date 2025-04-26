"use client";

import { IconSquareX } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { useDrawerStore } from "@/lib/stores/use-drawer-store";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface IProps {
  width?: string;

  onClose?: () => void;

  children?: React.ReactNode;
}

export const DrawerViews = ({
  onClose,
  children,
  width = "sm:w-[500px]",
}: IProps) => {
  const { dataDrawer, toggleDrawer } = useDrawerStore();

  return (
    <DrawerContent
      className={cn(
        "sm:h-screen sm:top-0 sm:right-0 left-auto mt-0 rounded-none dark:bg-black bg-background",
        width
      )}
    >
      <div className="mx-auto w-full pt-0 p-4">
        <DrawerHeader>
          <div className="flex flex-col justify-end items-end">
            <DrawerClose asChild>
              <IconSquareX
                onClick={() => {
                  toggleDrawer();

                  onClose && onClose();
                }}
                size={30}
                className="cursor-pointer dark:hover:text-white hover:text-black text-gray-400"
              />
            </DrawerClose>
            <div className="w-full flex flex-col items-start space-y-2">
              <DrawerTitle>{dataDrawer?.title}</DrawerTitle>

              <DrawerDescription>{dataDrawer?.description} </DrawerDescription>
            </div>
          </div>

          {children}
        </DrawerHeader>
      </div>
    </DrawerContent>
  );
};
