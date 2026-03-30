const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return Hello, DevOps World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, DevOps World!');
  });
});
