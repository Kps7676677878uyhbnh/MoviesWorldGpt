import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Error from "./Pages/Error"
import Browse from "./components/Browse";

const AppRouter = createBrowserRouter([
    {
        path : "/",
        element : <Login/>,
        errorElement : <Error/>,
        
    },
    {
        path : "/browse",
        element : <Browse/>
    }
])


export default AppRouter;