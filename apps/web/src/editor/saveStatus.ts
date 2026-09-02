export type SaveStatus = 'saved' | 'saving' | 'dirty' | 'error';

export function getSaveLabel(status: SaveStatus) {
  switch (status) {
    case 'saving':
      return 'Salvando...';
    case 'saved':
      return 'Salvo';
    case 'dirty':
      return 'Alterações pendentes';
    case 'error':
      return 'Erro ao salvar';
  }
}
