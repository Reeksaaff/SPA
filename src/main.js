import {
    ErrorComponent
} from './pages/error.js'
import {
    HomeComponent
} from './pages/home.js'
import {
    TreatmentsComponent
} from './pages/treatments.js'
import {
    RoomsComponent
} from './pages/rooms.js'
import {
    BookingComponent
} from './pages/booking.js'
// Routes

const routes = [{
        path: '/',
        component: HomeComponent
    },
    {
        path: '/treatments',
        component: TreatmentsComponent
    },
    {
        path: '/rooms',
        component: RoomsComponent
    },
    {
        path: '/booking',
        component: BookingComponent
    }
];

//Get current path
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

//Get right component
const findComponentByPath = (path, routes) => routes.find(route => route.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

//Router

const router = () => {
    const path = parseLocation(document.location.hash);
    const {
        component = ErrorComponent
    } = findComponentByPath(path, routes) || {};
    document.getElementById('app').innerHTML = component.render();

}

window.addEventListener('hashchange', router);
window.addEventListener('load', router) || router();