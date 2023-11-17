import { useState } from 'react';

function useFormInput(inicialValue: string) {
  const [value, setValue] = useState(inicialValue);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  }

  return {
    value,
    onChange: handleChange,
  }
}

export default useFormInput;
