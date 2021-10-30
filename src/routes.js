import VueRouter from "vue-router"  
import Reason from './pages/Reason'
import Items from './pages/Items'
import Image from './pages/Image'
import MoreImages from './pages/MoreImages'

// const Cars = resolve => {
//     require.ensure(['./pages/Cars.vue'], () => {
//         resolve(
//             require('./pages/Cars.vue')
//         )
//     })
// }

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Reason     
          },
        {
            path: '/items',
            component: Items
        },
        {
            path: '/image',
            component: Image
        },
        {
            path: '/more',
            component: MoreImages
        }
    ],
    mode: 'history' 
})