import axios from 'axios';

const state = {
    lists: [],
    skip: 0,
    singleList:{}
};

const getters = {};

const mutations = {
    getLists(state,payload){
        state.skip += 3
        state.lists = state.lists.concat(payload.res)
    },
    getSingleList(state,payload){
        state.singleList = payload.res
    }
}

const actions = {
    getLists({commit,state}){
        axios.get('/apis/event/list?loc=108288&count=3&start=' + state.skip )
        /**
         *   从第0条开始取  每次多取三条
         */
        .then(function(res){
            commit({
                type: "getLists",
                res: res.data.events
            })
        })
    },

    getSingleList({commit,state},payload){
        /**
         *    playload对象在详情页路由参数赋值给id并触发
         */
        axios.get('/apis/event/'+ payload.id)
        .then(function(res){
            commit({
                type: "getSingleList",
                res: res.data
            })
        })
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
