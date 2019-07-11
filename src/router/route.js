import Home from '../component/Home';
import Shop from '../component/Shop';
import User from '../component/User';
import UserList from '../component/UserList';
let routes = [
    {
        path: "/",
        component: Home,
        exact:true
    },
    {
        path: "/shop/:id",
        component: Shop
    },
    {
        path: "/user",
        component: User,
        routes:[   /*嵌套路由*/
            {
                path: "/user/",
                component: UserList
            }
        ]
    }
];

export default routes;
