import { useContext } from 'react';
import { ConfirmContext } from '../contexts/ConfirmContext';

const useConfirm = () => {
  return useContext(ConfirmContext);
};

export default useConfirm;
