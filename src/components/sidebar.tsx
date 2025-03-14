import { 
    Box, 
    Divider, 
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import {  Fragment, useState } from "react";

import { Menu, Home, ClosedCaption, Mic, Movie, LiveTv } from '@mui/icons-material';
import { Link } from 'react-router-dom';


let menuList =[
    {id: 1, name: 'Home', link:'/', icon: <Home />},
    {id: 2, name: 'Subbed Anime', link:'/subbed-anime', icon: <ClosedCaption />},
    {id: 3, name: 'Dubbed Anime', link:'/dubbed-anime', icon: <Mic />},
    {id: 4, name: 'Movies', link:'/movies', icon: <Movie />},
    {id: 5, name: 'TV Series', link:'/tv-series', icon: <LiveTv />}
];


export default  function SideBar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) =>() =>{
        setOpen(newOpen)
    };


    const DrawerList =()=> {
        return(
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <div className="w-full py-4 px-4 bg-white border-b flex items-center">
                    <Menu  fontSize="medium" className='text-gray-500 mr-8' />
                    <h1 className="font-bold text-gray-500 text-lg leading-6"> 
                    AniFlix
                    </h1>
                </div>

                <Divider />
                <List>
                {menuList.map((text, index) => (
                <ListItem key={index} disablePadding component={Link} to={text.link}>
                    <ListItemButton>
                        <ListItemIcon>
                            {text.icon}
                        </ListItemIcon>
                        <ListItemText primary={text.name} />
                    </ListItemButton>
                </ListItem>
                ))}
                </List>
            </Box>
        )
    }

    return (
        <Fragment>
            <IconButton onClick={toggleDrawer(true)} className="rounded-lg"><Menu  fontSize="medium" className='text-gray-500' /></IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <DrawerList />
            </Drawer>   
        </Fragment>
    )
}

