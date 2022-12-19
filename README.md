# INFO
- A simple API Discord get random image Genshin Impact. 
- API still developing. **Current Version 1.0** 
- Contribute image - My server: [Click Here!](https://discord.gg/6TZVye2G3E)
- Made with ❤️ GI.
- Thanks for using my API >3
## Developers
- Author: LynCute#2004
- Contributors: ly#5580, Hy#1284 
## Check Logs
- [x] **Created at: 16/02/2022**
- [x] **Updating Ver 1: 16/07/2022**
- [x] **Repulic project: 17/12/2022**
## Contents
- [Information of API (Dev)](#info)
- [Check logs of API](#check-logs)
- [How to get API](#get-api)
- [How to uses as API](#endpoints)

# GET API
> Base URLs: `https://gi-img-api.ak-team.repl.co/`

### Categories

To send a request to the api, you will need a category to specify.

- Method: **GET**
- Path: `/api/genshin`
- Query Parameters: none
- Response:
```js
{"method":"GET","base_url":"https://gi-img-api.ak-team.repl.co/api/genshin/:endpoint","endpoints":"https://gi-img-api.ak-team.repl.co/api/genshin","github":"https://github.com/LynCute2004/Genshin-Impact-Image-API"}
```

### Endpoints

List endpoints: 
- `/character`
- `/cosplay`

Example request:
``` js
// npm install axios
const url = ["https://example.com"]
axios.get(`${url}/api/genshin/:endpoint`)
.then(res => { console.log(res.data.url) })
```

**Previews:**


![image](https://user-images.githubusercontent.com/52123370/178935636-d857b780-6761-4e2e-8f8a-e911bc5592cf.png) ![image](https://user-images.githubusercontent.com/52123370/178936936-f109d4d3-9759-444e-994c-59a128e1b725.png)


