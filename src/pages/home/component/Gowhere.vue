<template>
    <div>
        <div class="top">
            <p>周末去哪儿</p>
        </div>
        <div class="recom" v-for="(item,index) of list" :key="index">
            <div class="recom-img-div">
                <img class="recom-img" :src="item.pic"/>
            </div>
            <div class="recom-text">
                <div class="recom-title">{{item.title}}</div>
                <div class="recom-desc">{{item.desc}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Gowhere',
    data(){
        return{
            list:[
                {
                    title:'【玩转长隆】长隆双飞5日4晚自由行',
                    desc:'[广进珠出]2晚广州长隆熊猫酒店，含2晚珠海长隆企鹅酒店，轻松长隆，两地连游（需提前预约广州珠海免费巴士）',
                    pic:'http://pic.lvmama.com/pics//uploads/pc/place2/2017-07-14/2b8adf41-792b-43d4-a494-f4b8994628e4.jpg'
                },
                {
                    title:'【畅玩花城】广州双飞4日3晚自由行',
                    desc:'住柏曼酒店（广州番禺长隆北门店）（原美瓷酒店），悠享长隆奇妙之旅',
                    pic:'http://pic.lvmama.com/pics//uploads/pc/place2/2016-08-08/e41cc7b6-697b-4b4e-849d-ec0e6bab5773.jpg'
                },
                {
                    title:'【享专车接机】广州长隆双飞4日3晚自由行',
                    desc:'住广州长隆酒店3晚，含野生动物世界成人门票',
                    pic:'http://pic.lvmama.com/pics//uploads/pc/place2/2017-06-16/98068276-4c29-47bd-84cb-8ab6696f3c33.jpg'
                },
                {
                    title:'【趣玩长隆】珠海长隆双飞3日2晚自由行',
                    desc:'2晚企鹅酒店温带房，含马戏表演，海洋王国两日进出票，含入住次日自助午餐',
                    pic:'http://pic.lvmama.com/pics//uploads/pc/place2/2018-03-09/fa177265-449f-4c25-926e-c65fec73787d.jpg'
                },
                {
                    title:'【奢享亲子】珠海双飞5日4晚自由行',
                    desc:'宿珠海长隆横琴湾酒店4晚，机票随心配',
                    pic:'http://pic.lvmama.com/pics//uploads/pc/place2/2016-02-26/6022808f-2a32-4358-a88a-f0e67ec28caf.jpg'
                }
            ]
        }
    }
}
</script>

<style scoped lang='stylus'>
.top {
    background-color: #ECEBEC;
    font-size: 0.13rem;
    line-height: 0.30rem;
    padding-left: 0.1rem;
    display: block;
    height: 0.3rem;
}
.recom
    overflow hidden
    .recom-img-div
        width 100%
        height 2rem
        min-width 0
        .recom-img
            width 100%
            height 2rem
    .recom-text
        .recom-title
            padding-top 0.1rem
            font-size 0.2rem
            font-weight bold
            text-align left 
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        .recom-desc 
            padding-top 0.1rem
            font-size 0.1rem
            text-align left 
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-left 0.12rem
            padding-bottom 0.1rem

</style>
