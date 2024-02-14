import { Box, List, ListItem } from "@mui/material";

function SideBar(props) {

    return (
        <Box
            flex={1}
            p={2}
            width={60}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed" sx={{background:"cyan"}}>
                <List>
                    <ListItem sx={props.currentTab === "home" ? {color:'red'}:{color:'white'}} onClick={()=>props.setCurrentTab('home')}>Home</ListItem>
                    <ListItem disabled>About</ListItem>
                    <ListItem sx={props.currentTab === "user" ? {color:'red'}:{color:'white'}}  onClick={()=>props.setCurrentTab('user')}>User List</ListItem>
                </List>

            </Box>
        </Box>
    )

}

export default SideBar;