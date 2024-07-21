// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('lineFilter.filterLines', async () => {
		vscode.window.showInformationMessage("Called");

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage("Not Editor");
		  	return;
		}
	
		const document = editor.document;
		const newLines: string[] = [];
	
		for (let i = 0; i < document.lineCount; i++) {
		  const line = document.lineAt(i);
		  if (line.text.length >= 20 && line.text[19] === '*') {
			newLines.push(line.text);
		  }
		}
	
		const newDocument = await vscode.workspace.openTextDocument({
		  content: newLines.join('\n'),
		  language: document.languageId
		});
		
		await vscode.window.showTextDocument(newDocument);
	  });
	
	  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
