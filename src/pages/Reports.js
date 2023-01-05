import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Box } from "@mui/system"
function Reports(){
    return(
        <>
        <Navbar/>
        <Box height={30}/>
        <Box sx={{ display: 'flex' }}>
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Reports</h1>
            </Box>
        </Box>
        </>
        
        
    )
}
export default Reports