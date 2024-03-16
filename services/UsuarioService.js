import axios from "axios";

class UsuarioService {

    constructor() {
        this.token = null;
        this.cdUsuario = null;
        this.baseURL = "http://10.66.41.195:8080"; // URL base da API
        this.timeout = 5000; // Timeout padrão para as requisições
    }

    async cadastrar(data) {
        try {
            const response = await axios.post(`${this.baseURL}/auth/register`, data, {
                timeout: this.timeout,
                headers: {
                    Accept: 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async login(data) {
        try {
            const response = await axios.post(`${this.baseURL}/auth/login`, data, {
                timeout: this.timeout,
                headers: {
                    Accept: 'application/json'
                }
            });

            this.token = response.data.token;
            this.cdUsuario = response.data.cdUsuario;
            console.log(this.token)
            console.log(this.cdUsuario)
            console.log(response.data)
            return this.token;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async getUsers() {
        try {
            const response = await axios.get(`${this.baseURL}/usuario/pesquisa`, {
                timeout: this.timeout,
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${this.token}`
                }
            });

            return response.data;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async getUser() {
        try {
            console.log(this.token)
            console.log(this.cdUsuario)
            const response = await axios.get(`${this.baseURL}/usuario/${this.cdUsuario}`, {
                timeout: this.timeout,
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${this.token}`
                }
            });

            return response.data;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

const usuarioService = new UsuarioService();
export default usuarioService;
