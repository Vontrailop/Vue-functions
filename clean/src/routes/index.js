import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({

    routes: [
        {
            path: '/',
            name: 'component1',
            component: () => import('../components/componentsWithProps/Component3.vue'),
            props: {
                numberAny: 21, stringAny: 'Mensaje por defecto', booleanAny: true
            },
        },
        {
            path: '/two',
            name: 'component2',
            component: () => import('../components/componentsWithProps/Component4.vue'),
            props: true,
        }
    ]

})

export default router;