// aqui eu quero sobrescrever uma tipagem dentro do express
// estou acrescentando o objeto user no tipo
// foi feito para usar na rota, o Request original nao tinha o objeto user
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
