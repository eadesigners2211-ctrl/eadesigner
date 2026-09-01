import { LayoutDocument } from './editorTypes';
import { defaultLayout } from './defaultLayout';

let currentLayout: LayoutDocument = defaultLayout;

export function getLayout() {
  return currentLayout;
}

export function updateLayout(layout: LayoutDocument) {
  currentLayout = layout;
}
