
export default async (request, response, next) => {
  const { cep } = request.query;
  
  if (cep.length != 8) {
    return response.status(400).json({
        meta: 'Cep Inválido!',  
    });
        
  }

  next();
};
