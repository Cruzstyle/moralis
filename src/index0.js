const serverUrl = "https://hca7h0anynwy.usemoralis.com:2053/server";
const appId = "hfDRQXQI0GzrrUsdSoKNy4Pkw0VX7vhNIdfIi3V4";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function asset() {
const Res = await Moralis.Plugins.opensea.getOrders({
  network: chainId,
  tokenAddress: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  tokenId: "7962",
  orderSide: 0,
  page: 1,
});
console.log(Res);
}
