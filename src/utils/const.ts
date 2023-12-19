export const randomTxt = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum eos veniam atque, magni reprehenderit quod! Quidem, ad maxime repellat consequuntur, reprehenderit illum quia eos ex necessitatibus, exceptur corrupti alias.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum eos veniam atque, magni reprehenderit quod! Quidem, ad maxime repellat consequuntur, reprehenderit illum quia eos ex necessitatibus, exceptur corrupti alias.`;

export const customerList = () => {
  return new Array(100).fill("Customer").map((e, index) => {
    const num = index < 10 ? `0${index + 1}` : index + 1;
    return { title: `${e} ${num}`, desc: randomTxt };
  });
};
