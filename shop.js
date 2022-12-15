
export const shops = [
  {
    shop: 'NIKE.COM',
    url: 'https://www.nike.com/t/calzado-air-jordan-1-zoom-air-comfort-día-de-muertos-vsg01f/FB2931-288',
  },
  {
    shop: 'NIKE.COM',
    url: 'https://www.nike.com/mx/t/jersey-de-f%C3%BAtbol-dri-fit-del-paris-saint-germain-local-2022-23-stadium-talla-grande-bq0JBz/DJ7865-411',
  }
];


export const checkStock = async(browser, shop) => {
    const {url, shop: name} = shop;
    // await page.screenshot({path: 'nike-j81-muertos.png'})
    const content = await page.content()
    // console.log(content);
    const hasStock = content.includes('En este momento, este producto no está disponible') === false
    await browser.close()
    return {shop: name, hasStock: `Esta tienda ${hasStock ? 'Tiene': 'No tiene' } el producto`};
}