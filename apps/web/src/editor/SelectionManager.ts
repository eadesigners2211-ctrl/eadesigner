export class SelectionManager {
  private selectedId: string | null = null;

  select(id: string | null) {
    this.selectedId = id;
  }

  getSelected() {
    return this.selectedId;
  }
}
