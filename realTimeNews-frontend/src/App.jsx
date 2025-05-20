import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
}from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import CategoryRoute from "./component/CategoryRoute";

      // all pages import heare


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element = {<Main/>}>
          <Route path='/' element ={<Home/>}/>
          <Route path='/news/category/Sports' element ={<CategoryRoute/>}/>
          <Route path='/news/category/Education' element ={<CategoryRoute/>}/>
          <Route path='/news/category/Travel' element ={<CategoryRoute/>}/>
          <Route path='/news/category/Technology' element ={<CategoryRoute/>}/>
          <Route path='/news/category/Health' element ={<CategoryRoute/>}/>
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
