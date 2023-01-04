# deno-react-ssr-hello-world
A simple React SSR hello world in Deno

## Running the app
To run the app, use the following command:

```console
> deno task start
Task start deno run --allow-net=:3000 --unstable server.tsx
Listening on http://127.0.0.1:3000/
```

To test it out, open the browser or use curl:

```console
> curl http://localhost:3000 -v
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.86.0
> Accept: */*
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Date: Wed, 04 Jan 2023 00:17:34 GMT
< Content-Type: text/html
< Cache-Control: no-transform
< Transfer-Encoding: chunked
< 
* Connection #0 to host localhost left intact
<!DOCTYPE html><html><body><h1>Hello World</h1><p>This is an example.</p></body></html>
```
