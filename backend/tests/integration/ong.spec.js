const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach(async () => {
        //zerando o banco de dados
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('shold be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            // .set('authorization', "sjasfsda") para adicionar parametros de HEADER
            .send({
                name: "APAE",
                email: "contato@apad.com.br",
                whatsapp: "4700000000",
                city: "Rio Grande do Sul",
                uf: "SC"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});