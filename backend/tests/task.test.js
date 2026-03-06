const request = require('supertest');
const app = require('../src/app');

describe('Basic API tests', () => {
  it('should return 404 for invalid route', async () => {
    const res = await request(app).get('/invalid');
    expect(res.statusCode).toBe(404);
  });
});
