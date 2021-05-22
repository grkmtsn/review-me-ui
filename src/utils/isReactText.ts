export default function isReactText(children: React.ReactNode): boolean {
  return ['string', 'number'].includes(typeof children);
}
