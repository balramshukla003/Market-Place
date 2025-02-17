import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './actual-UI/Navbar.jsx';
import Footer from './actual-UI/Footer.jsx';
import Landing from './actual-UI/Landing.jsx';
import Login from './actual-UI/Login.jsx';
import Register from './actual-UI/Register.jsx';
import Careers from './actual-UI/Careers.jsx';
import Job_Search from './actual-UI/Job_Search.jsx';
import JobSeekerUI from './jobbers-UI/JobSeekerUI.jsx';
import Profile from './jobbers-UI/UserProfile.jsx';
import Exampl from './actual-UI/Example.jsx';
import Jobber_Navbar from './jobbers-UI/Jobber_Navbar.jsx';
import RecruiterDashboard from './recruiters-UI/RecruitersDashboard.jsx';
const DynamicComponent = ({ children }) => {
  const { userLoggedIn, authUser } = useContext(AuthContext);


  if (userLoggedIn) {
    if (authUser.type === 'job-seeker') {
      return (
        <>
          <Jobber_Navbar />
          {children || <JobSeekerUI />}
          <Footer />
        </>
      );
    }

    if (authUser.type === 'recruiter') {
      return (
        <>
          {children || <RecruiterDashboard />}
          <Footer />
        </>
      );
    }
  } else {
    return (
      <>
        <Navbar />
        {children || <Landing />}
        <Footer />
      </>
    );
  }
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DynamicComponent />} />
        <Route path="/job_search" element={<DynamicComponent > <Job_Search /> </DynamicComponent >} />
        <Route path="/careers" element={<DynamicComponent > <Careers /> </DynamicComponent>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
