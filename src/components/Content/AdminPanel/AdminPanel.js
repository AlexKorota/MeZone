import React, {useLayoutEffect} from "react";
import Sidebar from './Sidebar/Sidebar';


export default function AdminPanel() {
    return (
        <div>
            <div className="adminSidebar">
                <Sidebar />
            </div>
        </div>
    );
}