import ListResto from '../views/pages/list-resto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

 
const routes = {
  '/': ListResto, // default page
  '/list-resto': ListResto,
  '/detail/:id': Detail,
  '/like': Like,
};
 
export default routes;