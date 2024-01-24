# Address API Specification
## Create Contact API

- Endpont : POST /api/address
- Header : Authorization : Bearir <access_token>
- Request Body : 
```json
{
    "addressType": "Rumah",
    "streat": "JL.Jalan",
    "city": "Bandung",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "zipCode": "12345",
    "contactId": 1                    
}
```
- Response Success :
```json
{
    "errors" : null,
    "message": "Address berhasil di buat",
    "data" : [
        {
            "id": 1,
            "addressType": "Rumah",
            "streat": "JL.Jalan",
            "city": "Bandung",
            "province": "Jawa Barat",
            "country": "Indonesia",
            "zipCode": "12345",
            "contactId": 1
        }
    ]
}
```
- Response Error :

```json
{
    "errors" : ["Alamat harus diisi", "Negara harus diisi"],
    "message": "Address gagal dibuat",
    "data" : null
}
```
## Get ALL Address API
- Endpoint : GET /api/address
- Header :  Authorization : Bearer <access_token>
- Request Body:
- Response Success :
```json
{
    "errors" : null,
    "message": "Get Address berhasil",
    "data" : [
        {
            "id": 1,
            "addressType": "Rumah",
            "streat": "JL.Jalan",
            "city": "Bandung",
            "province": "Jawa Barat",
            "country": "Indonesia",
            "zipCode": "12345",
            "contactId": 1
        }
    ]
}
```
- Response Error :

```json
{
    "errors" : ["Address tidak di temukan"],
    "message": "Get Address gagal",
    "data" : null
}
```
## Get Address API
- Endpoint : GET /api/address /:id
- Header :  Authorization : Bearer <access_token>
- Request Body:
- Response Success :
```json
{
    "errors" : null,
    "message": "Get Address Berhasil",
    "data" : [
        {
            "id": 1,
            "addressType": "Rumah",
            "streat": "JL.Jalan",
            "city": "Bandung",
            "province": "Jawa Barat",
            "country": "Indonesia",
            "zipCode": "12345",
            "contactId": 1
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
## Get User API by ID
- Endpoint : GET /api/address/:id
- Header :  Authorization : Bearer <access_token>
- Request Body:
- Response Success :
```json
{
    "errors" : null,
    "message": "Get address Berhasil",
    "data" : [
        {
            "id": 1,
            "addressType": "Rumah",
            "streat": "JL.Jalan",
            "city": "Bandung",
            "province": "Jawa Barat",
            "country": "Indonesia",
            "zipCode": "12345",
            "contactId": 1
        }
    ],
}
```
- Response Error :

```json
{
    "errors" : ["Address tidak ditemukan"],
    "message": "Get address gagal",
    "data" : null
}
```
## Update Address API
- Endpoint : PUT /api/address/:id
- Header :  Authorization : Bearer <access_token>
- Request Body:
```json
{
    "addressType": "Rumah",
    "streat": "JL.Jalan",
    "city": "Bandung",
    "province": "Jawa Barat",
    "country": "Indonesia",
    "zipCode": "12345",
    "contactId": 1   
}
```
- Response Success :
```json
{
    "errors" : null,
    "message": "Update address Berhasil",
    "data" : [
        {
            "id": 1,
            "addressType": "Rumah",
            "streat": "JL.Jalan",
            "city": "Bandung",
            "province": "Jawa Barat",
            "country": "Indonesia",
            "zipCode": "12345",
            "contactId": 1   
        }
    ],
}
- Response Error :

```json
{
    "errors" : ["Address tidak ditemukan"],
    "message": "Update Address gagal",
    "data" : null
}
```
## Delete Address API
- Endpoint : DELETE /api/address/:id
- Header :  Authorization : Bearer <access_token>
- Request Body:
- Response Success :
```json
{
    "errors" : null,
    "message": "Delete address Berhasil",
    "data" : {
        "id": 1,
        "addressType": "Rumah",
        "streat": "JL.Jalan",
        "city": "Bandung",
        "province": "Jawa Barat",
        "country": "Indonesia",
        "zipCode": "12345",
        "contactId": 1   
    }  
}
```
- Response Error :

```json
{
    "errors" : ["Address tidak ditemukan"],
    "message": "Delete address  gagal",
    "data" : null
}
```