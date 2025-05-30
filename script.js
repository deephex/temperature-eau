const proxyURL = 'https://stormglass-proxy.onrender.com/proxy.php';

function afficher(message) {
  document.getElementById('info').innerText = message;
}

function showLoader(show) {
  document.getElementById('loader').style.display = show ? 'block' : 'none';
}

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const map = L.map('map').setView([lat, lng], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap',
    }).addTo(map);

    showLoader(true);

    try {
      const response = await fetch(`${proxyURL}?lat=${lat}&lng=${lng}`);
      const data = await response.json();
      showLoader(false);

      if (data.hours && data.hours.length > 0 && data.hours[0].waterTemperature?.noaa != null) {
        const temp = data.hours[0].waterTemperature.noaa.toFixed(1);
        afficher(`🌡️ Température de l'eau : ${temp} °C`);

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(`<strong>Votre position</strong><br>🌡️ ${temp} °C`)
          .openPopup();
      } else {
        afficher("⚠️ Données de température non disponibles.");
      }
    } catch (error) {
      showLoader(false);
      console.error(error);
      afficher("❌ Erreur lors de la récupération des données.");
    }
  }, (error) => {
    afficher("❌ Erreur géolocalisation : " + error.message);
  });
} else {
  afficher("🚫 Géolocalisation non disponible dans ce navigateur.");
}