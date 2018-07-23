<template>
    <div>
        <div class="top">
            <p>热销商品</p>
        </div>
        <div class="recom" v-for="(item,index) of recoms" :key="index">
            <div class="recom-img-div">
                <img class="recom-img" :src="item.pic"/>
            </div>
            <div class="recom-text">
                <div class="recom-title">{{item.title}}</div>
                <div class="recom-desc">{{item.desc}}</div>
                <div class="recom-money"><span>💰</span>{{item.money}}<span class="recom-money-qi">起</span></div>
            </div>
        </div>
        <div class="bottem">
            <span>查看所有产品</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
        recoms:[
            {
                title:'兵马俑、华清宫、明城墙、华山、大明宫双飞4日3晚深度游',
                pic:'http://pic.lvmama.com/pics//uploads/pc/place2/2017-12-21/08571fe8-240f-4034-a39c-3496e741f189.jpg',
                money:'2862',
                desc:'[暑期特惠]纯玩0购物、全程不换车导，全程入住高端酒店，特赠登山暖心礼包，赠接送机，华山超长游览6小时'
            },
            {
                title:'兵马俑、华清宫、法门寺、陕历博双飞5日跟团游',
                pic:'http://pic.lvmama.com/pics//uploads/pc/place2/2018-02-14/0c6ea034-125c-4173-87f7-6a2f31280c12.jpg',
                money:'2580',
                desc:'[7月31日前团期买2大送1小，赠送不含机票]半自助游 悦享西安、观法门舍利、赠法门寺抄经、优选H水晶酒店、24小时专车接送'
            },
            {
                title:'兵马俑、华清池、华山、明城墙、大明宫双飞4日3晚深度游',
                pic:'http://pic.lvmama.com/pics//uploads/pc/place2/2018-03-01/fba9a1d2-8961-4f5d-9a9a-95fa66060e83.jpg',
                money:'2460',
                desc:'纯玩零购物、全程品质酒店住宿、升级一晚入住温德姆酒店＋赠接送机服务＋出游即送皮影伴手礼！'
            },
            {
                title:'西安兵马俑、华清池、乾陵、法门寺双飞4日3晚半自助游',
                pic:'http://pic.lvmama.com/pics//uploads/pc/place2/2018-01-10/c5ce7234-c98b-4695-8797-a770e589aa47.jpg',
                money:'2840',
                desc:'双人下单立减600、观壶口桃花汛、授红色纪念章、1人也专车接送机、西安品质住宿拒绝快捷、管家式服务全程无忧'
            },
            {
                title:'黄帝陵、壶口瀑布、兵马俑、华清宫双飞5日4晚跟团游',
                pic:'http://pic.lvmama.com/pics//uploads/pc/place2/2018-06-04/c890b5ab-13e3-4ed4-bcf8-bc2337ec26e8.jpg',
                money:'2290',
                desc:'[参与式美食系列]品地道特色美食、特别增加互动环节、赠送陕西特色大礼包，接送机服务，景区无线耳麦讲解'
            }
        ]
    };
  }
};
</script>

<style scoped lang="stylus">
.top {
    background-color: #ECEBEC;
    font-size: 0.13rem;
    line-height: 0.30rem;
    padding-left: 0.1rem;
    display: block;
    height: 0.3rem;
}
.bottem{
    font-size 0.15rem
    display block
    height 0.44rem
    text-align center
    line-height 0.44rem
    color #93BBBD
}
.recom {
    display: flex;
    margin-top 0.1rem
    border-style: solid;
    border-bottom-width: 1px
    border-bottom-color: #ECEBEC
    border-top-width: 0px;
    border-right-width: 0px;
    border-left-width: 0px;
    padding-bottom 0.1rem
    .recom-img-div {
        flex: 0.5;
        overflow: hidden;
        display: block;
        .recom-img {
            width: 100%;
        }
    }

    .recom-text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        flex: 1;
        margin-left: 0.1rem;
    }

    .recom-title {
        padding-top: 0.10rem;
        font-size: 0.18rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: bold;
    }

    .recom-desc {
        padding-top: 0.10rem;
        color: #ECEBEC;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.1rem;
    }

    .recom-money {
        padding-top: 0.10rem;
        color: orange;
        font-size: 0.18rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .recom-money-qi {
            color: #ECEBEC;
            font-size: 0.1rem;
        }
    }
}
</style>
