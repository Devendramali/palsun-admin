import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
// import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
 import AdministrativeOfficers from "./pages/grampanchayat/AdministrativeOfficers";
 import GramPanchayatManager  from "./pages/grampanchayat/GramPanchayatManager";
 import NoticeManager  from "./pages/grampanchayat/NoticeManager";
 import Suvichar  from "./pages/grampanchayat/Suvichar";
 import ContactList  from "./pages/grampanchayat/ContactList";
 import Events  from "./pages/grampanchayat/Events";
 import Gallery  from "./pages/grampanchayat/Gallery";
 import MahitiAdhikar  from "./pages/grampanchayat/MahitiAdhikar";
 import Awards  from "./pages/grampanchayat/Awards";
 import Reports  from "./pages/grampanchayat/Reports";
 import SwayamGhoshna  from "./pages/grampanchayat/SwayamGhoshna";
 import GovPrograms  from "./pages/grampanchayat/GovPrograms";
 import GloriousPersons  from "./pages/grampanchayat/GloriousPersons";
 import School  from "./pages/grampanchayat/School";
import Implink from "./pages/grampanchayat/Implink";
import { useEffect } from "react";
import Banner from "./pages/grampanchayat/Banner";
import MananiyAdhikari from "./pages/grampanchayat/MananiyAdhikari";

export default function App() {

useEffect(() => {
  const checkExpiry = () => {
    const expiry = localStorage.getItem("expiry");

    if (!expiry) return;

    const expiryTime = Number(expiry);

    // Expired → logout instantly
    if (Date.now() > expiryTime) {
      localStorage.clear();
      window.location.replace("/login");
    }
  };

  // Run immediately
  checkExpiry();

  // Check every 1 second
  const interval = setInterval(checkExpiry, 1000);

  return () => clearInterval(interval);
}, []);




  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* 🔒 Protected Routes */}
            <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/administrative-officers" element={<AdministrativeOfficers />} />
            <Route path="/grambody" element={<GramPanchayatManager />} />
            <Route path="/notice-manager" element={<NoticeManager />} />
            <Route path="/contact-list" element={<ContactList />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/suvichar" element={<Suvichar />} />
            <Route path="/mahitiadhikar" element={<MahitiAdhikar />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/swayamghoshna" element={<SwayamGhoshna />} />
            <Route path="/govprograms" element={<GovPrograms />} />
            <Route path="/gloriouspersons" element={<GloriousPersons />} />
            <Route path="/school-info" element={<School />} />
            <Route path="/implinks" element={<Implink />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/mananiy-adhikari" element={<MananiyAdhikari />} />

            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/form-elements" element={<FormElements />} />
            {/* <Route path="/basic-tables" element={<BasicTables />} /> */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
            
          </Route>
        </Route>

        {/* 🔓 Public Auth Routes */}
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* ❌ 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
