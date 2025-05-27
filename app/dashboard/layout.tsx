import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Mic } from "lucide-react"
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top bar with toggle button */}
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="ml-auto flex items-center">
              <BreadcrumbLink
                href="/dashboard/notes/record-notes"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white font-bold hover:bg-blue-700 transition-colors"
              >
                <Mic size={20}/>
                <span>Record</span>
              </BreadcrumbLink>
            </div>

          </header>


          {/* Page content */}
          <main className="flex-1 p-6 bg-gray-50 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
