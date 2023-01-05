import Navbar from "../components/Navbar"
import { Box } from "@mui/system"
import Sidebar from "../components/Sidebar"

function Home(){
    return(
        <>
        <Navbar/>
        <Box height={30}/>
        <Box sx={{ display: 'flex' }}>
            
        <Sidebar/>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Home</h1>
        </Box>
        
        </Box>
        </>
        
    )
}
export default Home