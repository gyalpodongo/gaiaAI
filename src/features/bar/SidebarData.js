import React from 'react';
import * as BsIcons from "react-icons/bs"
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as VscIcons from "react-icons/vsc";

export const DetailsData = [
  {
    title: 'Details',
    section:false,
    path: '/details',
    icon: <BsIcons.BsPeopleCircle />,
    cName: 'nav-text'
  },
]
export const ConfigurationData = [
  {
    title: 'Endpoints',
    path: '/endpoints',
    section:false,
    icon: <BsIcons.BsGearFill />,
    cName: 'nav-text'
  },
  {
    title: 'Security',
    section:false,
    path: '/security',
    icon: <MdIcons.MdSecurity />,
    cName: 'nav-text'
  },
  {
    title: 'Permissions',
    section:false,
    path: '/permissions',
    icon: <FaIcons.FaLock />,
    cName: 'nav-text'
  }
]
export const DataIntegrationData = [
  {
    title: 'Public',
    section:false,
    path: '/public',
    icon: <MdIcons.MdPublic />,
    cName: 'nav-text'
  },
  {
    title: 'Internal',
    section:false,
    path: '/internal',
    icon: <CgIcons.CgInternal />,
    cName: 'nav-text'
  },
  {
    title: 'Files',
    section:false,
    path: '/files',
    icon: <FaIcons.FaFolderOpen />,
    cName: 'nav-text'
  },
  {
    title: 'Integrations',
    section:false,
    path: '/integrations',
    icon: <VscIcons.VscDebugDisconnect />,
    cName: 'nav-text'
  },
  {
    title: 'Logs',
    section:false,
    path: '/logs',
    icon: <BsIcons.BsClipboardData />,
    cName: 'nav-text'
  }
]
  


