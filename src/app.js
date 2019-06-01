import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
    }
})


//单元测试
import chai from 'chai'
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'thumbs-up'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-thumbs-up')
    button.$el.remove()
    button.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
} 

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy()
} 

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading:true,
            iconPosition:'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
} 

{
    const Constructor = Vue.extend(Button)
    const gButton = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    gButton.$mount()


}
