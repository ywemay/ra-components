const values = [
  'none',
  'polybag',
  'blister',
  'cartons',
  'bubble',
  'foam',
  'peanuts',
  'paper_dev',
  'cboard_dev',
  'pillows',
  'shrink',
  'combined',
  'other',
].map(k => {return { id: k, name: `packings.types.${k}`}});

export const packings = values;