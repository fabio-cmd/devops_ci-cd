const request = require('supertest');
const { app, server } = require('./app');

describe('GET /', () => {
    it('should return Projeto Rodando!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Projeto Rodando!');
    });

    afterAll(() => {
        server.close();
    });
});
