import React, { useState, useRef, useEffect } from 'react';

type InputDebounceProps = {
  error: string | null;
  query: string;
  onChange: (value: string) => void;
};

function InputDebounce({ error, query, onChange }: InputDebounceProps) {
  const [value, setValue] = useState(query); // Estado local para el valor del input
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  // Actualiza el estado local cuando el prop query cambie
  useEffect(() => {
    setValue(query);
  }, [query]);

  // Limpiar el timeout cuando el componente se desmonte
  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      onChange(value);
    }, 1000);
  };

  return (
    <input
      className={error ? 'errorInput' : ''}
      onChange={handleChange}
      value={value}
      id="movie"
      type="text"
      placeholder="Oppenheimer, Dune..."
    />
  );
}

export default InputDebounce;
