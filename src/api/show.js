import axios from "axios";

export default axios.create({
    baseURL:" http://de0386e91ae3.ngrok.io",
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsInBhc3N3b3JkIjoidGVzdGUiLCJpYXQiOjE1OTY5MzEwNjEsImV4cCI6MTU5Njk0OTA2MX0.EQtBl61_QldHMUFyLNGB4EZNrvkld0LXWlpi9yKKOas"
    }

});
