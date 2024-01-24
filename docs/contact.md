# Contact API Specification
## Create Contact API

- Endpont : POST /api/contacts
- Header : Authorization : Bearir <access_token>
- Request Body : 
```json
{
    "firstName": "Nito",
    "lastName": "Aldi",
    "email" : "nitoaldi@gmail.com",
    "phone": "123123",
    "address": [
        {
            "addressType": "Rumah",
            "streat": "JL.Jalan",
            "city": "Bandung",
            "province": "Jawa Barat",
            "country": "Indonesia",
            "zipCode": "12345",
            "contactId": 1
        }
    ],
    "userId": "xxxxxxxxxxxxxxxxxxxxxxx"
}
```
- Response Success :
```json
{
    "errors" : null,
    "message": "Akun anda telah aktif",
    "data" : [
        {
            "id": 1,
            "firstName": "Nito",
            "lastName": "Aldi",
            "email" : "nitoaldi@gmail.com",
            "phone": "123123",
            "address": [
                {
                    "addressType": "Rumah",
                    "streat": "JL.Jalan",
                    "city": "Bandung",
                    "province": "Jawa Barat",
                    "country": "Indonesia",
                    "zipCode": "12345",
                    "contactId": 1
                }
            ],
            "userId": "xxxxxxxxxxxxxxxxxxxxxxx"
        }
    ]
}
```
- Response Error :

```json
{
    "errors" : ["Nama harus diisi", "Email harus diisi"],
    "message": "Kontak gagal dibuat",
    "data" : null
}
```
## Search Contract API
- Endpoint : GET /api/contacts
- Header :  Authorization : Bearer <access_token>
- Request Body:
```json
{
    "search": "value"
}
```
- Response Success :
```json
{
    "errors" : null,
    "message": "Get contact Berhasil",
    "data" : [
        {
            "id": 1,
            "firstName": "Nito",
            "lastName": "Aldi",
            "email" : "nitoaldi@gmail.com",
            "phone": "123123",
            "address": [
                {
                    "id": 1,
                    "addressType": "Rumah",
                    "streat": "JL.Jalan",
                    "city": "Bandung",
                    "province": "Jawa Barat",
                    "country": "Indonesia",
                    "zipCode": "12345",
                    "contactId": 1
                },
                 {
                    "id":2,
                    "addressType": "Rumah",
                    "streat": "JL.Jalan",
                    "city": "Bandung",
                    "province": "Jawa Barat",
                    "country": "Indonesia",
                    "zipCode": "12345",
                    "contactId": 1
                }
            ],
            "userId": "xxxxxxxxxxxxxxxxxxxxxxx"
        }
    ],
}
- Response Error :

```json
{
    "errors" : ["Kontak tidak ditemukan"],
    "message": "Get Contact gagal",
    "data" : null
}
```
## Get Contact API
- Endpoint : GET /api/contact/:id
- Header :  Authorization : Bearer <access_token>
- Request Body:
- Response Success :
```json
{
    "errors" : null,
    "message": "Get Contact Berhasil",
    "data" : [
       {
            "id": 1,
            "firstName": "Nito",
            "lastName": "Aldi",
            "email" : "nitoaldi@gmail.com",
            "phone": "123123",
            "address": [
                {
                    "id": 1,
                    "addressType": "Rumah",
                    "streat": "JL.Jalan",
                    "city": "Bandung",
                    "province": "Jawa Barat",
                    "country": "Indonesia",
                    "zipCode": "12345",
                    "contactId": 1
                },
                 {
                    "id":2,
                    "addressType": "Rumah",
                    "streat": "JL.Jalan",
                    "city": "Bandung",
                    "province": "Jawa Barat",
                    "country": "Indonesia",
                    "zipCode": "12345",
                    "contactId": 1
                }
            ],
            "userId": "xxxxxxxxxxxxxxxxxxxxxxx"
        }
    ],
}
- Response Error :

```json
{
    "errors" : ["Contact tidak ditemukan"],
    "message": "Get Contact gagal",
    "data" : null
}
```
## Update Contact API
- Endpoint : PUT /api/contact/:id
- Header :  Authorization : Bearer <access_token>
- Request Body:
```json
{
    "firstName": "Nito",
    "lastName": "Aldi",
    "email" : "nitoaldi@gmail.com",
    "phone": "123123",
}
```
- Response Success :
```json
{
    "errors" : null,
    "message": "Get Contact Berhasil",
    "data" : [
        {
            "id": 1,
            "firstName": "Nito",
            "lastName": "Aldi",
            "email" : "nitoaldi@gmail.com",
            "phone": "123123", 
            "userId": "xxxxxxxxxxxxxxxxxxxxxxx"
        }
    ],
}
- Response Error :

```json
{
    "errors" : ["Contact tidak ditemukan"],
    "message": "Update Contact gagal",
    "data" : null
}
```
## Delete Contact API
- Endpoint : DELETE /api/contact/:id
- Header :  Authorization : Bearer <access_token>
- Request Body:
- Response Success :
```json
{
    "errors" : null,
    "message": "Delete contact Berhasil",
    "data" : {
        "id": 1,
        "firstName": "Nito",
        "lastName": "Aldi",
        "email" : "nitoaldi@gmail.com",
        "phone": "123123",    
    }  
}
```
- Response Error :

```json
{
    "errors" : ["Kontak tidak ditemukan"],
    "message": "Delete contact gagal",
    "data" : null
}
```