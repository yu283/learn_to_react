import axios from "axios";

axios.defaults.baseURL = "https://httpbin.org"
axios.defaults.timeout = 5000
axios.defaults.headers.common["token"] = 'asasas'
// axios.defaults.headers.post["Content-Type"] = 'application/text'

export default axios
