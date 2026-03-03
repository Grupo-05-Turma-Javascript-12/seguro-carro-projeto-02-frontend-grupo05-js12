import React, { type ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type Category from '../../../models/Category'; 

function CategoriesForm() {
  const navigate = useNavigate();

  
  const [category, setCategory] = useState<Category>({} as Category);

  
  function handleUpdateState(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
    </>
  )
}

export default CategoriesForm;