const defaultState = {
  id: 1,
  date: '1886-1893',
  text:
    'Mercedes-Benz (German pronunciation: [mɛʁˈtseːdəsˌbɛnts]) is a global automobile manufacturer and a division of the German company Daimler AG. The brand is known for luxury vehicles, buses, coaches, and lorries. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz. \n' +
    "Mercedes-Benz traces its origins to Daimler-Motoren-Gesellschaft's 1901 Mercedes and Karl Benz's 1886 Benz Patent-Motorwagen, which is widely regarded as the first gasoline-powered automobile. The slogan for the brand is the best or nothing \n" +
    "The Benz Patent-Motorwagen ('patent motorcar'), built in 1885, is widely regarded as the world's first automobile,[1] that is, a vehicle designed to be propelled by an internal combustion engine.",
  imageSrc: './src/images/about/1886.jpg'
};

const ItemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SELECTED_ITEM':
      return action.item;
    default:
      return state;
  }
};

export default ItemReducer;
