import { RolResponse } from "./rol-response.model";
import { UsuarioLoginResponse } from "./usuario-login-response.model";

export class LoginResponse {
    succes: boolean =false;
    mensaje: string ='';
    token: string ='';
    rol1: RolResponse = new RolResponse;
    usuario: UsuarioLoginResponse = new UsuarioLoginResponse;
}