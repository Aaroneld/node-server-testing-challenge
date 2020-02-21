const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {

    describe('index route', () => {
        it("get should return 200 status", async () => {
            const getRes = await request(server).get('/');

            expect(getRes.status).toEqual(200);
            
        })
        it("get should return an object", async () => {
            const getRes = await request(server).get('/');

            expect(typeof(getRes.body)).toBe('object')
            
        })
        it("post should return 201 status", async () => {

            random = Math.random().toString();
            const postRes = await request(server)
                .post('/')
                .send({person: random, swole: true})
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
            
        })
        it("post should return an object", async () => {
            const postRes = await request(server)
            .post('/')
            .send({person: "adsadas", swole: true})
            .set('Accept', 'application/json')

            expect(typeof(postRes.body)).toBe('object')
            
        })
        it("put should return 201 status", async () => {
            const getRes = await request(server).put('/1')  
            .set('Accept', 'application/json')
            .send({person: "adsauggys", swole: true})  
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201);
            
        })
        it("put should return an object", async () => {
            const putRes = await request(server)
            .post('/')
            .send({person: "adsadas", swole: true})
            .set('Accept', 'application/json')

            expect(typeof(putRes.body)).toBe('object')
            
        })
        it("delete should return 204 status", async () => {
            const deleteRes = await request(server).delete('/1')    
            

            expect(deleteRes.status).toEqual(204);
            
            
        })
        it("delete should return an object", async () => {
            const deleteRes = await request(server).delete('/3');

            expect(typeof(deleteRes.body)).toBe('object')
            
        })
    })
})