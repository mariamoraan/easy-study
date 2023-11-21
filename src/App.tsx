import { createContext, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { IEvent, ISubject } from './interfaces';
import CalendarPage from './pages/calendar/CalendarPage';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { CALENDAR, HOME, LOGIN, SIGNUP } from './routes/routes';
import { useStartTimer } from './timer/useStartTimer';

const router = createBrowserRouter([
  {
    path: LOGIN,
    element: <Login />,
  },
  {
    path: SIGNUP,
    element: <Signup />,
  },
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: CALENDAR,
    element: <CalendarPage />,
  },
  {
    path: '/',
    element: <Login />,
  },
]);
export interface IAppContext  {
  token: string,
  setToken: (token: string) => void,
  events: IEvent[],
  setEvents: (events: IEvent[]) => void;
  subjects: ISubject[],
  setSubjects: (subjects: ISubject[]) => void;
}
export const AppContext = createContext<IAppContext | null>(null);

const App = () => {
  const [token, setToken] = useState('askdmassd');
  const [subjects, setSubjects] = useState<ISubject[]>([
    {
      id: 'maths',
      name: 'Maths',
      color: 'orange',
    }
  ])
  const [events, setEvents] = useState<IEvent[]>([
    {
      date: new Date(2023, 11 -1, 21),
      name: 'Examen tema 1',
      subjectId: 'maths'
    },
    {
      date: new Date(2023, 11 -1, 21),
      name: 'Entregar práctica',
      subjectId: 'maths'
    },
    {
      date: new Date(2023, 11 -1, 21),
      name: 'Excursión al campo',
    },
  ])
  useStartTimer();
  return (
    <AppContext.Provider value={{token, setToken, events, setEvents, subjects, setSubjects}}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
