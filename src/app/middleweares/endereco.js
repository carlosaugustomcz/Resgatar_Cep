
export default async (request, response, next) => {
    const { uf, cidade, logradouro } = request.query;
    
    if (uf.length == 0) {
      return response.status(400).json({
          meta: 'UF Inválido!',  
      });
    }

    if (cidade.length == 0) {
        return response.status(400).json({
            meta: 'Cidade Inválida!',  
        });
    }
  
    if (logradouro.length == 0) {
        return response.status(400).json({
            meta: 'Logradouro Inválida!',  
        });
    }

    next();
  };
  