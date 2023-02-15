import { v4 as uuid } from "uuid";

//bottoms
const calc1 = (numDays) => {
  return Math.round(numDays * 0.5);
}

//pullovers, swimsuits
const calc2 = (numDays) => {
  return Math.round(numDays * 0.3);
}

//workout outfits, pajamas
const calc3 = (numDays) => {
  return Math.round(numDays * 0.2);
}

//dress shirts, blouses,
const calc4 = (numDays) => {
  return Math.round(3 * (numDays * 0.3));
}

//casual tops, t-shirts
const calc5 = (numDays) => {
  return Math.round(3 * (numDays * 0.3));
}

//underwear and socks
const calc6 = (numDays) => {
  return Math.round(numDays + (numDays * 0.3));
}

const TemperateList = (numDays) => {
  let packingList = [
    {
      item: "Athletic Shoes / Sneakers",
      qty: 1,
      category: "footwear"
    },
    {
      item: "Dress Shoes",
      qty: 1,
      category: "footwear"
    },
    {
      item: "Sandals / Flip-Flops",
      qty: 1,
      category: "footwear"
    },
    {
      item: "Underwear",
      qty: calc6(numDays),
      category: "clothing"
    },
    {
      item: "Socks",
      qty: calc6(numDays),
      category: "clothing"
    },
    {
      item: "Shorts / Skirts",
      qty: calc1(numDays),
      category: "clothing"
    },
    {
      item: "Long Pants",
      qty: calc1(numDays),
      category: "clothing"
    },
    {
      item: "Casual Tops / T-Shirts",
      qty: calc5(numDays),
      category: "clothing"
    },
    {
      item: "Dress Shirts / blouses",
      qty: calc4(numDays),
      category: "clothing"
    },
    {
      item: "Sweaters / Pullovers",
      qty: calc2(numDays),
      category: "clothing"
    },
    {
      item: "Workout Outfit",
      qty: calc3(numDays),
      category: "clothing"
    },
    {
      item: "Pajamas",
      qty: calc3(numDays),
      category: "clothing"
    },
    {
      item: "Jacket",
      qty: 1,
      category: "clothing"
    },
    {
      item: "Hat / Beanie",
      qty: 1,
      category: "accessories"
    },
    {
      item: "Sunglasses",
      qty: 1,
      category: "accessories"
    },
    {
      item: "Scarf",
      qty: 1,
      category: "accessories"
    },
    {
      item: "Sunscreen",
      qty: 1,
      category: "toiletries"
    },
    {
      item: "Phone Charger",
      qty: 1,
      category: "electronics"
    },
    {
      item: "Travel Adapter",
      qty: 1,
      category: "electronics"
    },
    {
      item: "Passport",
      qty: 1,
      category: "documents"
    },
    {
      item: "Vaccination Card",
      qty: 1,
      category: "documents"
    },
    {
      item: "Drivers License",
      qty: 1,
      category: "documents"
    }]
  return packingList;
}

const HotWeatherList = (numDays) => {
  let packingList = [
    {
      item: "Athletic Shoes / Sneakers",
      qty: 1,
      category: "footwear",
      id: uuid()
    },
    {
      item: "Dress Shoes",
      qty: 1,
      category: "footwear",
      id: uuid()
    },
    {
      item: "Sandals / Flip-Flops",
      qty: 1,
      category: "footwear",
      id: uuid()
    },
    {
      item: "Underwear",
      qty: calc6(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Socks",
      qty: calc6(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Shorts / Skirts",
      qty: calc1(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Long Pants",
      qty: calc3(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Casual Tops / T-Shirts",
      qty: calc5(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Dress Shirts / blouses",
      qty: calc3(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Workout Outfit",
      qty: calc3(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Swimsuits",
      qty: calc3(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Pajamas",
      qty: calc3(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Jacket",
      qty: 1,
      category: "clothing",
      id: uuid()
    },
    {
      item: "Hat / Baseball Cap",
      qty: 1,
      category: "accessories",
      id: uuid()
    },
    {
      item: "Sunglasses",
      qty: 1,
      category: "accessories",
      id: uuid()
    },
    {
      item: "Sunscreen",
      qty: 1,
      category: "toiletries",
      id: uuid()
    },
    {
      item: "Phone Charger",
      qty: 1,
      category: "electronics",
      id: uuid()
    },
    {
      item: "Travel Adapter",
      qty: 1,
      category: "electronics",
      id: uuid()
    },
    {
      item: "Passport",
      qty: 1,
      category: "documents",
      id: uuid()
    },
    {
      item: "Vaccination Card",
      qty: 1,
      category: "documents",
      id: uuid()
    },
    {
      item: "Drivers License",
      qty: 1,
      category: "documents",
      id: uuid()
    }]
  return packingList;
}

const ColdWeatherList = (numDays) => {
  let packingList = [
    {
      item: "Athletic Shoes / Sneakers",
      qty: 1,
      category: "footwear",
      id: uuid()
    },
    {
      item: "Dress Shoes",
      qty: 1,
      category: "footwear",
      id: uuid()
    },
    {
      item: "Underwear",
      qty: calc6(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Socks",
      qty: calc6(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Long Pants",
      qty: calc1(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Casual Tops / T-Shirts",
      qty: calc5(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Dress Shirts / blouses",
      qty: calc1(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Sweaters / Pullovers",
      qty: calc4(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Workout Outfit",
      qty: calc3(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Pajamas",
      qty: calc3(numDays),
      category: "clothing",
      id: uuid()
    },
    {
      item: "Jacket",
      qty: 1,
      category: "clothing",
      id: uuid()
    },
    {
      item: "Hat / Beanie",
      qty: 1,
      category: "accessories",
      id: uuid()
    },
    {
      item: "Sunglasses",
      qty: 1,
      category: "accessories",
      id: uuid()
    },
    {
      item: "Scarf",
      qty: 1,
      category: "accessories",
      id: uuid()
    },
    {
      item: "Sunscreen",
      qty: 1,
      category: "toiletries",
      id: uuid()
    },
    {
      item: "Phone Charger",
      qty: 1,
      category: "electronics",
      id: uuid()
    },
    {
      item: "Travel Adapter",
      qty: 1,
      category: "electronics",
      id: uuid()
    },
    {
      item: "Passport",
      qty: 1,
      category: "documents",
      id: uuid()
    },
    {
      item: "Vaccination Card",
      qty: 1,
      category: "documents",
      id: uuid()
    },
    {
      item: "Drivers License",
      qty: 1,
      category: "documents",
      id: uuid()
    }]
  return packingList;
}

export { TemperateList, ColdWeatherList, HotWeatherList }
