# Src目录现阶段说明

> # assets
### 主要用于存放公共的css img  scss 
```
注意： scss子目录下是存放公共的common css样式 
       _common.scss内包括 header和footer的样式

       scss/scssBypages下存放的是每个page的scss
       每个page单独一个文件夹
```

> # components
### 主要用于存放复用多次的组件 例如 header 和 footer

```
注意：每个组件单独一个文件夹
```

> # pages
### 主要用于存放路由获取的router-view的vue文件

```
注意：每个路由分支单独一个文件夹
     每个路由分支都有一个index.vue是用于主输出
     每个路由下的/subpages文件夹是存放每个路由分支的子页面的vue文件
```

> # router
### 主要用于存放每个路由分支的router方法的js文件

```
注意：所有router都将从index.js里new出来
     此目录下修改注意大小写
```

## 子贤