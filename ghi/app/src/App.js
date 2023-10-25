import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AgentList from './Sales/AgentList';
import AgentForm from './Sales/AgentForm';
import CustomersList from './Sales/CustomersList';
import CustomersForm from './Sales/CustomersForm';
import SalesList from './Sales/SalesList';
import SalesForm from './Sales/SalesForm';
import SalesHistory from './Sales/SalesHistory';
import ModelList from './Inventory/ModelList';
import ModelForm from './Inventory/ModelForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salespeople/" element={<AgentList />} />
          <Route path="salespeople/create" element={<AgentForm />} />
          <Route path="customers/" element={<CustomersList />} />
          <Route path="customers/create" element={<CustomersForm />} />
          <Route path="sales/" element={<SalesList />} />
          <Route path="sales/create" element={<SalesForm />} />
          <Route path="sales/history" element={<SalesHistory />} />
          <Route path="models/" element={<ModelList />} />
          <Route path="models/create" element={<ModelForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
