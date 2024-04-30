const values = [
  'ADV',
  'NET30',
  'NET60',
  'DOR',
  'D50B50',
  'COD',
  'LC',
  'INST',
].map(k => {return { id: k, name: `payments.terms.${k}`}});

export const payments = values;