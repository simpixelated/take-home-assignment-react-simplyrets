const states = [
  ['Arizona', 'AZ'],
  ['Alabama', 'AL'],
  ['Alaska', 'AK'],
  ['Arkansas', 'AR'],
  ['California', 'CA'],
  ['Colorado', 'CO'],
  ['Connecticut', 'CT'],
  ['Delaware', 'DE'],
  ['Florida', 'FL'],
  ['Georgia', 'GA'],
  ['Hawaii', 'HI'],
  ['Idaho', 'ID'],
  ['Illinois', 'IL'],
  ['Indiana', 'IN'],
  ['Iowa', 'IA'],
  ['Kansas', 'KS'],
  ['Kentucky', 'KY'],
  ['Louisiana', 'LA'],
  ['Maine', 'ME'],
  ['Maryland', 'MD'],
  ['Massachusetts', 'MA'],
  ['Michigan', 'MI'],
  ['Minnesota', 'MN'],
  ['Mississippi', 'MS'],
  ['Missouri', 'MO'],
  ['Montana', 'MT'],
  ['Nebraska', 'NE'],
  ['Nevada', 'NV'],
  ['New Hampshire', 'NH'],
  ['New Jersey', 'NJ'],
  ['New Mexico', 'NM'],
  ['New York', 'NY'],
  ['North Carolina', 'NC'],
  ['North Dakota', 'ND'],
  ['Ohio', 'OH'],
  ['Oklahoma', 'OK'],
  ['Oregon', 'OR'],
  ['Pennsylvania', 'PA'],
  ['Rhode Island', 'RI'],
  ['South Carolina', 'SC'],
  ['South Dakota', 'SD'],
  ['Tennessee', 'TN'],
  ['Texas', 'TX'],
  ['Utah', 'UT'],
  ['Vermont', 'VT'],
  ['Virginia', 'VA'],
  ['Washington', 'WA'],
  ['West Virginia', 'WV'],
  ['Wisconsin', 'WI'],
  ['Wyoming', 'WY'],
];

const capitalizeEachWord = (string) => {
  if (!string) {
    return ''
  }
  return string
    .toLowerCase()
    .split(' ')
    .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
    .join(' ');
}
const getStateAbbreviation = (state) =>
  states.find(([fullName]) => fullName === state)[1];

export const getFormattedListDate = (listDate) =>
  new Date(listDate).toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' }).split(',')[0];

export const getFormattedListPrice = (listPrice) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(listPrice);

export const getFormattedBaths = (bathsFull, bathsHalf) =>
  bathsFull + bathsHalf / 2;

export const getFormattedAddress = ({
  streetNumber,
  streetName,
  city,
  state,
}) => {
  const street = `${streetNumber} ${capitalizeEachWord(streetName)}`;
  return [
    street,
    capitalizeEachWord(city),
    getStateAbbreviation(capitalizeEachWord(state))
  ].join(', ');
};
