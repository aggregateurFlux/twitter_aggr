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
- Lancement de la procédure pour récupération de l'access Token de utilisateur actuel sur Twitter : 

/!\ NON-FONCTIONEL /!\

###/callback : 
- Route utilisé par la redirection de Twitter pour récupérer l'access Token

##METHODE : GET
###/timeline :
- Route qui permet de récuperer le fil d'actualité d'un utilisateur en JSON, pour aboutir la requete doit contenir 2 parametres :
  - access_token : [Votre AccessToken]
  - access_token_secret : [Votre AccessTokenSecret]
- Le retour en JSON contiendra les données suivantes :
- id : Id du post sur Twitter
- createdAt : Date de création du post
- content : Le contenu du post
- user : Cette information possede plusieurs attributs comme :
- Le nom public de l'utilisateur
- Son nom sur twitter (précédé d'un @)
- La localisation qu'il a indiqué sur son compte Twitter
- Sa description
- Les URL qu'il a put renseigner en public sur Twitter
- Beaucoup d'information propre a son compte twitter comme l'url de son avatar, le couleur de son theme, image de fond, etc ...

##METHODE : POST
###/post :
- Route qui permet de poster un statut sur Twitter, la requete doit contenir 3 paramétres :
  - access_token : [Votre AccessToken]
  - access_token_secret : [Votre AccessTokenSecret]
  - content : [Votre Post]
