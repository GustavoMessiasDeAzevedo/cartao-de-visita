if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(() => console.log('PWA carregado com sucesso!'))
    .catch(err => console.log('Erro ao carregar PWA:', err));
}