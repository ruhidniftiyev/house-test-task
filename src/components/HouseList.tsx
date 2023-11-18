import React from 'react';
import { houseAPI } from '../services/HouseService';
import HouseItem from './HouseItem';
import { housesFetching, housesFetchingSuccess } from '../store/slices/HouseSlice';
import { useAppDispatch } from '../hooks/redux-toolkit';
import { useDispatch } from 'react-redux';

type Props = {};

const HouseList = (props: Props) => {
  const dispatch = useDispatch();

  const { data: houses, isLoading } = houseAPI.useFetchAllHousesQuery('');

  console.log(isLoading);

  if (isLoading) {
    dispatch(housesFetching())
  } else {
    dispatch(housesFetchingSuccess())
  }

  // useEffect(() => {
  //   if (houses) {
  //     dispatch(housesFetchingSuccess());
  //     console.log(12345);
  //   } else {
  //     console.log('Fetch');
  //     dispatch(housesFetching());
  //   }
  // }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {houses && houses.map((house: any) => <HouseItem key={house.id} {...house} />)}
    </div>
  );
};

export default HouseList;
