import axios from 'axios'
// import 'whatwg-fetch'
// import qs from "qs"

const serverRequest = (method, url, params, downloadFile = false) => {
  return new Promise((resolve, reject) => {
    try{
      let requestInfo = {
        method: method,
        url: url,
        baseURL: "https://api.thip.com.br",
        headers: {
          "Content-Type": 'application/x-www-form-urlencoded',
        }
      }

      let content = {...params}
      if(method === "get") requestInfo.params = content
      else requestInfo.data = content
      
      axios(requestInfo)
      .then(res => { 
        if(res.data.error) reject(new Error(res.data.error))
        else resolve(res.data) 
      })
      .catch((err) => { 
        reject(new Error((err.response && err.response.data && err.response.data.error) || err.message)) 
      })
    }catch(err){
      reject(err)
    }
  })

//   let resource =
//     user && Auth.user.resources
//       ? Auth.user.resources.find(item => {
//           return item.url === url;
//         })
//       : "";

//   const requestInfo = {
//     method: method,
//     mode: "cors",
//     cache: "default"
//   };

//   if (resource) {
//     requestInfo.headers = {
//       resourceid: resource.id
//     };
//   }

//   let requestParams;
//   //If not string expects object
//   if (isString(params)) {
//     requestParams = encodeURI(params).replace(/\+/g, "%2B");
//   } else {
//     requestParams = qs.stringify(params);
//   }

//   switch (method) {
//     case "POST":
//     case "PATCH":
//     case "PUT":
//       requestInfo.headers = {
//         ...requestInfo.headers,
//         "Content-Type": "application/x-www-form-urlencoded"
//       };
//       requestInfo.body = requestParams;
//       break;
//     case "GET":
//       if (requestParams) {
//         url = url + "?" + requestParams;
//       }
//       break;
//     case "DELETE":
//       break;
//     default:
//       break;
//   }

//   if (user) {
//     requestInfo.headers = {
//       ...requestInfo.headers,
//       Authorization: "Bearer " + (user.oauth || user.oauth_token)
//     };
//   }

//   let myRequest = new Request(
//     url.includes("http") ? url : process.env.REACT_APP_SERVER_URL + url,
//     requestInfo
//   );

//   if (!downloadFile) {
//     return fetch(myRequest).then(response => {
//       var contentType = response.headers.get("content-type");
//       if (contentType && contentType.includes("application/json")) {
//         return response.json();
//       }
//       throw new TypeError("Falha interna!");
//     });
//   } else {
//     window.open(process.env.REACT_APP_SERVER_URL + url);
//   }
}

// function isString(val) {
//   return typeof val === "string";
// }

export default serverRequest;
