import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNewCurrency } from '../../../store/actions/currency.actions';
import { Table } from 'react-bootstrap';
import EditModal from './EditModal/EditModal';

const CurrencyTable = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.currency);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [modalDisabled, setModalDisabled] = useState(false);
  const [modalValue, setModalValue] = useState(0);

  const openModal = (currency) => {
    setModalData(currency);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false)
  };
  const checkValueModal = useCallback(() => {
    if(!modalData) return;
    const value = +modalData[modalData.type]
    const min = +value - (value / 100 * 10);
    const max = +value + (value / 100 * 10);

    if (modalValue < min) {
      setModalDisabled(true);
      return
    }
    if (modalValue > max) {
      setModalDisabled(true);
      return
    }
    setModalDisabled(false)
  }, [modalData, modalValue]);
  useEffect(() => {
    checkValueModal();
  }, [checkValueModal]);
  const modalHandleChange = (e) => {
    const value = e.target.value;
    setModalValue(value)
  };
  const saveValue = (currentItem) => {
    currentItem[currentItem.type] = modalValue;
    delete currentItem.type;
    dispatch(setNewCurrency(currentItem));
    setModal(false)
  }

  const renderTable = () => {
    if (state.newCarrency) {
      return state.newCarrency.map((item, index) => {
        return (
          <tr key={index}>
            <td>{`${item.ccy}/${item.base_ccy}`}</td>
            <td onClick={() => openModal({ ...item, type: 'buy' })}>{item.buy}</td>
            <td onClick={() => openModal({ ...item, type: 'sale' })}>{item.sale}</td>
          </tr>
        )
      });
    };
  };

  return (
    <div className="currency-table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Currency/Current</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {renderTable()}
        </tbody>
      </Table>
      <EditModal
          data={modalData}
          defaultData={state.defaultCarrency}
          show={modal}
          handleClose={closeModal}
          disabled={modalDisabled}
          modalHandleChange={modalHandleChange}
          saveValue={saveValue}
        />
    </div>
  );
};


export default CurrencyTable;