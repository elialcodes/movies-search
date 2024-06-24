import React, { useState, useRef, useEffect } from 'react';

type InputDebounceProps = {
  query: string;
  error: string | null;
  onChange: (value: string) => void;
};

function InputDebounce({ query, error, onChange }: InputDebounceProps) {
  //estado local para hacer debounce en el valor del input (para dar tiempo
  //de escribir al usuario y que no se setee hasta pasado un tiempo)
  const [value, setValue] = useState(query);

  //para hacer una referencia mutable persista entre renders, almacenará
  //el ID del timeout (todos los timeout y setInterval tiene un id intrínseco que
  //se puede usar para cancelarlos con clearTimeout o clearInterval)
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  //actualiza el estado local value cuando el estado de la prop query cambie
  useEffect(() => {
    setValue(query);
  }, [query]);

  //limpiar el timeout cuando el componente se desmonte: este efecto se ejecuta
  //cuando el componente se desmonta, limpiando cualquier timeout pendiente
  //para evitar fugas de memoria.
  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  //función manejadora en el input para:
  //- recoger el valor del input y setear el estado
  //- limpiar cualquier timeout pendiente
  //- establece un nuevo timeout que ejecuta la prop onChange después de 1"
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
