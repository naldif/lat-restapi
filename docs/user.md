# User API Spesification
## Register User API

- Endpont : POST /api/users
- Request Body : 
```json
{
    "name" : "Nito Aldi",
    "email": "nitoaldif@gmail.com",
    "password" : "password"
}
```

- Response Success :

```json
{
    "errors" : null,
    "message": "Aktivasi akun telah dikirim ke email anda",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxx",
            "name": "Nito Aldi",
            "email": "nitoaldif@gmail.com"
        }
    ]
}
```

- Response Error :

```json
{
    "errors" : ["Email harus diisi", "Password harus diisi"],
    "message": "Proses Gagal",
    "data" : null
}
```

## Email Activation Akun

- Endpoint: GET /api/users/:uuid
  link dikirimkan ke email untuk di klik aktivasinya

- Response Success :
```json
{
    "errors" : null,
    "message": "Akun anda telah aktif",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxx",
            "name": "Nito Aldi",
            "email": "nitoaldif@gmail.com"
        }
    ]
}
```
- Response Error :

```json
{
    "errors" : ["Aktivasi sudah expire"],
    "message": "Proses Gagal",
    "data" : null
}
```

## Login user API

- Endpoint: POST /api/users/login
- Requsest Body
```json
{
    "email": "nitoaldif@gmail.com",
    "password" : "password"
}
```
- Response Success :
```json
{
    "errors" : null,
    "message": "Login Berhasil",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxx",
            "name": "Nito Aldi",
            "email": "nitoaldif@gmail.com"
        }
    ],
    "access_token": "xxxxxxxxxxxx",
    "refresh_token": "xxxxxxxxxxxx"
}
```
- Response Error :

```json
{
    "errors" : ["Email atau password salah"],
    "message": "Login Gagal",
    "data" : null
}
```   
## Refresh Token
- Endpoint: POST /api/users/refresh
- Header: Authorization : Bearer <access_token>
- Request Body:
- Response Success :
```json
{
    "errors" : null,
    "message": "Refresh Token Berhasil",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxx",
            "name": "Nito Aldi",
            "email": "nitoaldif@gmail.com"
        }
    ],
    "access_token": "xxxxxxxxxxxx",
    "refresh_token": "xxxxxxxxxxxx"
}
```
- Response Error :

```json
{
    "errors" : ["Token tidak valid"],
    "message": "Refresh token gagal",
    "data" : null
}
```
## Get User API
- Endpoint : GET /api/users/:id
- Header :  Authorization : Bearer <access_token>
- Request Body:
- Response Success :
```json
{
    "errors" : null,
    "message": "Get user Berhasil",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxx",
            "name": "Nito Aldi",
            "email": "nitoaldif@gmail.com"
        }
    ],
}
```
- Response Error :

```json
{
    "errors" : ["User tidak ditemukan"],
    "message": "Get user gagal",
    "data" : null
}
```
## Update User API
- Endpoint : PUT /api/users/:id
- Header :  Authorization : Bearer <access_token>
- Request Body:
```json
{
    "name" : "Nito Aldi",
    "email": "nitoaldif@gmail.com",
    "password" : "password"
}
```
- Response Success :
```json
{
    "errors" : null,
    "message": "Update user Berhasil",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxx",
            "name": "Nito Aldi",
            "email": "nitoaldif@gmail.com"
        }
    ],
}
```
- Response Error :

```json
{
    "errors" : ["User tidak ditemukan"],
    "message": "Update user gagal",
    "data" : null
}
```
## Delete User API
- Endpoint : DELETE /api/users/:id
- Header :  Authorization : Bearer <access_token>
- Request Body:
- Response Success :
```json
{
    "errors" : null,
    "message": "Delete user Berhasil",
    "data" : [
        {
            "id" : "xxxxxxxxxxxxx",
            "name": "Nito Aldi",
            "email": "nitoaldif@gmail.com"
        }
    ],
}
```
- Response Error :

```json
{
    "errors" : ["User tidak ditemukan"],
    "message": "Delete user gagal",
    "data" : null
}
```


