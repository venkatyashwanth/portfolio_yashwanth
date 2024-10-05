import React from 'react';
import { useParams } from "react-router-dom";

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


function ProjectDesc() {
  let { projId } = useParams();
  const projDesc = projectsInfo.filter(project => project.id == projId)
  return (
    <div>
      <h1>ProjectName: {projDesc[0].projectName}</h1>
    </div>
  )
}

export default ProjectDesc