export function uploadedFile(file: any): boolean {
  const values = [undefined, null, ''];
  return !values.includes(file);
}