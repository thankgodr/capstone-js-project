import NetWorkRequest from "../network_request";

export default class GetMeals{
    constructor(){
        this.networkRequest = new NetWorkRequest("https://www.themealdb.com/")
    }

    fetch(){
        return this.networkRequest.getBase("api/json/v1/1/search.php?f=b", true)
    }
}