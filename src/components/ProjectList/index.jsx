import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectList.module.scss';
import "../../scss/base/common.scss";

const projectsInfo = [
    {
        id: 1,
        projectName: 'Simple Todos',
        imageUrl: 'https://i.postimg.cc/fTn61RrQ/simpletodos-desktop.png',
        liveUrl: 'https://simpletodos7172.netlify.app/'
    },
    {
        id: 2,
        projectName: 'Click Counter',
        imageUrl: 'https://i.postimg.cc/7ZB4tLVC/click-Counter-desktop.png',
        liveUrl: 'https://counterv17172.netlify.app/'
    },
]

function ProjectList() {
    return (
        <>
            <div className={`${styles.projectList}`}>
                {
                    projectsInfo.map(project =>
                        <div key={project.id} className={`${styles.projectCard}`}>
                            <div className={`${styles.imageWrapper}`}>
                                <a href={project.liveUrl} target='_blank' rel="noreferrer">
                                    <img src={project.imageUrl} alt={project.projectName} />
                                </a>
                            </div>
                            <Link to={`/projects/${project.id}`}>
                                <div className={`${styles.projectInfo}`}>
                                    <h2 className={`${styles.projectTitle}`}>
                                        {project.projectName}
                                    </h2>
                                </div>
                                <span className={`${styles.icon} icons_outward_arr`}></span>
                            </Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ProjectList