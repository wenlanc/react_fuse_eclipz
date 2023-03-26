import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const isLocalhost = Boolean(
	window.location.hostname === 'localhost' ||
		// [::1] is the IPv6 localhost address.
		window.location.hostname === '[::1]' ||
		// 127.0.0.1/8 is considered localhost for IPv4.
		window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
let axiosInstance;
if(isLocalhost)
{ 
    axios.defaults.baseURL = "http://127.0.0.1:5183/api"; // https://nodeserver.mdt.washim.net/api
     axiosInstance =  axios.create({
      baseURL: "http://127.0.0.1:5183/api",
      //headers: {'Authorization': 'null'}
    });

} else {
    axios.defaults.baseURL = "https://nodeserver.mdt.washim.net/api"; // https://nodeserver.mdt.washim.net/api
    axiosInstance = axios.create({
      baseURL: "https://nodeserver.mdt.washim.net/api",
     //headers: {'Authorization': 'null'}
    });
}



export default axiosInstance;