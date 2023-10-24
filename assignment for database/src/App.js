import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Form from "./components/Form";

const App = () => {
    const [isEdit,setIsEdit] = useState(false);
    
    const [editValue,setEditValue] = useState({
       email: '',
       firstname: '',
       lastname: '',
       mobile: '',
       dob: ''
    })

    const router = createBrowserRouter([
        {
            path:"/",
            element:<UserDetails
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setEditValue={setEditValue}/>
        },
        {
            path:"/form",
            element:<Form
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            editValue={editValue}/>
        }
    ])
    return(
    <RouterProvider router={router}/>
    );
}

export default App;