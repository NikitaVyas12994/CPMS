import { Dashboard } from "../../Pages/Dashboard";
import { Cards } from "../../Pages/Cards";
import { Graphs } from "../../Pages/Graphs";

const ComponentPathList = [
    {
        path: '/Dashboard', component: <Dashboard />
    },
    {
        path: '/Cards', component: <Cards />
    },
    {
        path: '/Graphs', component: <Graphs />
    }
]

export default ComponentPathList