var http = require('http')
var headers = http.connect()

var itemId = 1
var secondItemId = 2

var response = utils.doHttpRequest(http.API_ROOT_URL + '/item' + itemId + "/children", 'GET', headers, null, {});
var itemOneChildren = JSON.parse(response.body);
assertArray(itemOneChildren);
assertEqual(0, itemOneChildren.length, "item one should have no children");

var response = utils.doHttpRequest(http.API_ROOT_URL + '/item' + secondItemId + "/children", 'GET', headers, null, {});
var itemTwoChildren = JSON.parse(response.body)
assertArray(itemTwoChildren);
assertEqual(1, itemTwoChildren.length, "item two should have one child");
