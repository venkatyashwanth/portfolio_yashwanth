import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Projects.scss";

const Project = () => {
    return (
        <>
            <div className='breadcrumb'>
                <p >BreadCrumbs</p>
            </div>
            <Outlet />
        </>
    )
}

export default Project;