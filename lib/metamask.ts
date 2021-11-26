export function isMetamask() {
  return typeof window !== 'undefined' && !!window.ethereum;
}
