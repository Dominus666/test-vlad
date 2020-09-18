import React, { useEffect, useCallback } from 'react';
import CurrencyService from '../../shared/services/currency';
import {setCurrency} from '../../store/actions/currency.actions';
import { useDispatch } from 'react-redux';

import CurrencyTable from '../../components/Home/CurrencyTable/CurrencyTable';

const HomePage = () => {
  const dispatch = useDispatch();
  const getCurrency = useCallback(async () => {
    const data = await CurrencyService.getCurrensy();
    dispatch(setCurrency(data));
  }, [dispatch]);

  useEffect(() => {
    getCurrency()
  }, [getCurrency]);

  return (
    <div>
      <CurrencyTable />
    </div>
  );
};

export default HomePage;