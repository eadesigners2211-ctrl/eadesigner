export interface DatasetRow {
  rowNumber: number;
  payload: Record<string, unknown>;
}

export interface DatasetInput {
  templateId: string;
  organizationId: string;
  name: string;
  rows: DatasetRow[];
}

export function createDatasetPayload(input: DatasetInput) {
  return {
    template_id: input.templateId,
    organization_id: input.organizationId,
    name: input.name,
    total_rows: input.rows.length,
    rows: input.rows.map((row) => ({
      row_number: row.rowNumber,
      payload_json: row.payload,
    })),
  };
}
