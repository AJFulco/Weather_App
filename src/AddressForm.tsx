import React, { useState } from 'react';

interface AddressFormProps {
  onSubmit: (address: string) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onSubmit }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <button type="submit">Get Forecast</button>
    </form>
  );
};

export default AddressForm;
