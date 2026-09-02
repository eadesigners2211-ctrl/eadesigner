import type { EditorState } from './editorState';
import { supabase } from '../auth/supabaseClient';

export async function saveLayoutJson(templateId: string, state: EditorState) {
  const { data, error } = await supabase
    .from('templates')
    .update({
      layout_json: state,
      updated_at: new Date().toISOString(),
    })
    .eq('id', templateId)
    .select()
    .single();

  if (error) throw error;

  return data;
}
