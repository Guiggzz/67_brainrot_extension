import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as sound from 'sound-play';

/**
 * Extension activation
 * This function is called when the extension is activated (on VS Code startup)
 */
export function activate(context: vscode.ExtensionContext) {
	console.log('🔥 67 Brainrot extension is now active!');

	// Get the paths to the audio and GIF files
	const audioPath = path.join(context.extensionPath, 'sounds', '67.mp3');
	const gifPath = path.join(context.extensionPath, 'images', '67.gif');

	// Check if the audio file exists at startup
	if (!fs.existsSync(audioPath)) {
		console.warn('⚠️  67.mp3 file not found in sounds/ folder. Please add it to enable the sound effect.');
		vscode.window.showWarningMessage('67 Brainrot: 67.mp3 file not found in sounds/ folder. Add it to enable sound effects! 🔊');
	}

	// Check if the GIF file exists at startup
	if (!fs.existsSync(gifPath)) {
		console.warn('⚠️  67.gif file not found in images/ folder. Please add it to enable the GIF effect.');
		vscode.window.showWarningMessage('67 Brainrot: 67.gif file not found in images/ folder. Add it to enable GIF effects! 🖼️');
	}

	// Listen to document save events
	const saveListener = vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
		triggerSixSeven(context, audioPath, gifPath);
	});

	// Listen to text changes to detect when user types "67"
	const textChangeListener = vscode.workspace.onDidChangeTextDocument((event) => {
		const document = event.document;

		// Check each change
		for (const change of event.contentChanges) {
			// If user types "67" in one go (paste or autocomplete)
			if (change.text.includes('67')) {
				triggerSixSeven(context, audioPath, gifPath);
				break;
			}

			// If user types "7", check if previous character is "6"
			if (change.text === '7' && change.rangeOffset > 0) {
				const beforePosition = document.positionAt(change.rangeOffset);
				const lineText = document.lineAt(beforePosition.line).text;
				const charIndex = beforePosition.character;

				// Check if the character before is "6"
				if (charIndex > 0 && lineText[charIndex - 1] === '6') {
					triggerSixSeven(context, audioPath, gifPath);
					break;
				}
			}
		}
	});

	// Add the listeners to subscriptions so they're disposed when the extension is deactivated
	context.subscriptions.push(saveListener, textChangeListener);
}

/**
 * Triggers the SIX SEVEN effect: plays sound and shows GIF simultaneously
 * @param context Extension context
 * @param audioPath Path to the 67.mp3 file
 * @param gifPath Path to the 67.gif file
 */
function triggerSixSeven(context: vscode.ExtensionContext, audioPath: string, gifPath: string): void {
	// Play sound and show GIF at the same time
	playSixSevenSound(audioPath);
	showGif(context, gifPath);
}

/**
 * Plays the SIX SEVEN sound effect
 * @param audioPath Path to the 67.mp3 audio file
 */
async function playSixSevenSound(audioPath: string): Promise<void> {
	// Check if the file exists before trying to play
	if (!fs.existsSync(audioPath)) {
		console.error('❌ Cannot play sound: 67.mp3 not found at', audioPath);
		return;
	}

	try {
		// Play the sound (sound-play plays in the background without opening a window)
		await sound.play(audioPath);
		console.log('🔊 SIX SEVEN! Sound played successfully');
	} catch (error) {
		console.error('❌ Error playing 67 sound:', error);
	}
}

/**
 * Shows the 67 GIF in a webview panel
 * @param context Extension context
 * @param gifPath Path to the 67.gif file
 */
function showGif(context: vscode.ExtensionContext, gifPath: string): void {
	// Check if the file exists before trying to show
	if (!fs.existsSync(gifPath)) {
		console.error('❌ Cannot show GIF: 67.gif not found at', gifPath);
		return;
	}

	try {
		// Create a webview panel
		const panel = vscode.window.createWebviewPanel(
			'sixSevenGif',
			'SIX SEVEN! 🔥',
			vscode.ViewColumn.Beside,
			{
				enableScripts: true,
				localResourceRoots: [vscode.Uri.file(path.dirname(gifPath))]
			}
		);

		// Convert file path to webview URI
		const gifUri = panel.webview.asWebviewUri(vscode.Uri.file(gifPath));

		// Set the webview content
		panel.webview.html = getWebviewContent(gifUri.toString());

		// Auto-close the panel after 3 seconds
		setTimeout(() => {
			panel.dispose();
		}, 3000);

		console.log('🖼️ SIX SEVEN GIF displayed!');
	} catch (error) {
		console.error('❌ Error showing GIF:', error);
	}
}

/**
 * Generates the HTML content for the webview
 * @param gifUri URI to the GIF file
 * @returns HTML string
 */
function getWebviewContent(gifUri: string): string {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>SIX SEVEN</title>
			<style>
				body {
					margin: 0;
					padding: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100vh;
					background-color: #000;
					overflow: hidden;
				}
				img {
					max-width: 100%;
					max-height: 100vh;
					object-fit: contain;
				}
			</style>
		</head>
		<body>
			<img src="${gifUri}" alt="SIX SEVEN" />
		</body>
		</html>
	`;
}

/**
 * Extension deactivation
 * This function is called when the extension is deactivated
 */
export function deactivate() {
	console.log('👋 67 Brainrot extension deactivated');
}
