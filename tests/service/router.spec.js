const superagent = require('supertest');
const app = require('./app');

function requset() {
    return superagent(app.listen());
}

describe("接口测试脚本", function () {
    it("API测试", function (done) { // done 是mocha提供的
        requset()
            .get('/')
            .set('accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    done(err);
                    return;
                }
                if (res.body.data === 'Hello World') {
                    done();
                } else {
                    done(new Error('返回接口'))
                }
            })
    })
})


describe("Node的容错机制", function () {
    it("404脚本错误", function (done) {
        requset()
            .get('/message/notfount')
            .expect("404", done);
    })
})