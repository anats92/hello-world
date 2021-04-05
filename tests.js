var expect  = require('chai').expect;
var request = require('request');

describe('Status and content', function() {
    describe ('test custom name', function() {
        it('status', function(done){
            request('https://hello-world-anat.herokuapp.com/?name=abc', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Hello abc');
                done();
            });
        });
    });

describe ('test default value - no name param', function() {
        it('status', function(done){
            request('https://hello-world-anat.herokuapp.com/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Hello World');
                done();
            });
        });
    });

describe ('test default value - empty name', function() {
        it('status', function(done){
            request('https://hello-world-anat.herokuapp.com/?name=', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Hello World');
                done();
            });
        });
    });
});
