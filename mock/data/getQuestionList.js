const Mock = require("mockjs");

const Random = Mock.Random;

function getQuestionList(opt = {}) {
    const {len = 10,isDeleted = true,isStar = true} = opt
    const list = []

    for(let i = 0;i < len;i++) {
        list.push({
            _id:Random.id(),
            title:Random.ctitle(),
            isStar,
            createAt:Random.datetime(),
            answerCount:Random.natural(50,100),
            isPublished:Random.boolean(),
            isDeleted

        })
    }
    return list
}

module.exports = getQuestionList;
