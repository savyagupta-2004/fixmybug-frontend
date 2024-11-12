import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home";
import Requestfix from "./components/Requestfix";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/shared/Signup";
import TermsosService from "./components/ui/TermsosService";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Confirmation from "./components/ui/Confirmation";
import Landing_part from "./components/postlogin/Landing_part";
import Login from "./components/shared/Login";
import Signupform1 from "./components/shared/Signupform1";
import Signupform2 from "./components/shared/Signupform2";
import Chat from "./components/Stackoverflow/Main";
import Postlogin_bugfixee from "./components/postlogin/Postlogin_bugfixee";
import UserDetails from "./components/postlogin/UserDetails";
import Blog from "./components/blog/Blog";
import SignUp from "./components/contract/SignUp";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/jobs",
//     element: <Jobs />,
//   },
//   {
//     path: "/description/:id",
//     element: <JobDescription />,
//   },
//   {
//     path: "/RequestFix",
//     element: <Requestfix notify={notify} />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   // admin ke liye yha se start hoga
//   {
//     path: "/admin/companies",
//     element: (
//       <ProtectedRoute>
//         <Companies />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/admin/companies/create",
//     element: (
//       <ProtectedRoute>
//         <CompanyCreate />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/admin/companies/:id",
//     element: (
//       <ProtectedRoute>
//         <CompanySetup />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/admin/jobs",
//     element: (
//       <ProtectedRoute>
//         <AdminJobs />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/admin/jobs/create",
//     element: (
//       <ProtectedRoute>
//         <PostJob />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/admin/jobs/:id/applicants",
//     element: (
//       <ProtectedRoute>
//         <Applicants />
//       </ProtectedRoute>
//     ),
//   },
// ]);
function App() {
  const notify = (message, type = "default") => {
    toast(message, {
      type,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "custom-toast",
    });
  };
  return (
    <>
      <style>{`
      .custom-toast {
        background-color: #333;
        color: #fff;
        border-radius: 8px;
      }

      .custom-toast .Toastify__toast--default {
        background-color: #333;
        color: #fff;
      }

      .custom-toast .Toastify__toast--success {
        background-color: #4caf50;
        color: #fff;
      }

      .custom-toast .Toastify__toast--error {
        background-color: #f44336;
        color: #fff;
      }

      .custom-toast .Toastify__close-button {
        color: white;
      }
    `}</style>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home notify={notify} />} />

            <Route
              path="/RequestFix"
              element={<Requestfix notify={notify} />}
            />
            <Route
              path="/signup-partTime"
              element={<Signupform1 notify={notify} />}
            />
            <Route
              path="/signup-fullTime"
              element={<Signupform2 notify={notify} />}
            />
            <Route path="/terms" element={<TermsosService notify={notify} />} />
            <Route path="/about-us" element={<Aboutus notify={notify} />} />
            <Route path="/contact-us" element={<Contactus notify={notify} />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route
              path="/postlogin-part"
              element={<Landing_part notify={notify} />}
            />
            <Route path="/login" element={<Login notify={notify} />} />
            <Route path="/Chat" element={<Chat notify={notify} />} />
            <Route
              path="/postlogin"
              element={<Postlogin_bugfixee notify={notify} />}
            />
            <Route
              path="/user/:email"
              element={<UserDetails notify={notify} />}
            />
            <Route path="/blog" element={<Blog></Blog>} />
          </Routes>
        </BrowserRouter>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
