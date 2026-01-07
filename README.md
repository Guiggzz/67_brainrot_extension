# 67 Brainrot 🔥

Une extension VS Code qui affiche un GIF et joue le son viral "SIX SEVEN" (synchronisés) à chaque fois que vous sauvegardez un fichier (Ctrl+S) ou que vous tapez "67" dans votre code!

## À propos du meme 67

Le "67" (prononcé "SIX SEVEN") est un meme brainrot viral de 2025 qui a pris d'assaut internet. Cette extension transforme votre expérience de développement en vous rappelant constamment que vous êtes dans l'ère du 67! 🎵

## Fonctionnalités

- 🎥 Affiche automatiquement une vidéo avec son à chaque sauvegarde (Ctrl+S)
- ⌨️ Détecte quand vous tapez "67" dans le code et déclenche la vidéo
- 🔊 Le son de la vidéo joue automatiquement
- ⏱️ La vidéo disparaît automatiquement après lecture
- 🎯 Activation automatique au démarrage de VS Code
- ⚠️ Gestion d'erreurs si la vidéo est manquante
- 📝 Logs dans la console de développement

## Installation

### Prérequis

1. **Node.js** et **npm** installés sur votre système
2. **Visual Studio Code** (version 1.85.0 ou supérieure)
3. Le fichier vidéo **67.mp4** avec son intégré (à placer dans le dossier `videos/`)

### Étapes d'installation

1. Clonez ou téléchargez ce projet
2. Ouvrez un terminal dans le dossier du projet
3. Installez les dépendances:
   ```bash
   npm install
   ```
4. **IMPORTANT**: Ajoutez votre fichier vidéo:
   ```
   vscode-67-brainrot/
   └── videos/
       └── 67.mp4      ← Placez votre fichier vidéo (avec son) ici
   ```

## Tester l'extension en mode développement

1. Ouvrez le projet dans VS Code
2. Appuyez sur **F5** pour lancer l'extension en mode debug
3. Une nouvelle fenêtre VS Code s'ouvrira avec l'extension activée
4. Ouvrez n'importe quel fichier et sauvegardez (Ctrl+S) ou tapez "67"
5. Profitez de la vidéo "SIX SEVEN"! 🔥

## Structure du projet

```
vscode-67-brainrot/
├── videos/
│   └── 67.mp4              # Fichier vidéo avec son (à fournir)
├── src/
│   └── extension.ts        # Code principal de l'extension
├── out/                    # Fichiers compilés (généré)
├── package.json            # Configuration et dépendances
├── tsconfig.json           # Configuration TypeScript
└── README.md               # Ce fichier
```

## Développement

### Compiler le projet

```bash
npm run compile
```

### Mode watch (recompilation automatique)

```bash
npm run watch
```

### Linter

```bash
npm run lint
```

## Publier l'extension (optionnel)

Si vous souhaitez publier cette extension sur le marketplace VS Code:

1. Installez `vsce`:
   ```bash
   npm install -g @vscode/vsce
   ```

2. Packagez l'extension:
   ```bash
   vsce package
   ```

3. Publiez sur le marketplace:
   ```bash
   vsce publish
   ```

## Dépannage

### La vidéo ne s'affiche pas

- ✅ Vérifiez que le fichier `67.mp4` est bien présent dans le dossier `videos/`
- ✅ Vérifiez la console de développement (Help → Toggle Developer Tools)
- ✅ Assurez-vous que le format vidéo est compatible (MP4 recommandé)
- ✅ Vérifiez que la vidéo contient bien une piste audio

### L'extension ne s'active pas

- ✅ Vérifiez que vous avez bien compilé le projet (`npm run compile`)
- ✅ Relancez VS Code après la compilation
- ✅ Consultez la console de développement pour les erreurs

## Technologies utilisées

- **TypeScript** - Langage de programmation
- **VS Code Extension API** - API pour les extensions VS Code
- **HTML5 Video** - Lecture native de vidéo avec son dans le webview

## Contribuer

N'hésitez pas à proposer des améliorations, corrections de bugs, ou nouvelles fonctionnalités!

## Licence

Ce projet est à des fins éducatives et de divertissement.

## Avertissement

⚠️ Cette extension peut devenir agaçante après un certain temps. Utilisez-la à vos risques et périls! 😄

---

**Fait avec 🔥 pour la communauté 67 brainrot**
