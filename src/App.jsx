import Cart from './Redux/Cart.jsx';
import { Counter } from './Redux/Counter.jsx'; 
import FoodItems from './Redux/FoodItems.jsx';


const App = () => {
  return (
    <div>
      <h1>Redux Cart Example</h1>
      <Counter/>
      <Cart />
      <FoodItems />
    </div>
  );
};

export default App;
