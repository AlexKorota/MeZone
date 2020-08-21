import React, { useLayoutEffect } from "react";
import Style from "./AdminZone.module.css"
import {NavLink} from "react-router-dom";

export default function AmdminZone(){
    return (
        <div className={Style.adminzone}>
          <NavLink to="/admin">Администрирование</NavLink>
        </div>
    );
}