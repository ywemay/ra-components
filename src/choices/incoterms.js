export const incoterms = [
  'EXW',
  'FCA',
  'CPT',
  'CIP',
  'DAT',
  'DAP',
  'DDP',
  'FAS',
  'FOB',
  'CFR',
  'CIF',
].map(k => {return { id: k, name: `incoterms.${k}`}});
