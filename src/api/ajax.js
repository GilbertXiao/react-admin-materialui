import axios from 'axios'


axios.interceptors.response.use(success => {
    if (success.status && success.status == 200 && success.data.status == 500) {
     
        return;
    }
    if (success.data.msg) {
     
    }
    return success.data;
}, error => {
    if (error.response.status == 504 || error.response.status == 404) {
    } else if (error.response.status == 403) {
    } else if (error.response.status == 401) {
    } else {
        if (error.response.data.msg) {
        } else {
        }
    }
    return;
})

const baseUrl = '';

export const postKeyValueRequest = (url, params,base=baseUrl) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let i in data) {
                ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}
export const postRequest = (url, params,base=baseUrl) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
}

export const postFileRequest = (url, params,base=baseUrl) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        header:{
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const putRequest = (url, params,base=baseUrl) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params
    })
}
export const getRequest = (url, params,base=baseUrl) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params
    })
}
export const deleteRequest = (url, params,base=baseUrl) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params
    })
}
