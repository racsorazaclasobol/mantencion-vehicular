import { useSelector } from "react-redux";

import { TurnedInNot, Close } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Toolbar, Typography } from "@mui/material"
import { useState } from "react";


const DrawerHeader = styled('div')(() => ({
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  }));

export const SideBar = ({ drawerWidth }) => {

    const { displayName } = useSelector( state => state.auth );

    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

  return (
    
    <Box
        component='nav'
        sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
    >

        <Drawer
            variant="persistent"
            open = { open }
            sx={{ 
                 display: { xs: 'block' },
                 '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >

            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <Close /> 
                </IconButton>
            </DrawerHeader>

            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    { displayName }
                </Typography>
            </Toolbar>
            
            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'Aute proident mollit esse ad ipsum ut exercitation. ' } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ) )
                }
            </List>

        </Drawer>

    </Box>

  )
}
