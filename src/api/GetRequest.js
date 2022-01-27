import axios from 'axios';

class GetRequest{
    message;
    executeHelloWorldService(){
        return axios.get("http://localhost:8081/hello/pradeep");
    }
}

export default new GetRequest()