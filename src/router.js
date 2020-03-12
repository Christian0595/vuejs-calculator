import Calculator from './components/Calculator.vue';
import Welcome from './components/Welcome.vue';

export default[
    {
        path: '/',
        component: Welcome
    },
    {
        path: '/calculadora',
        component: Calculator
    },
];