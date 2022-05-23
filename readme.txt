Projet No SQL réalisé par mr Thaize Nicolas & mr Tomasi Mattéo :

Le but de ce projet était de s'initier au NO SQL qui est une technologie très utilisée et qui est en forte croissance :

Base de données :

Afin de pouvoir réaliser le projet il faut avoir mangoDB Compass

Il faut ensuite créer une base de données data-gouv

Lancer l'API :

Voici les étapes afin de lancer l'api :

- npm i --save
- node index.js

Suite au lancement de l'api la collection va pouvoir être créer,
 - Il faudra ensuite vous rendre sur : https://www.data.gouv.fr/en/datasets/catalogue-des-donnees-de-data-gouv-fr/
- Télécharger le premier fichier qui contient le jeu de données
- Lancer la commande suivante pour importer les donner du CSV dans la base de données : tr ";" "\t" < file.csv | mongoimport --type csv -d data-gouv -c data-gouvs --headerline --drop export-harvest-20220521-075126.csv
- Les data sont importées

- utiliser ensuite postman par exemple afin de faire des requeêtes à l'API

Si vous souhaitez réaliser un DUMP de la database, et ensuite la restaurer, voici les étapes à suivre : 

- DUMP DATABASE : mongodump --db data-gouv
- RESTORE DATABASE : mongorestore --db data-gouv dump/data-gouv


Le tutoriel est désormais finis, voici le lien 
- github du projet : https://github.com/Intracable78/tp
- Lien du trello : https://trello.com/b/Dbu9oYhW/no-sql


