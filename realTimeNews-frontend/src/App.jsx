import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
}from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";

      // all pages import heare


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element = {<Main/>}>
         <Route path='/' element ={<Home/>}/>
        </Route>

      </Route>
    )
  )
  return (
    <RouterProvider
    router={router}
   />
  )
}

export default App
