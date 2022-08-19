import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [InputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {

        setInputValue(target.value);

    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = InputValue.trim();
        if (newInputValue.length <= 1) return;
        onNewCategory(newInputValue);
        setInputValue('');
    };


  return (
    <form onSubmit={ onSubmit }>
        <input
        type="text"
        placeholder="Buscar gifs"
        value={ InputValue }
        onChange={ onInputChange }
        />
    </form>
  )
}
