#API Aggregateur Twitter :
- Auteur : Agrijb
- Version : 0.1

#Démarrer le serveur :
- Installer les dépendances avec le "package.json"
  - `npm install`
- Démarrer le serveur :
  - `node app.js`
- Rendez-vous a l'adresse suivante : http://localhost:8012

#Routes : 
##METHODE : GET
###/auth :
- Lancement de la procédure pour récupération de l'access Token de l'utilisateur actuel sur Twitter : 

**NON-FONCTIONEL**

###/callback : 
- Route utilisé par la redirection de Twitter pour récupérer l'access Token. 

**PAS D'ACCES DIRECT**

###/timeline :
- Route qui permet de récupérer le fil d'actualité d'un utilisateur en JSON, pour aboutir la requête doit contenir 2 paramètres :
  - access_token : [AccessToken de l'utilisateur]
  - access_token_secret : [AccessTokenSecret de l'utilisateur]
- Le retour en JSON contiendra les données suivantes :
  - idAuthor : Identifiant Twitter de l'auteur
  - authorName : Nom public de l'auteur (pas son username Twitter)
  - postId : Identifiant Twitter du post 
  - ImageLink : Valeur obligatoire pour l'API core_aggr mais vide
  - content : Contenu texte du post incluant les éventuelles URL
- Exemple :

  ```
  {
  "idAuthor": "191227008",
  "authorName": "Vince Sim",
  "postId": "808091268333076480",
  "postCreatedAt": "Sun Dec 11 23:29:06 +0000 2016",
  "imageLink": "",
  "content": "Grosse démonstration !"
  },
  ```

##METHODE : POST
###/post :
- Route qui permet de poster un statut sur Twitter, la requête doit contenir 3 paramétres :
  - access_token : [AccessToken de l'utilisateur]
  - access_token_secret : [AccessTokenSecret de l'utilisateur]
  - content : [Votre Post]
