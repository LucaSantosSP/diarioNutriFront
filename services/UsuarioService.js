import axios from "axios";

class UsuarioService {

    constructor() {
        this.token = null;
        this.cdUsuario = null;
        this.baseURL = "http://10.66.41.195:8080"; // URL base da API
        this.timeout = 5000; // Timeout padrão para as requisições
    }

    //Cadastros

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

    async cadastrarRefeicao(data) {
        try {
            if (!data.tabUsuarioObj) {
                data.tabUsuarioObj = {};
            }
            data.tabUsuarioObj.cdUsuario = this.cdUsuario;
            const response = await axios.post(`${this.baseURL}/refeicaotipo/gravar`, data, {
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

    async cadastrarAlimento(data) {
        try {
            if (!data.tabUsuarioObj) {
                data.tabUsuarioObj = {};
            }
            data.tabUsuarioObj.cdUsuario = this.cdUsuario;
            const response = await axios.post(`${this.baseURL}/alimento/gravar`, data, {
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

    //-------------------

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

    async getRefeicoes() {
        try {
            const response = await axios.get(`${this.baseURL}/refeicao/refeicaodia/${this.cdUsuario}`, {
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

    async getRefeicaoAlimento(cdRefeicao) {
        try {
            const response = await axios.get(`${this.baseURL}/refeicao/refeicaoalimento/${this.cdUsuario}/${cdRefeicao}`, {
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

    async getMacronutrientes() {
        try {
            const response = await axios.get(`${this.baseURL}/refeicao/macronutrientes/${this.cdUsuario}`, {
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

    async getNutrientesAlimentos(cdRefeicao) {
        try {
            const response = await axios.get(`${this.baseURL}/refeicao/nutrientesAlimento/${this.cdUsuario}/${cdRefeicao}`, {
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

    async getAlimentos() {
        try {
            const response = await axios.get(`${this.baseURL}/alimento/pesquisa/${this.cdUsuario}`, {
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

    async getAlimentosByPesquisa(txAlimento) {
        try {
            const response = await axios.get(`${this.baseURL}/alimento/pesquisabypesquisa/${this.cdUsuario}/${txAlimento}`, {
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

    async getAlimento(cdAlimento) {
        try {
            const response = await axios.get(`${this.baseURL}/alimento/${cdAlimento}`, {
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
    
    async adicionarNovoAlimento(cdAlimento, cdRefeicao) {
        
        try {
            console.log("teste de envio", cdAlimento, cdRefeicao);
            const response = await axios.get(`${this.baseURL}/alimento/adicionaralimento/${cdAlimento}/${cdRefeicao}`, {
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
