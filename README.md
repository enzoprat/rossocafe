# Rosso Café — Seseh, Bali

Site officiel de **Rosso Café**, Italian-American diner à Seseh, Bali.

🌐 [rossocafe.bali](https://rossocafe.bali) · 📸 [@rossocafe.bali](https://instagram.com/rossocafe.bali) · 💬 WhatsApp [+62 821 8189 829](https://wa.me/628218189829)

## Stack

Site statique — HTML / CSS / JS vanilla. Aucune dépendance, aucun build step.

```
site/
├── index.html                       # Home
├── mentions-legales.html
├── cgv.html
├── politique-confidentialite.html
├── styles.css
├── script.js
└── assets/
    ├── img/                         # Logo & pattern
    └── photos/                      # Photos optimisées pour le web
```

## Lancer en local

```bash
# Avec Python
python3 -m http.server 4173

# Ou avec Node
npx serve -l 4173
```

Puis ouvrir [http://localhost:4173](http://localhost:4173).

## Déploiement

Compatible **GitHub Pages**, **Netlify**, **Vercel** ou n'importe quel hébergeur statique. Aucune configuration nécessaire.

---

Site conçu et développé par [Enzo Prat](https://enzoprat.fr).
