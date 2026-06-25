import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import BookProjectPage from "./pages/BookingProjectPage"
import SuccessPage from "./pages/SuccessPage"
import ProjectsPage from "./pages/ProjectsPage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"
import AboutPage from "./pages/AboutPage"
import FAQPage from "./pages/FAQPage"
import ContactPage from "./pages/ContactPage"
import RequestsPage from "./pages/admin/RequestsPage"
import DashboardPage from "./pages/admin/DashboardPage"
import RequestDetailsPage from "./pages/admin/RequestDetailsPage"
import ProjectsManagementPage from "./pages/admin/ProjectsManagementPage"
import AdminLoginPage from "./pages/admin/AdminLoginPage"
import ProtectedRoute from "./routes/ProtectedRoute"
import AddProjectPage from "./pages/admin/AddProjectPage"
import MessagesPage from "./pages/admin/MessagesPage"
import MessageDetailsPage from "./pages/admin/MessageDetailsPage"
import { Toaster } from "react-hot-toast"
import NotFoundPage from "./pages/NotFoundPage"
import Designs from "./pages/Designs"
import DesignDetails
from "./pages/DesignDetails";
import DesignsManagementPage
from "./pages/admin/DesignsManagementPage";

import AddDesignPage
from "./pages/admin/AddDesignPage";

import EditDesignPage
from "./pages/admin/EditDesignPage";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/book" element={<BookProjectPage/>}/>
        <Route path="/success" element={<SuccessPage />}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/projects/:id" element={<ProjectDetailsPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/faq" element={<FAQPage/>}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/UIDesigns" element={<Designs/>}/>
        <Route path="/designs/:id" element={<DesignDetails />}/>
        <Route path="/ASKadmin/dashboard" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="/ASKadmin/requests" element={<RequestsPage />}/>
        <Route path="/ASKadmin/request/:id" element={<RequestDetailsPage/>}/>
        <Route path="/ASKadmin/projects" element={<ProjectsManagementPage/>}/>
        <Route path="/ASKadmin/login" element={<AdminLoginPage/>}/>
        <Route path="/ASKadmin/project/new" element={<AddProjectPage />}/>
        <Route path="/ASKadmin/messages" element={<MessagesPage />}/>
        <Route path="/ASKadmin/messages/:id" element={<MessageDetailsPage/>}/>
        <Route path="/ASKadmin/designs" element={
                              <ProtectedRoute>
                                <DesignsManagementPage />
                              </ProtectedRoute>}/>
        <Route path="/ASKadmin/design/new" element={
                              <ProtectedRoute>
                                <AddDesignPage />
                              </ProtectedRoute>}/>
        <Route path="/ASKadmin/design/edit/:id" element={
                              <ProtectedRoute>
                                <EditDesignPage />
                              </ProtectedRoute>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      
    </div>
  )
}

export default App
