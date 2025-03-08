import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CabinIcon from '@mui/icons-material/Cabin';
import Image from "next/image";
import Link from 'next/link';




export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);


  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };


  const pageRoutes = [
    { text: 'Editor', href: '/editor' },
    { text: 'Stories', href: '/search' },
    { text: 'Home', href: '/' }
  ]
   

  const mapIcons = (index: number) => {
    if (index === 0) {
      return <EditNoteIcon style={{color: "white"}} />;
    
    } else if (index === 1) {
        return <AutoStoriesIcon style={{color: "white"}}/>;
    
    } else {
        return <CabinIcon style={{color: "white"}}/>; 
    }
     
  };



  const DrawerList = (
    
    <Box 
     /* Control Main Styles of Sidebar Here */
       sx={{ 
           width: 250,
           height: '100vh',
           color: 'white',
           backgroundColor: '#29292a' 
       }} 
       role="presentation" 
       onClick={toggleDrawer(false)}
      >

      <List>
        {pageRoutes.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} href={item.href}>
              <ListItemIcon> {mapIcons(index)}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider />
      
    </Box>
  
  );

  return (
   
    <div>
      
      <Image
         src="/burger-menu-left-svgrepo-com.svg"
         width={45}
         height={45}
         alt="Click to Expand Menu"
         onClick={toggleDrawer(true)}
         className="absolute left-0" 
      />
  
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  
  );
}

