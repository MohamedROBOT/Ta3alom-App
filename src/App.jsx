import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home/Home"
import Layout from "./components/Layout/Layout"
import About from "./components/About/About"
import Courses from "./components/Courses/Courses"
import { CourseProvider } from "./Context/CourseContext"
import CourseDetails from "./components/Courses/CourseDetails"
import Blog from "./components/Blog/Blog"
import BlogDetails from "./components/Blog/BlogDetails"
import Contact from "./components/Contact/Contact"



function App() {




const router = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      {
        index: true, element: <Home />
      },
      {
        path: "about", element: <About />
      },
      {
        path: "courses", element: <Courses />
      },
      {
        path:"courses/:id" , element: <CourseDetails />
      },
      {
        path: "blog", element: <Blog />
      },
      {
        path: "blogdetails", element: <BlogDetails />
      },
      {
        path: "contact", element: <Contact />
      },
      {
        path:"*" , element: <h1>404 Not Found</h1>
      }
    ]
  }
])

  return (
   <CourseProvider>
     <RouterProvider router={router} />
      
     
   </CourseProvider>

  )
}

export default App
