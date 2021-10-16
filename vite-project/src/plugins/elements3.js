// 全局引入
// import element3 from 'element3';
// import 'element3/lib/theme-chalk/index.css'


// 按需
import {
    ElButton
} from 'element3'
import 'element3/lib/theme-chalk/button.css'
export default function (app) {
    // app.use(element3)
    app.use(ElButton)
}