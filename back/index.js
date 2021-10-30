const express = require("express");
const app = express();



app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});


app.get('/api/v1/profiles/:id', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  
  const id = req.params.id;

  const data = {
    profiles: [
    {
      id: 0,
      nombre: "Fulano de tal",
      profesion: "Plomero",
      link: '/perfil/',
      imageUrl: 'https://picsum.photos/200',
    },
    {
      id: 1,
      nombre: "Mengano",
      profesion: "Gasista",
      link: '/perfil/',
      imageUrl: 'https://picsum.photos/200?',
    },
    {
      id: 2,
      nombre: "Sultano",
      profesion: "Gasista",
      link: '/perfil/',
      imageUrl: 'https://picsum.photos/200??',
    }
    ]
  }

  const persona = data.profiles.filter((obj) => obj.id == id);
  res.end(JSON.stringify({persona}));
});





app.get('/api/v1/mapData', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({ 
      type: "FeatureCollection",
      features: [
          {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [
                  -58.4528200492791,
								  -34.5959886570639
                ]
              },
              properties: {
                id: 0,
                nombre: "Fulano de tal",
                profesion: "Plomero",
                link: '/perfil/',
                imageUrl: 'https://picsum.photos/200',
              }
          },
          {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [
                  -58.4604133778842,
								  -34.6567978457031
                ]
              },
              properties: {
                id: 1,
                nombre: "Mengano",
                profesion: "Gasista",
                link: '/perfil/',
                imageUrl: 'https://picsum.photos/200?',
              }
          },
          {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [
                  -58.4605276992685,
                  -34.5782946601007
                ]
              },
              properties: {
                id: 2,
                nombre: "Sultano",
                profesion: "Gasista",
                link: '/perfil/',
                imageUrl: 'https://picsum.photos/200??',
              }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                -58.4693741540716,
								-34.6638256558981
              ]
            },
            properties: {
              id: 3,
              nombre: "Jorge",
              profesion: "Pintor",
              link: '/perfil/',
              imageUrl: 'https://picsum.photos/200??',
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                -58.4578298572665,
								-34.5970394940223
              ]
            },
            properties: {
              id: 4,
              nombre: "Nestor",
              profesion: "Albañil",
              link: '/perfil/',
              imageUrl: 'https://picsum.photos/200??',
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                -58.4839883919569,
								-34.5893724656529
              ]
            },
            properties: {
              id: 5,
              nombre: "Cesar",
              profesion: "Carpintero",
              link: '/perfil/',
              imageUrl: 'https://picsum.photos/200??',
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                -58.4302546049882,
								-34.6117598449431
              ]
            },
            properties: {
              id: 6,
              nombre: "Jose",
              profesion: "Herrero",
              link: '/perfil/',
              imageUrl: 'https://picsum.photos/200??',
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                -58.5101486029498,
								-34.6149979086219
              ]
            },
            properties: {
              id: 7,
              nombre: "Marta",
              profesion: "Costurera",
              link: '/perfil/',
              imageUrl: 'https://picsum.photos/200??',
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                -58.4625305706803,
								-34.6550596493391
              ]
            },
            properties: {
              id: 8,
              nombre: "Mariano",
              profesion: "Pintor",
              link: '/perfil/',
              imageUrl: 'https://picsum.photos/200??',
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [
                -58.3803242076163,
								-34.6574970602495
              ]
            },
            properties: {
              id: 9,
              nombre: "Maria",
              profesion: "Cocinera",
              link: '/perfil/',
              imageUrl: 'https://picsum.photos/200??',
            }
          }
      ]
  
    
    }));
  });