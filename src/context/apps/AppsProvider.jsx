import { useState } from "react";
import AppsContext from "./AppsContext";

const AppsProvider = ({children}) => {
    const [ apps, setApps ] = useState([
        {place:'horizontal-center', app:'nutrideli'},
        {place:'right', app:'chat-zone'},
        {place:'right', app:'vituchs'},
        {place:'right', app:'works'},
        {place:'right', app:'generator'}
    ]);
    const changeApp = (position, to) => {
        const copy_apps = [...apps];
        copy_apps[position].place = to;
        if(to === 'left') {
            copy_apps[position+1].place='horizontal-center';
            return setApps(copy_apps);
        } 
        copy_apps[position-1].place='horizontal-center';
        setApps(copy_apps);
    }
    return (
        <AppsContext.Provider value={{
            apps,
            changeApp
        }}>
            {children}
        </AppsContext.Provider>
    );
}
export default AppsProvider;