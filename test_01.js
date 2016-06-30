var https_client = require("./https_client.js");

var GithubAPIClient = new https_client("api.github.com");
var GithubUsers = GithubAPIClient.path("/users");
var GithubSearch = GithubAPIClient.path("/search/repositories");

GithubUsers.get("jorgevgut");
GithubSearch.get("?q=user:jorgevgut");
GithubAPIClient.path("users/jorgevgut/repos").get();

var userList = ["user1", "user2", "user3"];
userList.forEach(function (user) { GithubUsers.get(user);});
