import TokenService from './token-service'
import config from '../config'

const FlyerApiService = {
    getAllData(){
    return Promise.all(
        [
          fetch(`${config.API_ENDPOINT}/users`, {
              headers: {
                  'authorization': `bearer ${TokenService.getAuthToken()}`,
              }
          }),
          fetch(`${config.API_ENDPOINT}/children`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        }),
          fetch(`${config.API_ENDPOINT}/flyers`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        }),
          fetch(`${config.API_ENDPOINT}/flyers_children`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        }),
          fetch(`${config.API_ENDPOINT}/categories`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
        ]
      ).then(([userRes, childreRes, flyersRes, flyers_childrenRes, categoriesRes]) => {
        if(!userRes.ok) {
          return userRes.json().then(e => Promise.reject(e));
        }
        if(!childreRes.ok) {
          return childreRes.json().then(e => Promise.reject(e));
        }
        if(!flyersRes.ok) {
          return flyersRes.json().then(e => Promise.reject(e));
        }
        if(!flyers_childrenRes.ok) {
          return flyers_childrenRes.json().then(e => Promise.reject(e));
        }
        if(!categoriesRes.ok) {
          return categoriesRes.json().then(e => Promise.reject(e));
        }
        return Promise.all([userRes.json(), childreRes.json(), flyersRes.json(), flyers_childrenRes.json(), categoriesRes.json()]);
      })
    },
    getFlyersChildrenByFlyerId(flyerId){
        return fetch(`${config.API_ENDPOINT}/flyers_children/flyer/${flyerId}`,{
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            }})
            .then((res) =>{
                
                if(!res.ok){
                    throw new Error(res.status)
                 }
                 return res.json
            })
    },
    postCategory(category){
        return fetch(`${config.API_ENDPOINT}/categories`,{
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(category),
        })
        .then(res => {
          if(!res.ok) {
            throw new Error(res.status)
          }
          return res.json()
        })
        .catch((err) => console.log(err))
    },
    postOrPatchFlyer(url, fetchMethod, flyer){
        return fetch(url,{
            method: fetchMethod,
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(flyer),
        })
    },
    postFlyersChildren(flyerChild){
        return fetch(`${config.API_ENDPOINT}/flyers_children`,{
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(flyerChild),
        })
        .then(res => {
          if(!res.ok) {
            throw new Error(res.status)
          }

          return res.json()
        })
        .catch((err)=>console.error(err))
    },
    postUser(user){
        return fetch(`${config.API_ENDPOINT}/users`,{
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error(res.status)
            }
            res.json()

        })
    },
    postChild(child){
        return fetch(`${config.API_ENDPOINT}/children`,{
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(child),
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error(res.status)
            }
            res.json()

        })
    }
}

export default FlyerApiService