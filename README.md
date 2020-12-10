# 22852_CA2_BACK-END-DORSET

## About

CA2 Project 22852

This is a solo project which had the purpose to perform CRUD Request through NodeJS, Express on a React App
The port used : 8080

## Dependencies

- JS
- Node
- Express
- Nodemon
- Body-Parser
- MongoDB
- Axios
- Bulma
- Webpack


## Installation

Launch the Server

```bash
npm run start

```

## :briefcase: Requirements

- Install Dependencies

```bash
npm install

```

## :email: Perform CRUD REQUESTS


### DATABASE INFORMATIONS

- Database : MongoDB
- Name : imdb
- Collection : movies

- Database's properties : 
   
```
imdb.movies {
    title : name of the movie | String
    director : name of the director | String
    year :  year of the release date | Int32
    american : american movie or not| Boolean
    poster : link of the poster | String

}
```

- Url used to Read database : '/'
- Url used to Create a movie : '/create-movie'
- Url used to Update a movie : '/edit-movie/{id}
- DELETE's request only need a button to perform 


### CREATE / POST REQUEST

The POST method requests that the server accept the entity enclosed in the request as a new subordinate of the web resource identified by the URI.
To make the post request : 

- On the main page, **CLICK** on *Add a new movie*
- **FILL OUT** the inputs with appropriate datas 
- **SUBMIT** form with *submit* button

If successful, the console should return :

````shell script
Created in Database

````

### READ / GET REQUEST

The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect. 

To make the GET Request : 

**CONNECT** on the home page : *http://localhost:8080/*

If successful, the console should return :

````shell script
[
  {
    _id: 5fd179c0ea3e08c1295b344b,
    title: 'Tenet',
    director: 'Christopher',
    year: 2020,
    poster: 'https://images-na.ssl-images-amazon.com/images/I/71Tw-XHzu1L._AC_SL1200_.jpg',
    american: false
  },
]...

````

### UPDATE / PUT REQUEST

The PUT method requests that the enclosed entity be stored under the supplied URI. If the URI refers to an already existing resource, it is modified; if the URI does not point to an existing resource, then the server can create the resource with that URI

To make the PUT Request :

- On the main page, Pick a movie and **CLICK** on *Edit* button
- **UPDATE** the inputs you want to update with appropriate datas 
- **SUBMIT** form with *submit* button

If successful, the console should return :

````shell script
Updated in Databse

````

### DELETE / DELETE REQUEST

The DELETE method deletes the specified resource.

To make the DELETE Request : 

- On the main page, Pick a movie and **CLICK** on *Delete* button

If successful, the console should return :

````shell script
Deleted in Database 
````

## License

[ISC](https://choosealicense.com/licenses/isc/)
