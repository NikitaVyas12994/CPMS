import { Dashboard } from "../../Pages/Dashboard";
import { Cards } from "../../Pages/Cards";
import { Graphs } from "../../Pages/Graphs";
import { Map } from "../../Pages/Map";

const ComponentPathList = {
    sideTopMenu: [
        {
            path: '/Dashboard', component: <Dashboard />
        },
        {
            path: '/Cards', component: <Cards />
        },
        {
            path: '/Graphs', component: <Graphs />
        }
    ],
    sideMenu: [
        {
            path: '/Map', component: <Map />
        }
    ]
}

export default ComponentPathList