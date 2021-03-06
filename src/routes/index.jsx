import HeaderOnly from '~/components/Layout/HeaderOnly/HeaderOnly';

import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import Search from '~/pages/Search/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/search', component: Search , layout: null },
    { path: '/upload', component: Upload , layout: HeaderOnly},
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
