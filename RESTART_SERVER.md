# Como Reiniciar o Servidor de Desenvolvimento

Se precisares de reiniciar o servidor para ver as alterações:

## Opção 1: No terminal onde o servidor está a correr
1. Pressiona `Ctrl+C` para parar o servidor
2. Depois executa novamente: `npm run dev`

## Opção 2: Parar e iniciar novamente
```bash
# Parar o servidor (Ctrl+C no terminal onde está a correr)
# Ou matar o processo:
pkill -f "vite"

# Depois iniciar novamente:
npm run dev
```

## Hard Refresh no Browser
Depois de reiniciar o servidor, no browser:
- **Chrome/Edge**: `Ctrl+Shift+R` ou `Ctrl+F5`
- **Firefox**: `Ctrl+Shift+R` ou `Ctrl+F5`
- **Safari**: `Cmd+Shift+R`

Ou abrir as DevTools (F12) e clicar com botão direito no botão de refresh e escolher "Empty Cache and Hard Reload"

