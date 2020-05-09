import React from 'react';
import DefaultLayout from '../Containers';

const Home = React.lazy(() => import('../Views/Home'));
const Login = React.lazy(() => import('../Views/Login'));
const SignUp = React.lazy(() => import('../Views/SignUp'));
const EditUser = React.lazy(() => import('../Views/EditUser'));

const Routes = [
  { path: '/', name: 'Main', component: DefaultLayout, exact: true },
  { path: '/home', name: 'Home', component: Home, exact: true, isPrivate: true },
  { path: '/login', name: 'Login', component: Login, exact: true },
  { path: '/signup', name: 'SignUp', component: SignUp, exact: true },
  { path: "/users/edit/:id", name: "EditUser", component: EditUser, exact: true, isPrivate: true },
];

export default Routes;
