import api from './api';

// Enviar que o usuário assistiu um vídeo inteiro.
export async function setUserVideoSeen(): Promise<boolean> {
  try {
    await api.post('/acessos/videos');
    return true;
  } catch (error) {
    return false;
  }
}

// Marca que o usuário acessou a página de mensagens.
export async function setMessagesPageOpened(): Promise<boolean> {
  try {
    await api.post('/acessos/mensagens');
    return true;
  } catch (error) {
    return false;
  }
}

// Marca que o usuário acessou a página de extração de leite.
export async function setExtractionPageOpened(): Promise<boolean> {
  try {
    await api.post('/acessos/ordenha');
    return true;
  } catch (error) {
    return false;
  }
}

// Marca que o usuário acessou a página do diário.
export async function setDiaryPageOpened(): Promise<boolean> {
  try {
    await api.post('/acessos/diario');
    return true;
  } catch (error) {
    return false;
  }
}