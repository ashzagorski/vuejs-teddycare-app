import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/Login.vue';
import Logout from "./views/Logout.vue";

import VisitsIndex from './views/VisitsIndex.vue';

import PatientsShow from './views/PatientsShow.vue';
import QuestionsShow from './views/QuestionsShow.vue';
import HealthcareProvidersShow from './views/HealthcareProvidersShow.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'root',  component: Login },

    { path: '/login', name: 'login', component: Login },
    { path: "/logout", name: "logout", component: Logout },

    { path: "/visits", name: "visits", component: VisitsIndex },
    { path: "/patients/:id", name: "patients-show", component: PatientsShow },
    { path: "/questions/:id", name: 'questions-show', component: QuestionsShow },
    { path: "/healthcare_providers/:id", name: 'healthcare-providers-show', component: HealthcareProvidersShow }
  ]
});
