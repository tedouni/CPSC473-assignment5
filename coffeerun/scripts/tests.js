//For first part Figure 8.10
//getAll() requires deepEqual versus equal due to Object
QUnit.test('DataStore', function(assert) {
    var ds = new App.DataStore();


    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');

    assert.deepEqual(ds.getAll(), {
        "james@bond.com": "eshpressho",
        "m@bond.com": "tea"
    });
    //assert.equal(ds.get('m@bond.com'), 'tea');
    //assert.equal(ds.get('james@bond.com'), 'eshpressho');


    ds.remove('james@bond.com');

    assert.deepEqual(ds.getAll(), {
        "m@bond.com": "tea"
    });

    assert.equal(ds.get('m@bond.com'), 'tea');
    assert.equal(ds.get('james@bond.com'), undefined);

});

QUnit.test('DataStore', function(assert) {

    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });
    myTruck.createOrder({
        emailAddress: 'm@bond.com',
        coffee: 'earl grey'
    });
    myTruck.printOrders();
    myTruck.deliverOrder('dr@no.com');
    myTruck.deliverOrder('m@bond.com');
    myTruck.printOrders();

});
