import axios from 'axios';

const state = {
    hotMovies: [],
    newMovies: [],
    topMovies: [],
    singleMovie:{},
    movieTags: [
        {
            title: '同时入选IMDB250和豆瓣电影250的电影',
            href: 'https://m.douban.com/doulist/968362/',
            color: '#FFAC2D'
        },
        {
            title: '带你进入不正常的世界',
            href: 'https://m.douban.com/doulist/16002',
            color: '#FF4055'
        },
        {
            title: '用电【影】来祭奠逝去的岁月',
            href: 'https://m.douban.com/doulist/190343',
            color: '#4F9DED'
        },
        {
            title: '女孩们的故事【电影】',
            href: 'https://m.douban.com/doulist/1125971',
            color: '#FFC46C'
        },
        {
            line: true
        },
        {
            title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
            href: 'https://m.douban.com/doulist/4253902',
            color: '#2384E8'
        },
        {
            title: '美国生活面面观',
            href: 'https://m.douban.com/doulist/121326',
            color: '#3BA94D'
        },
        {
            title: '2015终极期待',
            href: 'https://m.douban.com/doulist/37479562',
            color: '#42BD56'
        },
        {
            title: '经典韩国电影——收集100部',
            href: 'https://m.douban.com/doulist/458087',
            color: '#CC3344'
        }
    ],    
    movieTypes:{
        baseUri: 'https://m.douban.com/',
        items: [
            {
                title: '经典',
                href: 'movie/classic'
            },
            {
                title: '冷门佳片',
                href: 'movie/underrated'
            },
            {
                title: '豆瓣高分',
                href: 'movie/doubantop'
            },
            {
                title: '动作',
                href: 'movie/action'
            },
            {
                title: '喜剧',
                href: 'movie/comedy'
            },
            {
                title: '爱情',
                href: 'movie/love'
            },
            {
                title: '悬疑',
                href: 'movie/mystery'
            },
            {
                title: '恐怖',
                href: 'movie/horror'
            },
            {
                title: '科幻',
                href: 'movie/scifi'
            },
            {
                title: '治愈',
                href: 'movie/sweet'
            },
            {
                title: '文艺',
                href: 'movie/artfilm'
            },
            {
                title: '成长',
                href: 'movie/youth'
            },
            {
                title: '动画',
                href: 'movie/animation'
            },
            {
                title: '华语',
                href: 'movie/chinese'
            },
            {
                title: '欧美',
                href: 'movie/western'
            },
            {
                title: '韩国',
                href: 'movie/korean'
            },
            {
                title: '日本',
                href: 'movie/japanese'
            }
        ]
    }
}

const getters = {
    kind:state => {
        return  state.singleMovie.year + ' / ' +
                state.singleMovie.genres.join(' / ') + ' / ' +
                state.singleMovie.casts.map(item => item.name).join(' / ') + ' / ' +
                state.singleMovie.directors.map(item => item.name).join(' / ') + ' / ' +
                state.singleMovie.countries.join(' / ')
    }
};

const mutations = {
    getMovie(state,payload){
        switch(payload.tag){
            case 'hotMovies':state.hotMovies = payload.res
            break;

            case 'newMovies': state.newMovies = payload.res
            break;
            
            case 'topMovies':state.topMovies = payload.res
            break;

            default:
                state.hotMovies = payload.res 
        }
    },
    getSingleMovie(state,payload){
        state.singleMovie = payload.res
    }
};

const actions = {
    getMovie({ commit }){
        axios.get('/apis/movie/in_theaters?count=8')
        .then(function(res){
            commit({
                type: 'getMovie',
                tag: 'hotMovies',
                res: res.data.subjects
            })
        }).catch(function(err){
            console.log(err)
        })

        axios.get('/apis/movie/coming_soon?count=8')
        .then(function(res){
            commit({
                type: 'getMovie',
                tag: 'newMovies',
                res: res.data.subjects
            })
        }).catch(function(err){
            console.log(err)
        })

        axios.get('/apis/movie/top250?count=8')
        .then(function(res){
            commit({
                type: 'getMovie',
                tag: 'topMovies',
                res: res.data.subjects
            })
        }).catch(function(err){
            console.log(err)
        })
    },
    getSingleMovie({ commit },payload){
        axios.get('apis/movie/subject/' + payload.id)
        .then(function(res){
            commit({
                type: 'getSingleMovie',
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