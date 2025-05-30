# 🌊 Température de l'eau près de chez vous

Ce projet affiche la température de l’eau à votre position géographique en temps réel, avec une carte interactive et un affichage fluide via un loader animé.

---

## 🚀 Démo en ligne

👉 [Voir la version déployée](https://deephex.github.io/temperature-eau/)

---

## ⚙️ Fonctionnalités

- 📍 Géolocalisation HTML5
- 🗺️ Carte interactive avec [Leaflet.js](https://leafletjs.com)
- 🔄 Chargement visuel via spinner CSS
- 🌐 Requête vers l’API [StormGlass.io](https://stormglass.io) via un **proxy PHP sécurisé**
- 🔐 Clé API **non exposée publiquement**

---

## 🛠️ Technologies utilisées

- HTML / CSS / JavaScript
- Leaflet (carte OpenStreetMap)
- PHP (proxy)
- GitHub Pages (front)
- Render (backend sécurisé)

---

## 🔒 Sécurité de la clé API

La clé API StormGlass est **stockée côté serveur** sur Render.  
Le front interroge ce proxy sécurisé :

```
https://deephex-proxy.onrender.com/proxy.php?lat=...&lng=...
```

---

## 📁 Structure du projet

```
/
├── index.html       # Page principale
├── style.css        # Style global + animation loader
├── script.js        # Logique JS : géoloc, requête, carte, rendu
```

---

## 📦 Déploiement

### Front (GitHub Pages)

1. Créez un dépôt GitHub (ex: `temperature-eau-map`)
2. Ajoutez les fichiers fournis
3. Activez GitHub Pages :
   - Settings > Pages > Deploy from branch
   - Branche : `main` / Dossier : `/root`
4. Votre app sera accessible via :  
   `https://votre-nom.github.io/temperature-eau-map/`

### Back (proxy sur Render)

Utilisez ce dépôt : [`stormglass-proxy`](https://github.com/deephex/stormglass-proxy)  
Hébergez-le avec Docker + variable d’environnement :  
`STORMGLASS_API_KEY`

---

## 📜 Licence

Code open-source sous [MIT License](LICENSE)