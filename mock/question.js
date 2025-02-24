
const Mock = require('mockjs')

const Random = Mock.Random

const getQuestionList = require('./data/getQuestionList')

module.exports = [
    {
        //获取单个问卷信息
        url:'/api/question/:id',
        method:'get',
        response() {
            return {
                errno:0,
                data:{
                    id:Random.id(),
                    title:Random.ctitle()
                },
                // msg:'测试'
            }
        }
    },
    {
        //创建问卷
        url:'/api/question',
        method:'post',
        response() {
            return {
                errno:0,
                data:{
                    id:Random.id(),
                    // title:Random.ctitle()
                },
                // msg:'测试'
            }
        }
    },
    {
        //获取问卷列表
        url:'/api/question',
        method:'get',
        response(ctx) {
            const {url = ''} = ctx
            const isDeleted = url.indexOf('isDeleted=true') !== -1
            const isStar = url.indexOf('isStar=true') !== -1
            return {
                errno:0,
                data:{
                    list:getQuestionList({isDeleted,isStar}),
                    total:100
                }
            }
        }
    }
]