# 🚀 Guide d'installation et de publication

## 📦 Installation locale (pour vous)

### 1. Installer vsce
```bash
npm install -g @vscode/vsce
```

### 2. Créer le package
```bash
vsce package
```
Cela crée `vscode-67-brainrot-0.0.1.vsix`

### 3. Installer dans VS Code

**Option A - Via l'interface:**
1. Ouvrez VS Code
2. Extensions (Ctrl+Shift+X)
3. Cliquez sur "..." en haut à droite
4. "Install from VSIX..."
5. Sélectionnez le fichier .vsix

**Option B - Ligne de commande:**
```bash
code --install-extension vscode-67-brainrot-0.0.1.vsix
```

---

## 🌐 Publication sur le marketplace

### Étape 1: Compte Azure DevOps
1. Allez sur [dev.azure.com](https://dev.azure.com)
2. Créez un compte gratuit Microsoft
3. Créez une organisation

### Étape 2: Personal Access Token (PAT)
1. Sur Azure DevOps, cliquez sur votre profil (en haut à droite)
2. **User settings** → **Personal access tokens**
3. **New Token**
4. Configurez:
   - **Name**: "VS Code Marketplace"
   - **Organization**: Votre organisation
   - **Expiration**: 1 an (ou personnalisé)
   - **Scopes**: **Custom defined**
     - Cochez **Marketplace** → **Manage**
5. **Create**
6. ⚠️ **COPIEZ LE TOKEN** (vous ne pourrez plus le voir!)

### Étape 3: Créer un publisher
```bash
vsce create-publisher guillaumequeau
```

Remplissez les informations demandées:
- **Name**: guillaumequeau
- **Display Name**: Guillaume Queau (ou votre nom)
- **Email**: votre email

### Étape 4: Se connecter
```bash
vsce login guillaumequeau
```

Collez votre Personal Access Token quand demandé.

### Étape 5: Publier! 🎉
```bash
vsce publish
```

Votre extension sera disponible sur [marketplace.visualstudio.com](https://marketplace.visualstudio.com) dans quelques minutes!

---

## 📝 Avant de publier - Checklist

- ✅ Les fichiers `67.mp3` et `67.gif` sont présents
- ✅ Le code est compilé (`npm run compile`)
- ✅ L'extension fonctionne en mode debug (F5)
- ✅ Le README.md est à jour
- ✅ Le LICENSE est présent
- ✅ Le repository Git existe (optionnel mais recommandé)

---

## 🔄 Publier une mise à jour

1. Modifiez la version dans `package.json`:
   ```json
   "version": "0.0.2"
   ```

2. Publiez la nouvelle version:
   ```bash
   vsce publish
   ```

   Ou utilisez un raccourci:
   ```bash
   vsce publish patch   # 0.0.1 → 0.0.2
   vsce publish minor   # 0.0.2 → 0.1.0
   vsce publish major   # 0.1.0 → 1.0.0
   ```

---

## 🎯 Conseils

- **Créez un repository GitHub** pour votre extension (c'est déjà configuré dans package.json)
- **Ajoutez des captures d'écran** dans le README pour le marketplace
- **Testez bien l'extension** avant de publier
- **Gardez votre PAT en sécurité** (ne le commitez jamais!)

---

## 🆘 Problèmes courants

### "Error: Missing publisher name"
→ Ajoutez `"publisher": "guillaumequeau"` dans package.json

### "Error: Repository URL is invalid"
→ Créez d'abord le repository sur GitHub, ou retirez le champ `repository` du package.json

### "Error: ENOENT: no such file or directory"
→ Assurez-vous que `67.mp3` et `67.gif` existent dans sounds/ et images/

---

🔥 **Votre extension est prête à être partagée avec le monde!**
