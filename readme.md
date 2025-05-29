# 🌊 Température de l'eau près de chez vous

Ce projet affiche en temps réel la température de l'eau (surface) la plus proche de votre position, en utilisant :

- 📍 Géolocalisation navigateur (HTML5)
- 🌐 API StormGlass (via un proxy sécurisé en PHP)
- 🔒 Backend hébergé sur Render pour protéger la clé API
- 🧼 Front 100 % statique hébergé sur GitHub Pages

---

## 🚀 Démo en ligne

👉 [Voir la version déployée](https://deephex.github.io/temperature-eau/)

---

## ⚙️ Fonctionnement

1. Le navigateur demande l'autorisation de vous localiser
2. Les coordonnées sont envoyées à un proxy PHP sur Render
3. Le proxy appelle l'API [StormGlass](https://stormglass.io/) (température de l'eau)
4. Le site affiche la température de surface en °C

---

## 🔐 Sécurité de la clé API

La clé API StormGlass n’est **jamais exposée côté client**.  
Elle est stockée côté serveur sur Render et utilisée via un simple proxy :

https://deephex-proxy.onrender.com/proxy.php?lat=...&lng=...

---

## 📦 Déploiement

### Côté front (GitHub Pages)

- Place le fichier `index.html` à la racine d’un dépôt GitHub
- Active GitHub Pages via les **Settings** du dépôt

### Côté backend (Render)

Voir [ce dépôt](https://github.com/deephex/stormglass-proxy)  
Déploiement Docker avec PHP + clé API stockée dans les **Environment Variables**

---

## 🧠 Technologies

- HTML5 / JavaScript
- Fetch API
- PHP (proxy backend)
- Docker (pour Render)
- StormGlass.io (température de l'eau)
- GitHub Pages (hébergement statique)

---

## 📜 Licence

Code open-source sous licence MIT.