const { test, expect } = require('@playwright/test');

test.describe('API Testing Suite - ReqRes API', () => {

    const BASE_URL = 'https://reqres.in/api';

    test('GET / users - Deberia retornar lista de usuarios y status 200', async ({ request}) => {
        const response = await request.get(`${BASE_URL}/users?page=2`);

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.page).toBe(2);
        expect(responseBody.data.length).toBeGreaterThan(0);
        expect(responseBody.data[0]).toHaveProperty('email');

    });

    test('POST / users - Deberia crear un usuario exitosamente  y retornar status 201', async ({request}) => {
        const newUser = {
            name: 'Javier Solis',
            job: 'QA Automation Engineer'
        };

        const response = await request.post(`${BASE_URL}/users`, {
        data: newUser});

        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody.name).toBe(newUser.name);
        expect(responseBody.job).toBe(newUser.job);
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('createdAt');
    })

})