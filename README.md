# iti-network

## DONE

- Level 1 : 28/28
- Level 2 : 6/10
- Level 3 : 1/4

## TP

### Login

#### Level I

1. ~~Faire le formulaire de login~~ **DONE**
2. ~~Rendre username et le mot de passe obligatoire~~ **DONE**
3. ~~Rediriger l'utilisateur sur /~~ **DONE**

#### Level II

4. Afficher les messages d'erreurs de validation pour chaque champs
5. ~~Afficher un message si le login à échoué~~ **DONE**

### Register

#### Level I

1. ~~Faire le formulaire pour l'ajout d'un user~~ **DONE**
2. ~~Rendre username et le mot de passe obligatoire~~ **DONE**
3. ~~En cas de succès, rediriger l'utilisateur sur /login~~ **DONE**

#### Level II
4. Afficher les messages d'erreurs de validation  pour chaque champs
5. ~~Gérer les username déjà utilisés~~ **DONE**


### Channel

#### Level I

1. ~~Afficher la liste des channels dans le menu~~ **DONE**
2. ~~Pouvoir créer un nouveau channel~~ **DONE**
3. ~~Naviguer sur un channel au clic dans le menu~~ **DONE**

#### Level II

4. ~~Sélectionner par défaut le premier channel de la liste~~ **DONE**
5. ~~Ajouter ajouter les nouveaux channels dynamiquement~~ **DONE**

### Post

### Level I

1. ~~Afficher les postes reçues pour le channel courant~~ **DONE**
2. ~~Afficher l'auteur des messages~~ **DONE**
3. ~~Afficher la date du postes~~ **DONE**
4. ~~Insérer les nouveaux postes reçues via WebSocket~~ **DONE**
5. ~~Afficher une image si le message contient une url vers une image~~ **DONE**
6. ~~Afficher une video si le message contient une url vers une vidéo (https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4)~~ **DONE**
7. ~~Afficher le player de youtube si le message contient un lien youtube~~ **DONE**
8. ~~Ajouter le bouton like~~ **DONE**

### Level II
9. Retirer les urls des messages parsés pour ne restituer que son contenu

### Level III
10. Pouvoir parser plusieurs type de contenus dans un seul poste
11. Remplacer les liens http par des balises <a>...</a>.

### Commentaires

### Level I
1. ~~Pouvoir commenter un postes~~ **DONE**
2. ~~Afficher les commentaires d'un poste~~ **DONE**
3. ~~Afficher l'auteur du commentaires~~ **DONE**
4. ~~Insérer les nouveaux commentaires reçues via WebSocket~~ **DONE**

### Level II
5. ~~Parser les commentaires comme les postes : extraire les images, vidéos...~~ **DONE**

### Activités et notifications

### Level I
1. ~~Créer un NotificationService~~ **DONE**
2. ~~Lister les activités dans le menu à droite~~ **DONE**
3. ~~Ajouter une activté lors d'un nouveau poste via le NotificationService~~ **DONE**
4. ~~Ajouter une activté lors d'un commentaire sur un poste via le NotificationService~~ **DONE**
5. ~~Ajouter une activté lorsqu'un membre se connecte via le NotificationService~~ **DONE**
6. ~~Ajouter une activité lors d'un like via le NotificationService~~ **DONE**
7. ~~Ajouter une activité lors de l'ajout d'un channel via le NotificationService~~ **DONE**

### Level II
8. Afficher une popup de notification avec [angular2-notifications](https://github.com/flauc/angular2-notifications)
9. ~~Persister les activités dans le [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)~~ **DONE**

### Level III
10. ~~utiliser [angular2-notifications](https://github.com/flauc/angular2-notifications) pour afficher des notifications avec chrome~~ **DONE**
11. Si l'activité concerne un poste (nouveau poste, commentaire sur un poste, like d'un poste) rendre l'activité clicable. Le clic doit rediriger sur le bon channel et scroller jusqu'au poste concerné
