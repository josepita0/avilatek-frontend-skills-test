import Link from "next/link"
import { Button } from "../ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu"
import { Book, Sparkles, TvMinimalPlay } from "lucide-react"
import React from "react"
import { cn } from "@/common/lib/utils/tailwind-utils"

export const TopBar = () => {

    const itemsNavigation: { title: string, href?: string, subContent?: { title: string, href?: string, icon?: React.ReactNode, description?: string }[]}[] = [
      {
        title: "Home",
        href: "/home"
      },
      {
        title: "Products",
        subContent: [
          {
            title: 'Blog',
            href: '/blog',
            description: 'The latest industry news, updates and info',
            icon: <Book className="text-primary"/>,
          },
          {
            title: 'Customer stories',
            href: '/customer-stories',
            description: 'Learn how our customers are making big changes',
            icon: <Sparkles className="text-primary" />,
          },
          {
            title: 'Video tutorials',
            href: '/video-tutorials',
            description: 'Get up and running on new features and techniques',
            icon: <TvMinimalPlay className="text-primary"/>,
          }

        ]

      },
      {
        title: "Resources",
        href: "/home"
      },
      {
        title: "Pricing",
        href: "/home"
      }
      
    ]


    return (
      <div className="flex justify-between items-center gap-2">
        <NavigationMenu>
          <NavigationMenuList>

            {

              itemsNavigation.map((item) => {
                return (
                  <>
                    {
                      item.href ? (
                        <NavigationMenuItem key={item.title}>
                          <Link href={item.href as string} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              {item.title}
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      ) : (

                        <NavigationMenuItem>
                          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                              {item?.subContent?.map((component) => (
                                <ListItem
                                  icon={component.icon}
                                  key={component.title}
                                  title={component.title}
                                  href={component.href}
                                  description={component.description}
                                />
                              ))}
                            </ul>
                            
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      )
                    }

                  </>
                )
              })
            }
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-2">

        <Button variant={"ghost"} >Log in</Button>
        <Button className="bg-primary">Sign up</Button>
        </div>
      </div>
    )
}


 
interface IListItemProps {
  title:string, href?: string, icon?: React.ReactNode, description?: string
}
const ListItem = ({title, description, href, icon}: IListItemProps) => {

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            " block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          )}
        >
          <div className="flex gap-2 ">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
