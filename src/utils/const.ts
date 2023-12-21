/**
 * random Text to be displayed as description
 */
export const randomTxt = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum eos veniam atque, magni reprehenderit quod! Quidem, ad maxime repellat consequuntur, reprehenderit illum quia eos ex necessitatibus, exceptur corrupti alias.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum eos veniam atque, magni reprehenderit quod! Quidem, ad maxime repellat consequuntur, reprehenderit illum quia eos ex necessitatibus, exceptur corrupti alias.`;

/**
 * URL to fetch the random images
 */
export const imgUrl = "https://source.unsplash.com/random/200x200?sign=";

/**
 * Function to create a mock list of customers with dummy data
 * @returns Array of all customers
 */
export const customerList = () => {
  return new Array(100).fill("Customer").map((e, index) => {
    const num = index < 10 ? `0${index + 1}` : index + 1;
    return {
      title: `${e} ${num}`,
      desc: randomTxt,
      detailsTitle: `Customer ${index + 1} details here`,
    };
  });
};

/**
 * Generated random images in 2D array of 3X3 using a mock URL
 * @returns Array of images in 3X3 format
 */
export const Images = () => {
  let num = Math.random() * (100 - 1) + 1;
  return [...Array(3)].map(() => [...Array(3)].map(() => imgUrl + num++));
};
