import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Home from "./components/Home";

import Requestfix from "./components/Requestfix";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <Route path="/" element={<Home />} />

            <Route
              path="/RequestFix"
              element={<Requestfix notify={notify} />}
            />
          </Routes>
        </BrowserRouter>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
