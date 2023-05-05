import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Form />
      <ContactsList />
      {isLoading && !error && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
    </div>
  );
};

export default App;
