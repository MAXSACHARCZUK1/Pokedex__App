import {useSelector} from 'react-redux'
import { Navigate, Outlet} from 'react-router-dom'
import swal from 'sweetalert';

const PrivateRoutes = () => {
    const trainer = useSelector(state => state.trainer)
     

    if (trainer !== '') {
        return <Outlet/>
    }else {
        return swal({
            title: "Entrenador",
            text: "Porfavor Digita Tu nombre para continuar",
            icon: "warning",
            dangerMode: true,
          }) && <Navigate to='/'/>
    }
};

export default PrivateRoutes;