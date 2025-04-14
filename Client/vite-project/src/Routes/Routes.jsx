import Protected from '../ProtectedWrapper/Protected';
import Home from '../Page/Home';
import About from '../Page/About';
import Profile from '../Page/Profile';
import Login from '../Page/Login';
import SignUp from '../Page/SignUp';


export const protectedRoute = [    // routs which can only be acces by user
    {
        path: '/',
        element: (
            <Protected>
                <Home />
            </Protected>
        )
    },
    {
        path: '/about',
        element: (
            <Protected>
                <About />
            </Protected>
        )
    },
    {
        path: '/profile',
        element: (
            <Protected>
                <Profile />
            </Protected>
        )
    }
];

export const publicRoute = [    //routes sccess by all 
    { 
        path: '/login',
         element: <Login /> 
        },
    { 
        path: '/signup', 
        element: <SignUp />
    }
];