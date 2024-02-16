import axios from "axios";

class UsuarioService{

    constructor() {
        this.token = null;
    }

    async cadastrar(data){
        return axios({
            url: "http://192.168.3.36:8080/auth/register",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async login(data) {
        try {
            const response = await axios({
                url: "http://192.168.3.36:8080/auth/login",
                method: "POST",
                timeout: 5000,
                data: data,
                headers: {
                    Accept: 'application/json'
                }
            });

            // Armazene o token globalmente
            this.token = response.data.token;
            return this.token;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async getUsers() {
        try {
            const response = await axios({
                url: "http://192.168.3.36:8080/usuario/pesquisa",
                method: "GET",
                timeout: 5000,
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${this.token}` // Incluindo o token no cabeçalho de autorização
                }
            });

            return response.data; // Retornando os dados dos usuários
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

const usuarioService = new UsuarioService()
export default usuarioService