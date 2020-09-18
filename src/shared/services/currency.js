class CurrensyService {
  getCurrensy = async () => {
    try {
      const res = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error)
    }
  };
};

export default new CurrensyService();