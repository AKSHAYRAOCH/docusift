import { Search, Settings, Files } from "lucide-react"


import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"



const items = [
    {
        title: "Documents",
        url: "/documents",
        icon: Files
    },
    {
        title: "Search",
        url: "/search",
        icon: Search
    }, {
        title: "Settings",
        url: "/settings",
        icon: Settings
    }
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">

            <SidebarContent>
                <h1 className="text-4xl font-bold text-blue-800 p-1 ml-9  mt-5">DocuSift</h1>
                <SidebarGroup />
                <SidebarGroupContent>
                    <SidebarMenu >
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title} >
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
                <SidebarGroup />
            </SidebarContent>

        </Sidebar>
    )
}
