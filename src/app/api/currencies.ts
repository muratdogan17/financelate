export async function getCurrencies() {
  return {
    data: [
      {
        id: 1,
        name: "USD",
        value: 1.0,
      },
      {
        id: 2,
        name: "EUR",
        value: 0.85,
      },
      {
        id: 3,
        name: "GBP",
        value: 0.75,
      },
    ],
  };
}
