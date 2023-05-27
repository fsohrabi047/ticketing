import request from 'supertest';

import { app } from "../../app";

it('returns a 201 on successful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(201);
});

it('Invalid email returns 400', function () {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test',
            password: 'password'
        })
        .expect(400);
});

it('Invalid password returns 400', function () {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: 'test',
            password: 'p'
        })
        .expect(400);
});

it('Missing email and password returns 400', function () {
    return request(app)
        .post('/api/users/signup')
        .send({})
        .expect(400);
});

it('disallowed duplicate email', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 't@t.com',
            password: 'asdfg'
        })
        .expect(201);

    await request(app)
    .post('/api/users/signup')
    .send({
        email: 't@t.com',
        password: 'asdfg'
    })
    .expect(400)
});

it('sets a cookie after successful signup', async () => {
    const response = await request(app)
      .post('/api/users/signup')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .expect(201);
  
    expect(response.get('Set-Cookie')).toBeDefined();
  });