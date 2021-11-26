export function decodeBase64(content: string) {
  if (!content) {
    return '';
  }
  return Buffer.from(content, 'base64').toString();
}

export function toBase64(str: string) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
