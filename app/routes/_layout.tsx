import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar"
import { AppSidebar } from "~/components/app-sidebar"
import { Outlet } from "@remix-run/react"

export default function Layout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
        </main>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </SidebarProvider>
      
    </>
  )
}
