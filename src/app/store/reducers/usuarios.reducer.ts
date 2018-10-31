import { Usuario } from '../../models/usuario.model';
import * as fromUsuarios from '../actions';

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

export function usuariosReducer(state = initState, action: fromUsuarios.usuariosActions): UsuariosState {
    switch (action.type) {
        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [...action.usuarios]
            };

        case fromUsuarios.CARGAR_USUARIOS_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            }
            
        default:
            return state;
    }
}
