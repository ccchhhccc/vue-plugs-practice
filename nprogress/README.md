# nprogress  浏览器进度条

### install nprogress
```js
npm install nprogress --save
```

### import nprogress.css  &&  cover nprogress.css
```js
import 'nprogress/nprogress.css' //nprogress自带样式
import './assets/nprogress.css' //使用自己的样式
```

### nprogress demo
```js
import NProgress from "nprogress";
import $ from "jquery";

getCarousels(){
    NProgress.start();
    $.ajax({
        type: "post",
        url: "http://118.24.4.133:2255/admin/carousels",
        success: function(data) {
            NProgress.done();
        }
    });
}   
```

