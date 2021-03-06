import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from './input.vue';
import Row from './row.vue';
import Col from './col.vue';
import Header from './header.vue';
import Content from './content.vue';
import Sider from './sider.vue';
import Layout from './layout.vue';
import Footer from './footer.vue';
import Toast from './toast.vue';
import plugin from './plugin.js';
import Tabs from './tabs.vue';
import TabsHead from './tabs-head.vue';
import TabsBody from './tabs-body.vue';
import TabsItem from './tabs-item.vue';
import TabsPane from './tabs-pane.vue';
import Popover from './popover.vue';
import Collapse from './collapse.vue';
import CollapseItem from './collapse-item.vue';


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-sider',Sider)
Vue.component('g-layout',Layout)
Vue.component('g-footer',Footer)
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.use(plugin)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
        selectedTab:'sports',
        selectedTab1:['2','1'],
    },
    created(){

    },
    methods:{
        inputChange(e){
            console.log(e.target.value);   
        },
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(position){
            this.$toast(`你的智商为 ${parseInt(Math.random() * 100)}需要充值!`, {
                position,
                enableHtml:false,
                closeButton:{
                    text:'关闭',
                    callback (){
                        console.log('他说已经充值了')
                    }
                },
                autoClose:3,
            })
        }
    }
})


//单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// import { version } from 'punycode';
// chai.use(spies)
// const expect = chai.expect
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:'thumbs-up'
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-thumbs-up')
//     vm.$el.remove()
//     vm.$destroy()
// }

// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:'setting',
//             loading:true
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
// } 

// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:'setting',
//             loading:true
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
// } 

// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:'setting',
//             loading:true,
//             iconPosition:'right'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// } 

// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:'setting'
//         }
//     })
//     vm.$mount()
//     let spy = chai.spy(function(){})
//     vm.$on('click',spy)
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()

// }
