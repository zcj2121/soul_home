
> 用 vue 写小程序，使用 mpvue 框架重写 WeUI。

### 踩坑文档

[记录了踩的一些坑和一些组件在 `mpvue` 框架中的用法](https://kuangpf.github.io/mpvue-weui/#/)


### WeUI

由于是小程序，所以首先想到了实现一下小程序的一些组件，包括 button、loading、picker 等等。总的效果就像[weui](https://weui.io/)，或者说用 vue 重写[weui](https://weui.io/)。

### 开发预览

``` bash
1. git clone
git clone git@github.com:zcj2121/soul_home.git

2. 安装依赖
npm install (cnpm install)

3. 启动程序
npm run dev

4. 预览
打开微信开发者工具，新建项目，将目录指向 /dist 即可

```
### 效果


### 重写状态


<details>
<summary>点击展开重写状态</summary>

#### 表单
- [x] Button
- [x] Input
- [x] List
- [x] Slider
- [x] Uploader

#### 基础组件
- [x] Article
- [x] Badge
- [x] Flex
- [x] Footer
- [x] Gallery
- [x] Grid
- [x] Icons
- [x] Loadmore
- [x] Panel
- [x] Preview
- [x] Progress
- [x] Swiper

#### 操作反馈
- [x] Actionsheet
- [x] Dialog
- [x] Msg
- [x] Picker
- [x] Toast

#### 导航相关
- [x] Navbar
- [x] Tabbar

#### 搜索相关
- [x] Searchbar

#### Issues 相关
- [x] Request
- [x] 页面通信（Vuex 实现）
- [x] Rate

</details>