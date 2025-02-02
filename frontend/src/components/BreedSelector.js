import React, { useState } from 'react';
import { Autocomplete, TextField, CircularProgress } from '@mui/material';
import axios from 'axios';

const BreedSelector = ({ onChange }) => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState(null);

  const handleSearch = async (event, value) => {
    if (!value || value.length < 2) return; // Garante que só busca com 2 ou mais caracteres

    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/breeds?search=${value}`);
      setBreeds(response.data);
    } catch (error) {
      console.error('Erro ao buscar raças:', error);
    }
    setLoading(false);
  };

  return (
    <Autocomplete
      options={breeds}
      getOptionLabel={(option) => option?.name || ''} // Evita erro ao tentar acessar `name` de `null`
      filterOptions={(x) => x} // Desativa o filtro padrão para usar apenas os resultados da API
      onInputChange={(event, value) => handleSearch(event, value)}
      onChange={(event, newValue) => {
        setSelectedBreed(newValue); // Atualiza o estado local
        onChange(newValue); // Passa a nova raça para o componente pai
        console.log('1')
        console.log(selectedBreed)
      }}
      value={selectedBreed} // Mantém o estado sincronizado
      isOptionEqualToValue={(option, value) => option.id === value?.id} // Evita erros de comparação
      renderInput={(params) => (
        <TextField
          {...params}
          label="Escolha a raça"
          variant="outlined"
          fullWidth
          value={selectedBreed ? selectedBreed.name : ''} // Evita erro de `undefined`
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default BreedSelector;
