# Skeleton project for Swagger

## Setup

If you want to attempt swagger-node quickly, run following code on terminal:

``` bash
$ cd test
$ npm install
```

Instead you want to create own project, run following code on terminal:

```
swagger project create your-project
```

## Running API Server

``` bash
# on ./test

$ npm start
```

Then, it is printed message on terminal.  
Please attempt the message on terminal and check result:

```
$ curl http://127.0.0.1:10010/hello?name=Scott

# result
"Hello, Scott!"
```

### View doc

Please access to next: `http://localhost:10010/docs/`

### Try Ajax

Try Ajax with the fetch method of chrome.  
Open `http://localhost:10010/docs/` with the chrome and enter following code on the console.

``` javascript
fetch("/hello?name=foooooooo")
  .then(res => res.json())
  .then(console.log);
```

result: `Hello, foooooooo`

## Running Swagger's editor

``` bash
# on ./test

$ npx swagger project edit
```

Waiting a few, the editor will open automatically.

## How do write `swagger.yaml`?

- [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md)
- [SwaggerでRESTful APIの管理を楽にする - from Qiita](https://qiita.com/disc99/items/37228f5d687ad2969aa2#%E3%83%88%E3%83%83%E3%83%97%E3%83%80%E3%82%A6%E3%83%B3%E5%BD%A2%E5%BC%8F-1)

## Implement API

To Implement API is just two steps.  

First, edit `api/swagger/swagger.yaml` on Swagger editor or your favorite editor.  
Second, add a controller into `api/swagger/controllers` and define the response data.  
