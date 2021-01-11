import axios from 'axios';

class BuscarCepController{

    async buscarEnderecoCep(request, response){
        const {cep} = request.query;
        try {
            const retorno = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
         
            if(retorno.data.erro == true){
                return response.status(400).json({
                    meta: 'CEP inválido!',
                })
            }

            return response.status(200).json(retorno.data);

        } catch (error) {
            return response.status(400).json({
                meta: 'Falha na Requisição!',
            })
        }
    }

    async buscarCepEndereco(request, response) {
        const { logradouro, uf, cidade} = request.query;
        try {
            const retorno = await axios.get(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`);

            if(retorno.data.erro == true){
                return response.status(400).json({
                    meta: 'Endreço inválido!',
                })
            }

            return response.status(200).json(retorno.data);

        } catch (error) {
            return response.status(400).json({
                meta: 'Falha na Requisição!'
            })
        }
            
        
    }
        
}

export default new BuscarCepController();