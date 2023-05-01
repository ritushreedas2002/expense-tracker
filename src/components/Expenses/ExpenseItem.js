import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <Card className='expense-item' >
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'onClick={deleteHandler} >
        <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;