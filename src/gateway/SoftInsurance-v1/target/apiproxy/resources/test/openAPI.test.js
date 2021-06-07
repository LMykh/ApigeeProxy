// Import this plugin
//require jestOpenAPI from 'jest-openapi';
const jestOpenAPI = require('jest-openapi');
const axios = require('axios')
// Load an OpenAPI file (YAML or JSON) into this plugin



jestOpenAPI('C:/Dev/SI/SoftInsurance/src/gateway/SoftInsurance-v1/target/apiproxy/resources/test/OpenAPIspec/openapi.yml');

// Write your test
describe('GET /catalog/products', () => {
  it('should satisfy OpenAPI spec', async () => {
    // Get an HTTP response from your server (e.g. using axios)
    const res = await axios.get('https://lohachovmikhail-eval-test.apigee.net/softinsurance/v2/catalog/products',
    {
      headers: { apikey: "DXZnoURlboSeJ5s6dzKeshz73iWVqEXF" }
    });



    expect(res.status).toEqual(200);

    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec();
  });
});