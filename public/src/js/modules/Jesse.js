
async function get_json(){
    return fetch(window.location.href+'/api/dashboard')
    .then((response)=>response.json())
    .then((responseJson)=>{return responseJson});
}

export default get_json;