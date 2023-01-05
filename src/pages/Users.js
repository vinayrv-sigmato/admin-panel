import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Box } from "@mui/system"
import UsersList from "./users/UsersList"
function Users(){
    return(
        <>
        <Navbar/>
        <Box height={70}/>
        <Box sx={{ display: 'flex' }}>
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <UsersList/>
            
            </Box>  
        </Box>
        </>
        
            
        
        
    )
}
export default Users