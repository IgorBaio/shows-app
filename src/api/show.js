import axios from "axios";

export default axios.create({
    baseURL:"http://00594ae4d15a.ngrok.io",
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsInBhc3N3b3JkIjoidGVzdGUiLCJpYXQiOjE1OTY4NTE1ODAsImV4cCI6MTU5Njg2OTU4MH0.TJ2VjHIi55N4vcfIMAPizLTJToCIdC8MQmTFtp5kx5I"
    }

});
