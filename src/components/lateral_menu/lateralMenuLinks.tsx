import { CalendarToday, Logout, Person, School, Settings, TaskAlt } from "@mui/icons-material";
import { LinksGroup } from "./types";

export const lateralMenuLinksGroups: LinksGroup[] = [
    {
        elems: [
            {icon: <School />, title: 'App logo', action: () => console.log('hi')},
        ]
    },
    {
        elems: [
            {icon: <CalendarToday />, title: 'Calendar', action: () => console.log('tasks')},
            {icon: <TaskAlt />, title: 'Tasks', action: () => console.log('tasks')},
            {icon: <Person />, title: 'Person',  action: () => console.log('tasks')},
            {icon: <Settings />, title: 'Settings', action: () => console.log('tasks')},
        ]
    },
    {
        elems: [
            {icon: <Logout />, title: 'Log out', action: () => console.log('tasks')},
        ]
    },
];