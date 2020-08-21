import React, {useLayoutEffect} from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from 'react-pro-sidebar';
  import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <ProSidebar>
                <SidebarHeader>
                    
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem>
                            <Link to="/admin/createCourse">Создать курс</Link>
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    
                </SidebarFooter>
            </ProSidebar>
        </div>
    );
}